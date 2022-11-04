import { SORTING_WIDGET_KEY } from '@kleeen/types';

import { useLocalStorage } from './use-local-storage';
import { useSort } from '../../../atomic-elements/src/lib/components/grid-area-section/hooks';
import { Order } from '@kleeen/common/utils';

interface UseSortColumn {
  onSort: (name: string) => void;
  order: string;
  orderBy: string;
  sorting: any;
}

export function useSortColumn(widgetId: string): UseSortColumn {
  const sortingWidgetKey = `${SORTING_WIDGET_KEY}${widgetId}`;
  const { localStorageValue: sorting, setLocalStorageValue: setSorting } = useLocalStorage(
    sortingWidgetKey,
    [],
  );
  const [, onSort] = useSort({ setSorting });

  const order = sorting.length ? sorting[0].sort : Order.none;
  const orderBy = sorting.length ? sorting[0].columnName : '';

  return { onSort, sorting, order, orderBy };
}
