import { createContext } from 'react';

import type{ ValidationStoreData} from '@contexts/ValidationContext';


export const ValidationContext = createContext<ValidationStoreData | null>(
  null,
);

/**
 * @deprecated Use `validationObserver` instead.
 */
export const createValidationStore = () => {
  const data: ValidationStoreData = new Map();
  return {
    data,
    provideValidationStore: (children: React.ReactNode) => (
      <ValidationContext.Provider value={data}>
        {children}
      </ValidationContext.Provider>
    ),
    validateAll: () => {
      let isValid = true;
      const invalidKeys: string[] = [];

      data.forEach((validation, key) => {
        if (validation()) {
          isValid = false;
          invalidKeys.push(key);
        }
      });

      const scrollToFirstInvalid =
        invalidKeys.length > 0
          ? () => {
              const [firstInvalidKey] = invalidKeys;

              const [firstInvalidElement] =
                document.getElementsByName(firstInvalidKey);

              if (firstInvalidElement) {
                firstInvalidElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }
          : undefined;

      return {
        isValid,
        invalidKeys,
        scrollToFirstInvalid,
      };
    },
  };
};

export type ValidationStore = ReturnType<typeof createValidationStore>;