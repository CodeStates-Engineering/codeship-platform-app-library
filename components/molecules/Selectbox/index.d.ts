/// <reference types="react" />
import type { InputProps, OptionsProps, ValidOptionValue, InputWrapProps, LabelContainerProps } from '../../atoms';
import type { Validation, Typography } from '../../../hooks';
export interface SelectboxProps<_ValidOptionValue = ValidOptionValue, _Multiple = boolean> extends Pick<OptionsProps<_ValidOptionValue, _Multiple>, 'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'optionStyle'>, Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>, Pick<InputWrapProps, 'onClick'> {
    label?: string;
    validation?: Validation<SelectboxProps<_ValidOptionValue>['value']>;
    className?: string;
    inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> & Typography;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}
export declare const Selectbox: <_ValidOptionValue extends ValidOptionValue = ValidOptionValue, _Multiple extends boolean = false>({ value, options, onChange, float, disabled, placeholder, id, ref, onClick, label, validation, className, inputStyle, labelStyle, multiple, optionStyle, }: SelectboxProps<_ValidOptionValue, _Multiple>) => JSX.Element;