import { useEffect, useState } from 'react';

import { KsManagedModulePaths } from '@kleeen/types';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useLocation } from 'react-router-dom';

export function useIsInvestigation() {
  const [isInvestigationPage, setIsInvestigationPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isNilOrEmpty(location?.pathname)) return;

    const newIsInvestigatePage = location?.pathname?.startsWith(KsManagedModulePaths.Investigate);

    setIsInvestigationPage(newIsInvestigatePage);
  }, [location]);

  return isInvestigationPage;
}

export function useShouldHideNavigation() {
  const isInvestigationPage = useIsInvestigation();

  return isInvestigationPage;
}
