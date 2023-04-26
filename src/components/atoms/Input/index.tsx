import type { Ref } from 'react';
import { useState, useMemo, forwardRef } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'phone'
  | 'password'
  | 'button';

export interface InputProps<T extends InputType = 'text'>
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'placeholder' | 'onFocus' | 'id' | 'onClick'
  > {
  type?: T;
  value?: T extends 'number' | 'large-number' ? number : string;
  disabled?: boolean | 'read-only';
  onChange?: (value: InputProps<T>['value']) => void;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  className?: string;
}

export const Input: <T extends InputType = 'text'>(
  props: InputProps<T>,
) => JSX.Element | null = forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      disabled = false,
      value,
      onChange,
      onClick,
      id,
      onFocus,
      name,
      className,
    },
    ref,
  ) => {
    const [isFocused, setIsFucused] = useState(false);

    const displayedValue = (() => {
      if (type === 'button' && !value) {
        return placeholder;
      }

      if (value !== 0 && !value) {
        return '';
      }

      const valueString = String(value);

      if (isFocused) {
        return valueString;
      }

      switch (type) {
        case 'number':
          return valueString;
        case 'large-number':
          return Number(valueString).toLocaleString();
        case 'phone':
          return valueString.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        default:
          return valueString;
      }
    })();

    const convertChangeHandlerParam = useMemo(() => {
      const leftOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');
      switch (type) {
        case 'number':
        case 'large-number':
          return (value) => (value ? Number(leftOnlyNumber(value)) : undefined);
        case 'phone':
          return (value) => (value ? leftOnlyNumber(value) : undefined);
        default:
          return (value) => value || undefined;
      }
    }, [type]) as (param: string) => typeof value;

    return (
      <input
        id={id}
        name={name}
        ref={ref}
        onFocus={(e) => {
          setIsFucused(true);
          onFocus?.(e);
        }}
        onBlur={() => setIsFucused(false)}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        value={displayedValue}
        className={cleanClassName(
          `${styles.input} ${disabled === 'read-only' && styles['read-only']} ${
            type === 'button' && styles.button
          } ${value || styles.empty} ${styles['default-width']} ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) =>
          onChange?.(convertChangeHandlerParam(value))
        }
      />
    );
  },
);
