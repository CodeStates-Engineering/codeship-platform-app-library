import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { FocusLayer, Options, Input, InputContainer, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  Option,
} from '../../atoms';

export type SelectboxProps<_Option extends Option = Option> = Omit<
  InputProps<'button'> & InputContainerProps,
  | 'type'
  | 'children'
  | 'validationMessage'
  | 'onFocus'
  | 'value'
  | 'onChange'
  | 'name'
> &
  Partial<
    Pick<OptionsProps<_Option>, 'float' | 'options' | 'width' | 'value'>
  > & {
    onlyUpdatedByParent?: boolean;
    onChange?: OptionsProps<_Option>['onSelect'];
    label?: string;
    validation?: Validation<SelectboxProps<_Option>['value']>;
    validationSpace?: boolean;
  };

export const Selectbox = <_Option extends Option = Option>({
  float,
  value,
  width,
  options,
  onChange,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  size,
  id,
  ref,
  onClick,
  label,
  validation,
  validationSpace,
}: SelectboxProps<_Option>) => {
  const [opened, setOpened] = useState(false);

  const [selectedOption, setSelectedOption] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        width={width}
        size={size}
        onClick={(e) => {
          setOpened(!opened);
          onClick?.(e);
        }}
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <Input
          id={id}
          name={label}
          type="button"
          ref={ref}
          value={selectedOption?.label}
          disabled={disabled}
          placeholder={placeholder}
        />
        <ChevronDown
          className={cleanClassName(
            `${styles.arrow} ${opened && styles['opened-arrow']}`,
          )}
        />
        <Options
          opened={opened}
          options={options}
          width={width}
          value={selectedOption}
          onSelect={(option) => {
            const optionForSelect =
              option === selectedOption ? undefined : option;
            setSelectedOption?.(optionForSelect);
            checkValidation?.(optionForSelect);
            onChange?.(optionForSelect);
            setOpened(false);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
