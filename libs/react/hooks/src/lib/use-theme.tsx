import { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Maybe, ReactElement, USER_THEME_PREFERENCES_KEY } from '@kleeen/types';

import { theme as defaultTheme } from '@kleeen/settings';
import { useKleeenContext } from './useKleeenContext';
import { useLocalStorage } from './use-local-storage';

interface Theme {
  flavor: string;
  font?: string;
  kit?: string;
}

interface ThemeContext {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
  themeClass: string;
}

export enum ThemeKit {
  Dark = 'dark',
  Light = 'light',
}

const ThemeContext = createContext<ThemeContext>({
  setTheme: (newTheme: Theme): Theme => newTheme,
  themeClass: buildThemeClass(defaultTheme),
  theme: defaultTheme,
});

export function useTheme() {
  const context = useContext<ThemeContext>(ThemeContext);

  if (!context) {
    throw new Error('This hook cannot be consumed outside "ThemeContextProvider" component');
  }

  return context;
}

interface ThemeContextProviderProps {
  children: ReactElement;
}

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const { localStorageValue, setLocalStorageValue } = useGetThemeStoredValue();
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    setTheme(localStorageValue);
  }, [JSON.stringify(localStorageValue)]);

  const themeContextValue = useMemo(
    () => ({
      setTheme: setLocalStorageValue,
      theme,
      themeClass: buildThemeClass(theme),
    }),
    [setLocalStorageValue, theme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
}

//#region Private Members
function buildThemeClass(theme: Theme): string {
  return `default-theme ${theme.flavor}-${theme.kit}`;
}

function getUserPreferencesThemeKey(userName: string): Maybe<string> {
  return userName ? `${USER_THEME_PREFERENCES_KEY}${userName}` : null;
}

function useGetThemeStoredValue() {
  const { currentUser } = useKleeenContext('endUser');

  const userPreferencesThemeKey = getUserPreferencesThemeKey(currentUser?.username);
  const { setLocalStorageValue, localStorageValue } = useLocalStorage<Theme>(
    userPreferencesThemeKey,
    defaultTheme,
  );

  return { localStorageValue, setLocalStorageValue };
}
//#endregion
