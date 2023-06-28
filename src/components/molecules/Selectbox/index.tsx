import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import type {
  InputProps,
  OptionsProps,
  ValidOptionValue,
  InputWrapProps,
  LabelWithInputProps,
} from '@components/atoms';
import { FocusLayer, Options, Input, Label } from '@components/atoms';
import type {
  ValidateHandler,
  UseTypographyClassNameParams,
  ValidationTrigger,
} from '@hooks';
import { useSubscribedState, useValidationMessage } from '@hooks';

export interface SelectboxProps<
  _ValidOptionValue = ValidOptionValue,
  _Multiple = boolean,
> extends Pick<
      OptionsProps<_ValidOptionValue, _Multiple>,
      'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'optionStyle'
    >,
    Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>,
    Pick<InputWrapProps, 'onClick'>,
    Omit<LabelWithInputProps, 'children'> {
  validation?: ValidateHandler<SelectboxProps<_ValidOptionValue>['value']>;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> &
    UseTypographyClassNameParams;
  validationTrigger?: ValidationTrigger;
}

export const Selectbox = <
  _ValidOptionValue extends ValidOptionValue = ValidOptionValue,
  _Multiple extends boolean = false,
>({
  value,
  options,
  onChange,
  float,
  disabled,
  placeholder,
  id,
  ref,
  onClick,
  label,
  validation,
  className,
  inputStyle,
  labelStyle,
  multiple,
  optionStyle,
  validationTrigger,
}: SelectboxProps<_ValidOptionValue, _Multiple>) => {
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useSubscribedState(value);

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, validateOnChange, validateOnBlur } =
    useValidationMessage({
      key: label,
      validateHandler: validation,
      value: selectedValue,
      validationTrigger,
    });

  return (
    <Label.WithInput
      label={label}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      className={className}
    >
      <FocusLayer onBlur={() => setOpened(false)} focused={opened} bodyScroll>
        <Input.Wrap
          validationMessage={validationMessage}
          size={inputStyle?.size}
          borderRadius={inputStyle?.borderRadius}
          width={inputStyle?.width}
          onClick={(e) => {
            setOpened(!opened);
            onClick?.(e);
          }}
        >
          <Input
            id={id}
            name={label}
            type="button"
            ref={ref}
            value={selectedOption?.label}
            disabled={disabled}
            placeholder={placeholder}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
            onBlur={validateOnBlur}
          />
          <ChevronDown />
        </Input.Wrap>
        <Options
          opened={opened}
          options={options}
          multiple={multiple}
          value={selectedValue}
          float={float}
          optionStyle={optionStyle}
          onChange={(value) => {
            setSelectedValue?.(value);
            validateOnChange?.(value);
            onChange?.(value);
            setOpened(false);
          }}
        />
      </FocusLayer>
    </Label.WithInput>
  );
};
