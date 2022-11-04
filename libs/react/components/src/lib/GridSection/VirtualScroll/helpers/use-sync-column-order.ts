import { ColumnData, Maybe } from '@kleeen/types';
import { differenceWith, equals } from 'ramda';
import { isNilOrEmpty, isNotNilOrEmpty, parseStringifyToJson } from '@kleeen/common/utils';
import { useEffect, useState } from 'react';

import { ColumnToShowArgs } from '../virtual-table/virtualized-table-props.model';
import { get } from 'lodash';

interface ColumnDataCompare {
  id: number;
  name: string;
}

/**
 * Syncs the local storage column order with the one in the props.
 */
export function useSyncColumnOrder({
  columns,
  columnsState,
  columnsToShowState,
  setColumns,
  setColumnsState,
  setColumnsToShowState,
  userName,
}) {
  let hasDifferences = false;

  const columnToShow = mapCommonKeys(columnsToShowState, 'name', 'id');
  const columnBase = mapCommonKeys(columns, 'attr.name', 'attr.id');

  try {
    hasDifferences = !equals<unknown>(columnToShow, parseStringifyToJson({ defaultValue: columnBase }));
  } catch (error) {
    console.error('Error syncing columns.', error);
  }

  const shouldSyncColumns = columnsToShowState.length !== columns.length;
  useEffect(() => {
    const duplicatedColumnConfigured = getDuplicatedColumn(columns);
    if (duplicatedColumnConfigured) {
      console.warn(
        `Columns are not properly configured, please ensure that every column has a unique id. Check:`,
        duplicatedColumnConfigured,
        columns,
      );
      throw Error(
        'The columns of the table are not properly configured, check the console warnings for more details',
      );
    }

    const duplicatedColumnStored = getDuplicatedColumn(columnsState);
    if (isNotNilOrEmpty(duplicatedColumnStored)) {
      setColumnsState(columns);
    } else if (userName && hasDifferences) {
      const compareStateColumns = (columnA: ColumnDataCompare, columnB: ColumnDataCompare) =>
        columnA?.id === columnB?.id;

      const deletedColumns = differenceWith(compareStateColumns, columnToShow, columnBase);
      const addedColumns = differenceWith(compareStateColumns, columnBase, columnToShow);

      const newColumns = columns.reduce((acc: ColumnData[], column: ColumnData): ColumnData[] => {
        if (addedColumns.some((added) => added.id === column.attr.id)) {
          return [...acc, column];
        }
        return acc;
      }, []);

      const columnsWithoutDeleted = columnsState.filter((columnA) =>
        deletedColumns.every((columnB) => !compareStateColumns(columnA.attr, columnB)),
      );

      const newColumnToShow = [...columnsWithoutDeleted, ...newColumns].map((column, index) => {
        return {
          id: column.attr.id,
          hideColumn: Boolean(column?.hideColumn),
          name: column.attr.name,
          order: index,
          label: column.label,
        };
      });

      const newColumnState = [...columnsWithoutDeleted, ...newColumns];

      setColumnsState(newColumnState);
      setColumns(newColumnState);
      setColumnsToShowState(newColumnToShow);
    }
  }, [userName, hasDifferences]);

  return {
    isSyncingColumns: !userName || shouldSyncColumns,
  };
}

//#region Private members
function mapCommonKeys(
  columns: ColumnToShowArgs[] | ColumnData[],
  nameKey: string,
  idKey: string,
): ColumnDataCompare[] {
  return columns
    .map((column: ColumnToShowArgs | ColumnData) => ({
      name: get(column, nameKey),
      id: get(column, idKey),
    }))
    .sort((a, b) => a.id - b.id);
}

function getDuplicatedColumn(columns: ColumnData[]): Maybe<ColumnData> {
  const duplicatedColumn = columns.find((column) => {
    return (
      isNilOrEmpty(column?.attr?.id) || columns.filter((col) => col.attr.id === column.attr.id)?.length > 1
    );
  });
  return duplicatedColumn;
}

//#endregion
