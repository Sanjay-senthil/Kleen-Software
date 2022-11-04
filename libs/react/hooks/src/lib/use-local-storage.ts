import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { isNilOrEmpty } from '@kleeen/common/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface UseLocalStorage<T = any> {
  localStorageValue: T;
  setLocalStorageValue: Dispatch<SetStateAction<T>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLocalStorage<T = any>(
  key: string,
  defaultValue: any, // eslint-disable-line @typescript-eslint/no-explicit-any
): UseLocalStorage<T> {
  const [localStorageValue, setLocalStorageValue] = useState<T>(defaultValue);

  // *This hook is important since the key might be nilOrEmpty when the state is initialized
  useEffect(() => {
    if (isNilOrEmpty(key)) return;

    const initialLocalStorageValue = tryToGetLocalStorageItem(key, defaultValue);

    setLocalStorageValue(initialLocalStorageValue);
  }, [key]);

  useEffect(() => {
    if (isNilOrEmpty(key)) return;

    localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue]);

  return { localStorageValue, setLocalStorageValue };
}

//#region Private Members
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tryToGetLocalStorageItem(key: string, defaultValue: any) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
  } catch (error) {
    console.error(error);

    return defaultValue;
  }
}
//#endregion
