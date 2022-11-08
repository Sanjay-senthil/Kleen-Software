import { ClassNameBem, KsManagedModulePaths } from '@kleeen/types';

import { app } from '@kleeen/settings';
import classnames from 'classnames';
import { useTheme } from '@kleeen/react/hooks';
import { useThemeWrapperStyles } from './theme-wrapper.styles';

const bem = ClassNameBem.Ks;

export function ThemeWrapper({ children }) {
  const classes = useThemeWrapperStyles();
  const { themeClass } = useTheme();

  const isInvestigationPage = window.location?.pathname?.startsWith(KsManagedModulePaths.Investigate);
  const hideNavigation = isInvestigationPage;
  const navClass = hideNavigation ? 'no-nav' : app.layout.position;

  return (
    <div
      className={classnames(
        'generated-new',
        'ks-global-font',
        bem,
        classes.appContainer,
        navClass,
        themeClass,
      )}
      data-testid="app-container"
      id={'theme-wrapper-id'}
    >
      {children}
    </div>
  );
}
