import { ColumnMap, DataPointValue, GetListingDataResults, MapFunctionType } from '@kleeen/types';
import { toChipsValue, toDisplayValue, toIdValue } from '@kleeen/end-product/utils';

import { getThingByName } from '@kleeen/things';
import { isNilOrEmpty } from '@kleeen/common/utils';

interface Value {
  [key: string]: DataPointValue | DataPointValue[];
}

const handlerByType = {
  [MapFunctionType.ToChipsValue]: toChipsValue,
  [MapFunctionType.ToDisplayValue]: toDisplayValue,
  [MapFunctionType.ToIdValue]: toIdValue,
};

export function mapToList(rows: any[], columns: ColumnMap[]): GetListingDataResults {
  const data = mapListColumns(rows, columns);
  const reducedFormats = columns.reduce((acc, column) => {
    const thingFormat = getThingByName(column.key)?.format;

    if (isNilOrEmpty(thingFormat)) {
      return acc;
    }

    return {
      ...acc,
      [column.key]: thingFormat,
    };
  }, {});

  return {
    data,
    format: reducedFormats,
  };
}

export function mapListColumns(rows: any[], columns: ColumnMap[], reduceColumns = true) {
  const columnsMap = mapColumns(columns);

  if (Array.isArray(rows)) {
    const values = rows.map((row) => mapListColumns(row, columns, reduceColumns));

    return values;
  }

  const mappedColumns = Object.values(columnsMap)
    .map((columnMapper: (rows: unknown) => Value) => {
      if (typeof columnMapper == 'function') {
        return columnMapper(rows);
      }

      return null;
    })
    .filter(Boolean);

  if (!reduceColumns) return mappedColumns;

  return mappedColumns.reduce(
    (previous, current) => ({
      ...previous,
      ...current,
    }),
    {},
  );
}

// #region Private members
function mapColumns(columns: ColumnMap[]) {
  return columns.reduce(
    (acc, { handler = MapFunctionType.ToDisplayValue, idPath, key, path, showDisplayMedia = true }) => {
      return {
        ...acc,
        [path]: (row) => {
          const columnHandler = handlerByType[handler];

          return columnHandler({
            idPath,
            key,
            path,
            row,
            showDisplayMedia,
          });
        },
      };
    },
    {},
  );
}
// #endregion
