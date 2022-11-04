import { useAttributeContextMenu, useOnClickOutside } from '@kleeen/react/hooks';

import { KsContextMenu } from '@kleeen/react/components';
import { pathOr } from 'ramda';
import { useRef } from 'react';

export function HookableContextMenu() {
  const { contextualToggle, context, setContextualToggle } = useAttributeContextMenu();
  const offsetX = pathOr(0, ['e', 'offsetX'], context);
  const offsetY = pathOr(0, ['e', 'offsetY'], context);

  const ref = useRef();
  useOnClickOutside(ref, () => setContextualToggle(false));

  const anchorEl = context.e?.currentTarget;

  function handleClose() {
    setContextualToggle(false);
  }

  if (!contextualToggle) return null;

  return (
    <KsContextMenu
      anchorEl={anchorEl as HTMLElement}
      dataPoints={context.dataPoints}
      offsetX={offsetX}
      offsetY={offsetY}
      onClose={handleClose}
      widgetChartType={context.chartType}
      widgetContextParams={context.params}
      widgetId={context.widgetId}
    />
  );
}
