import { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Maybe, ReactElement, USER_LANGUAGE_PREFERENCES_KEY } from '@kleeen/types';

import { useKleeenContext } from './useKleeenContext';
import { useLocalStorage } from './use-local-storage';

export enum Language {
  en = 'en',
  es = 'es',
}

export const defaultLanguage = Language.en;

interface LocalizationContext {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const LocalizationContext = createContext<LocalizationContext>({
  language: defaultLanguage,
  setLanguage: (newLanguage: Language) => newLanguage,
});

export function useLocalization() {
  const context = useContext<LocalizationContext>(LocalizationContext);

  if (!context) {
    throw new Error('This hook cannot be consumed outside "LocalizationContextProvider" component');
  }

  return context;
}

interface LocalizationProvidersProps {
  children: ReactElement;
}

export function LocalizationContextProvider({ children }: LocalizationProvidersProps) {
  const { localStorageValue, setLocalStorageValue } = useLanguageStoredValue();
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    setLanguage(localStorageValue);
  }, [localStorageValue]);

  const localizationContextValue = useMemo(
    () => ({
      language,
      setLanguage: setLocalStorageValue,
    }),
    [language, setLocalStorageValue],
  );

  return (
    <LocalizationContext.Provider value={localizationContextValue}>{children}</LocalizationContext.Provider>
  );
}

//#region Private Members
function getUserPreferencesLanguageKey(userName: string): Maybe<string> {
  return userName ? `${USER_LANGUAGE_PREFERENCES_KEY}${userName}` : null;
}

function useLanguageStoredValue() {
  const { currentUser } = useKleeenContext('endUser');

  const userPreferencesLanguageKey = getUserPreferencesLanguageKey(currentUser?.username);
  const { localStorageValue, setLocalStorageValue } = useLocalStorage<Language>(
    userPreferencesLanguageKey,
    defaultLanguage,
  );

  return { localStorageValue, setLocalStorageValue };
}
//#endregion
