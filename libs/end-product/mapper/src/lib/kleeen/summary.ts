import { ColumnMap, GetListingDataResults } from '@kleeen/types';

import { getThingByName } from '@kleeen/things';
import { mapListColumns } from './list';

export function mapToSummary(rows: any[], columns: ColumnMap[]): GetListingDataResults {
  const [data] = mapListColumns(rows, columns, false);
  const reducedFormats = columns.reduce(
    (acc, ac) => ({ ...acc, [ac.key]: getThingByName(ac.key)?.format }),
    {},
  );
  return {
    data,
    format: reducedFormats,
  };
}
