import { AutoSizer, InfiniteLoader, Table, defaultTableRowRenderer } from 'react-virtualized';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import HideColumns from './hide-columns';
import { KsListingModal } from '../../../listing-modal';
import { Loader } from '../../../Loader/Loader';
import { MuiVirtualizedTableProps } from '../VirtualScroll.model';
import classnames from 'classnames';
import { configContainer } from './virtualized-table-props.model';
import { getHeaderRowRenderer, paddingBottomOverflowX } from './utils';
import { styles } from '../VirtualScroll.style';
import { useVirtualizedTable } from './virtualized-table-props';
import { withStyles } from '@material-ui/core/styles';

export const bem = 'ks-virtualized-table';

const SortableTable: any = SortableContainer(Table, configContainer);
const SortableRow = SortableElement(defaultTableRowRenderer as any);

function MuiVirtualizedTable(props: MuiVirtualizedTableProps): any {
  const {
    _sortRow,
    classes,
    closeShowMoreModal,
    columns,
    columnsMapFunction,
    columnsState,
    columnsToShowState,
    getSimpleTableProps,
    getSortableTableProps,
    handleOnColumnSort,
    headerStyles,
    hideColumns,
    infiniteLoaderProps,
    isLoading,
    isLoadingMoreRows,
    isSyncingColumns,
    listingModalSettings,
    setColumnsToShowState,
    sortable,
    sortableColumns,
    tableWidth,
    themeClass,
  } = useVirtualizedTable(props);

  if (isSyncingColumns) return <Loader />;

  const { isScroll, scrollOrientation } = props;

  return (
    <>
      <AutoSizer>
        {({ height, width }) => {
          const isOverflowXVisible = tableWidth > width;
          const newHeight = isOverflowXVisible ? height - paddingBottomOverflowX : height;
          const conditionalClasses = { [classes.tableHidden]: width === 0 };
          const tableClassName = classnames(classes.table, `${bem}--table`, conditionalClasses);
          if (sortable) {
            const columnsMap = columnsMapFunction({ width, columnsForCell: columns });
            return (
              <SortableTable
                scrollTop={isScroll && Number(scrollOrientation)}
                {...getSortableTableProps({
                  extraProps: {
                    onSortEnd: _sortRow,
                    rowRenderer: _rowRenderer,
                  },
                  height: newHeight,
                  tableClassName,
                  width,
                })}
              >
                {columns.map(columnsMap)}
              </SortableTable>
            );
          } else if (sortableColumns) {
            const headerRowRenderer = getHeaderRowRenderer({
              handleOnColumnSort,
              helperClass: `${themeClass} ${headerStyles['dragging-column-helper-styles']}`,
              isLoading,
              loaderRefreshClass: classes.infiniteLoaderRefreshData,
            });

            const columnsMap = columnsMapFunction({
              columnsForCell: columnsState,
              newAttributes: columnsState.map((element) => element.attr),
              width,
              withIndex: true,
              withInputValues: true,
            });

            return (
              <InfiniteLoader {...infiniteLoaderProps}>
                {({ onRowsRendered, registerChild }) => (
                  <SortableTable
                    scrollTop={isScroll && Number(scrollOrientation)}
                    {...getSortableTableProps({
                      extraProps: { onRowsRendered, ref: registerChild, headerRowRenderer },
                      height: newHeight,
                      tableClassName,
                      width,
                    })}
                  >
                    {columnsState.map(columnsMap)}
                  </SortableTable>
                )}
              </InfiniteLoader>
            );
          } else {
            const columnMap = columnsMapFunction({
              columnsForCell: columns,
              width,
              withIndex: true,
              withInputValues: true,
            });
            return (
              <InfiniteLoader {...infiniteLoaderProps}>
                {({ onRowsRendered, registerChild }) => (
                  <Table
                    scrollTop={isScroll && Number(scrollOrientation)}
                    {...getSimpleTableProps({
                      height: newHeight,
                      onRowsRendered,
                      registerChild,
                      tableClassName,
                      width,
                    })}
                  >
                    {columns.map(columnMap)}
                  </Table>
                )}
              </InfiniteLoader>
            );
          }
        }}
      </AutoSizer>
      {isLoadingMoreRows && (
        <div className={classes.infiniteLoader}>
          <Loader />
        </div>
      )}
      {listingModalSettings.isOpen && (
        <KsListingModal
          attribute={listingModalSettings.attribute}
          columnLabel={listingModalSettings.columnLabel}
          data={listingModalSettings.data}
          format={listingModalSettings.format}
          isOpen={listingModalSettings.isOpen}
          onClose={closeShowMoreModal}
          rowDisplayValue={listingModalSettings.rowDisplayValue}
          widgetId={listingModalSettings.widgetId}
        />
      )}
      <div style={{ width: tableWidth }} className={classes.infiniteLoader}>
        <HideColumns
          columns={columnsToShowState}
          hideColumns={hideColumns}
          setColumnsState={setColumnsToShowState}
        />
      </div>
    </>
  );
}

export const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

//#region Private Members
function _isRowSortable(index) {
  return index >= 0; // Header row should not be draggable
}

function _rowRenderer(props) {
  const { index } = props;
  return _isRowSortable(index) ? <SortableRow {...props} /> : defaultTableRowRenderer(props);
}
//#endregion
