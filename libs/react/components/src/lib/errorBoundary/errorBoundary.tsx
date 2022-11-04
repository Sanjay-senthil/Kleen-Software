import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { WidgetErrorFallback } from '@kleeen/react/atomic-elements';
import { getWidgetContextName, useKleeenContext } from '@kleeen/react/hooks';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { WidgetState } from '@kleeen/types';
import { pathOr } from 'ramda';

export const ErrorBoundaryComponent = ({ children }) => {
  const { props } = children;

  const widgetContext = getWidgetContextName({ taskName: props.taskName, widgetId: props.widgetId });
  const widgetData: WidgetState = useKleeenContext(widgetContext);
  const [hasGlobalError, setHasGlobalError] = useState(false);
  const [globalError, setGlobalError] = useState();
  const [errorInfo, setErrorInfo] = useState<{ componentStack: string }>(null);

  useEffect(() => {
    if (!isNilOrEmpty(widgetData)) {
      const { data, isLoading, error } = widgetData;
      if (isNilOrEmpty(data) && !isLoading && !isNilOrEmpty(error)) {
        setGlobalError(error?.error);
        setErrorInfo({ componentStack: pathOr(null, ['errorActions', 0, 'error'], error) });
        setHasGlobalError(true);
      }
    }
  }, [widgetData]);

  function onErrorHandler(error: Error, info: { componentStack: string }): void {
    console.error(error);
    console.info(info);
    setErrorInfo(info);
  }

  if (hasGlobalError) {
    return <WidgetErrorFallback error={globalError} info={errorInfo} />;
  }

  function fallbackComponent({ error }): JSX.Element {
    return <WidgetErrorFallback error={error} info={errorInfo} />;
  }
  return (
    <ErrorBoundary FallbackComponent={fallbackComponent} onError={onErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};
