/// <reference types="react" />
import type { DayPickerProps, DateRange } from 'react-day-picker';
import type { Validation, Typography } from '../../../hooks';
import type { InputProps, InputWrapProps, LabelContainerProps } from '../../atoms';
type DateType = Exclude<DayPickerProps['mode'], 'default'>;
type DateValue<TDateType extends DateType> = TDateType extends 'multiple' ? Date[] : TDateType extends 'range' ? DateRange : Date;
export interface DateSelectboxProps<TDateType extends DateType = 'single'> extends Pick<InputProps<'text'>, 'className' | 'placeholder' | 'disabled' | 'onFocus' | 'id' | 'onClick' | 'ref'> {
    label?: string;
    type?: TDateType;
    value?: DateValue<TDateType>;
    onChange?: (value?: DateValue<TDateType>) => void;
    validation?: Validation<DateSelectboxProps<TDateType>['value']>;
    validationSpace?: boolean;
    inputStyle?: Typography & Pick<InputWrapProps, 'size' | 'borderRadius' | 'width'> & {
        calendarX?: 'left' | 'right';
    };
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}
export declare const DateSelectbox: <TDateType extends DateType = "single">({ value, type, onChange, placeholder, disabled, onFocus, id, onClick, ref, label, validation, validationSpace, className, inputStyle, labelStyle, }: DateSelectboxProps<TDateType>) => JSX.Element;
export {};