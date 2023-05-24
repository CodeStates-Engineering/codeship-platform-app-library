import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName, regex } from '../../../utils';
import { FocusLayer, Options, Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  InputWrapProps,
  OptionsProps,
  Option,
  LabelContainerProps,
} from '../../atoms';

export interface SearchboxProps
  extends Pick<
      InputProps<'text'>,
      | 'value'
      | 'onChange'
      | 'disabled'
      | 'placeholder'
      | 'onFocus'
      | 'onClick'
      | 'id'
      | 'ref'
    >,
    Pick<OptionsProps<Option<string>, false>, 'float'> {
  selfFilter?: boolean;
  onlyUpdatedByParent?: boolean;
  options?: string[];
  label?: string;
  validation?: Validation<SearchboxProps['value']>;
  validationSpace?: boolean;
  className?: string;
  inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}

export const Searchbox = ({
  float,
  value,
  options: stringOptions,
  onChange,
  selfFilter = true,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  onFocus,
  id,
  onClick,
  ref,
  label,
  validation,
  validationSpace,
  className,
  inputStyle,
  labelStyle,
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const options = useMemo(() => {
    const options = stringOptions?.map((value) => ({
      label: value,
      value,
    }));

    if (!selfFilter || !options || !inputText) {
      return options;
    }

    const standardizeString = (value: string) =>
      value.toLowerCase().replace(regex.symbols, '');

    const standardizeInputTextArray = inputText
      .split(' ')
      .map((value) => standardizeString(value));

    return options.filter(({ value }) => {
      const standardizeOption = standardizeString(value);
      return standardizeInputTextArray.every((inputText) =>
        standardizeOption.includes(inputText),
      );
    });
  }, [selfFilter, inputText, stringOptions]);

  const { validationMessage, checkValidation } = useValidation(
    inputText,
    validation,
    label || id,
  );

  const handleChange = (value?: string) => {
    setInputText?.(value);
    onChange?.(value);
    checkValidation?.(value);
  };

  return (
    <FocusLayer
      onClick={() => setOpened(false)}
      focused={opened}
      className={cleanClassName(`${styles.searchbox} ${className}`)}
      bodyScroll
    >
      <Input.Container
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <Label.Container direction={labelStyle?.direction}>
          {label ? (
            <Label
              fontSize={labelStyle?.fontSize}
              fontWeight={labelStyle?.fontWeight}
              htmlFor={label}
            >
              {label}
            </Label>
          ) : null}
          <Input.Wrap
            onClick={onClick}
            size={inputStyle?.size}
            borderRadius={inputStyle?.borderRadius}
          >
            <Input
              name={label}
              ref={ref}
              onChange={(value) => {
                setOpened(true);
                handleChange(value);
              }}
              fontSize={inputStyle?.fontSize}
              fontWeight={inputStyle?.fontWeight}
              onClick={() => setOpened(true)}
              onFocus={onFocus}
              id={id}
              value={inputText}
              disabled={disabled}
              placeholder={placeholder}
            />
            <Search />
          </Input.Wrap>
        </Label.Container>
        <Options
          opened={opened}
          options={options}
          value={
            inputText
              ? {
                  label: inputText,
                  value: inputText,
                }
              : undefined
          }
          onSelect={(option) => {
            setOpened(false);
            handleChange(option?.value);
          }}
          float={float}
        />
      </Input.Container>
    </FocusLayer>
  );
};
