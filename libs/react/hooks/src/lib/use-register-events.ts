import { Maybe, OnInputChangeEvent, RegisterEvents } from '@kleeen/types';
import { useEffect, useRef, useState } from 'react';

type UseRegisterEventsFn = <T extends string | number | boolean | undefined>(v: {
  /** The id of the form field. It should be unique */
  id: string;
  /** Primitive value to register.  */
  inputValue: T;
  onInputChange: OnInputChangeEvent;
  onRegisterEvents: RegisterEvents;
  /**
   * Called when the form is saved.
   * You can call your custom code here; or if you prefer,
   * you can call a kleeen action by returning the expected firm.
   * @example
   * // With custom code.
   * onSave(): void => {
   *    ...your custom save.
   * }
   * @example
   * // Using the `amount` thing as an example.
   * onSave() => {
   *   return {
   *      entity: 'amount', // Example amount
   *      params: {
   *          amount: [{
   *              id: '<THE_ID_AS_STRING>',
   *              displayValue: 500
   *          }]
   *      }
   *   }
   * }
   * */
  onSave: (v: Maybe<T>) => any;
}) => [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];

/**
 * It registers an event by implementing the `onRegisterEvents` API
 * @returns The value and the setter to manage the field value.
 */
export const useRegisterEvents: UseRegisterEventsFn = ({
  id,
  inputValue,
  onRegisterEvents,
  onInputChange,
  onSave,
}) => {
  const [value, setValue] = useState<typeof inputValue>();
  const valueRef = useRef(value);

  const handleOnSave = () => {
    // There are no changes to save.
    if (valueRef.current === inputValue) return;

    return onSave(valueRef.current);
  };

  const onCancel = () => {
    setValue(inputValue);
  };

  // Set input value.
  useEffect(() => {
    if (!inputValue) return;

    setValue(inputValue);
  }, [inputValue]);

  // Set selected value.
  useEffect(() => {
    valueRef.current = value;

    if (valueRef.current !== inputValue) {
      onInputChange?.(true);
    }
  }, [value]);

  useEffect(() => {
    if (!onRegisterEvents) return;

    onRegisterEvents({
      id,
      onSave: handleOnSave,
      onCancel,
    });
  }, [value]);

  return [value, setValue];
};
