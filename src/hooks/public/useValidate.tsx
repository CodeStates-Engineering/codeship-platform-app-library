import { useContext, useCallback } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';
import type { ValidationContextValue } from '@contexts/ValidationContext';

interface ValidateResult {
  isValid: boolean;
  invalidElementIds: string[];
}

interface ValidateOptions {
  scrollToFirstInvalid?: boolean;
}

export const useValidate = () => {
  const validationContext = useContext(ValidationContext);

  const validate = useCallback(
    (options?: ValidateOptions) => {
      const scrollToFirstInvalid = options?.scrollToFirstInvalid ?? true;

      const validateResult: ValidateResult = {
        isValid: true,
        invalidElementIds: [],
      };

      validationContext?.forEach((validateOnChange, id) => {
        if (validateOnChange()) {
          validateResult.isValid = false;
          validateResult.invalidElementIds.push(id);
        }
      });

      if (scrollToFirstInvalid && !validateResult.isValid) {
        const [firstInvalidElementId] = validateResult.invalidElementIds;

        const firstInvalidElement = document.getElementById(
          firstInvalidElementId,
        );

        firstInvalidElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }

      return validateResult;
    },
    [validationContext],
  );

  return {
    validate,
  };
};

export const validationObserver = <T extends object>(
  Component: (props: T) => JSX.Element | null,
) => {
  const validationStore: ValidationContextValue = new Map();
  // eslint-disable-next-line react/function-component-definition
  return (props: T) => (
    <ValidationContext.Provider value={validationStore}>
      <Component {...props} />
    </ValidationContext.Provider>
  );
};
