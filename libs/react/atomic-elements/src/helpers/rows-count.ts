import { Widget, WidgetState, WidgetTypes } from '@kleeen/types';
import { getWidgetContextName, useKleeenContext } from '@kleeen/react/hooks';

import { isNilOrEmpty } from '@kleeen/common/utils';

export function getRowsCountFromFirstTable(widgets: Widget[], taskName: string): number {
  const currentWidget = widgets.find((w) => w.chartType === WidgetTypes.FULL_TABLE);

  return getRowsCountByWidget(taskName, currentWidget);
}

//#region Private Members
function getRowsCountByWidget(taskName: string, widget?: Widget): number {
  if (isNilOrEmpty(widget) || isNilOrEmpty(widget.params)) {
    return 0;
  }

  const { id: widgetId } = widget;
  const widgetContext = getWidgetContextName({ taskName, widgetId });
  const widgetData: WidgetState = useKleeenContext(widgetContext);

  const rowsRetrieved = widgetData?.data?.pagination?.totalCount ?? widgetData?.data?.data?.length ?? 0;

  return rowsRetrieved;
}
//#endregion
