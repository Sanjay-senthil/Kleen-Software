import './app.scss';
import './assets/styles/custom.css';
import './assets/styles/custom.scss';

import {
  AttributeContextMenuProvider,
  CrosslinkingInteractionProvider,
  MenuContextProvider,
  ThemeProvider,
  WebSocketProvider,
  defaultLanguage,
  useLocalization,
  useServiceWorker,
} from '@kleeen/react/hooks';
import { ClassNameBem, ReactElement } from '@kleeen/types';
import { DEFAULT_ROLE, app, roleAccessKey, roleAccessKeyCustom } from '@kleeen/settings';
import {
  IconRegistryProvider,
  AccessControlProvider as KsAccessControlProvider,
  TranslationProvider,
} from '@kleeen/core-react';
import { KsCombineRightProviders, KsNotifications } from '@kleeen/react/components';
import React, { useMemo } from 'react';

import { CustomProviders } from './modules/custom/providers';
import { PagesManager } from './pages-manager';
import { ThemeWrapper } from './components';
import classnames from 'classnames';
import { environment } from '@kleeen/environment';
import iconRegistry from '../assets/icon-registry';
import { merge } from 'lodash';
import { stringsTranslate } from '@kleeen/settings';

merge(roleAccessKey, roleAccessKeyCustom);

function App() {
  const { language } = useLocalization();
  useServiceWorker();

  return (
    <React.StrictMode>
      <div className={classnames(ClassNameBem.App)}>
        <KsCombineRightProviders
          providers={[
            // *Secondary Global Providers which depend on Primary Global Providers.
            TranslateProvider({ locale: language }),
            WebSocketProvider,
            ThemeProvider,
            MenuContextProvider,
            IconRegistryProvider({ iconRegistry }),
            AttributeContextMenuProvider,
            AccessControlProvider,
            CrosslinkingProvider,
            ...CustomProviders,
          ]}
        >
          <>
            <KsNotifications />
            <ThemeWrapper>
              <PagesManager />
              <footer data-testid="app-version">{environment.deployment.version}</footer>
            </ThemeWrapper>
          </>
        </KsCombineRightProviders>
      </div>
    </React.StrictMode>
  );
}

export default App;

//#region Private members
interface SimpleProviderProps {
  children: ReactElement;
}

function AccessControlProvider({ children }: SimpleProviderProps) {
  return (
    <KsAccessControlProvider
      accessControlSettings={{
        defaultRole: DEFAULT_ROLE,
        pathToRoleOnState: 'endUser.currentUser.role',
        permissions: roleAccessKey,
      }}
    >
      {children}
    </KsAccessControlProvider>
  );
}

function CrosslinkingProvider({ children }: SimpleProviderProps) {
  const { crossLinkingInteraction } = app;

  return (
    <CrosslinkingInteractionProvider crosslinkingInteraction={crossLinkingInteraction}>
      {children}
    </CrosslinkingInteractionProvider>
  );
}

interface TranslateProviderProps {
  locale: string;
}

function TranslateProvider({ locale }: TranslateProviderProps) {
  const MemoizedTranslationProvider = useMemo(() => {
    return TranslationProvider({
      defaultLocale: defaultLanguage,
      locale,
      localeData: stringsTranslate,
      onError: (err: string): void => {
        console.error('TranslateProvider', err);
      },
    });
  }, [locale]);

  return MemoizedTranslationProvider;
}
//#endregion
