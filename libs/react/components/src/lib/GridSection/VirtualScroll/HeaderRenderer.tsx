import { Attribute, DEBOUNCE_WAIT, GenericFunction } from '@kleeen/types';
import { Order, isNilOrEmpty } from '@kleeen/common/utils';

import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Draggable from 'react-draggable';
import { GridSectionHeaderProps } from '../GridSection.model';
import { Icon } from '../../Icon';
import { SortableHandle } from 'react-sortable-hoc';
import TableCell from '@material-ui/core/TableCell';
import { TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { Translate } from '@kleeen/core-react';
import _ from 'lodash';
import classnames from 'classnames';
import { setVirtualizedTableInputValue } from './virtual-table/virtualized-table-props.model';

export const draggableAreaClassName = 'draggableArea';

const iconBySortDirection: { [key in Order]: string } = {
  [Order.asc]: 'ks-sort-asc',
  [Order.desc]: 'ks-sort-desc',
  [Order.none]: 'ks-sort-asc',
};

const DragHandle = SortableHandle(({ children, isResizing }) => (
  <div className={classnames(draggableAreaClassName, { draggableNotAllowed: isResizing })}>{children}</div>
));

export type HeaderRendererProps = GridSectionHeaderProps & {
  columnIndex: number;
  inputValues?: string | number | Record<string, never>;
  isLoading?: boolean;
  isResizing?: boolean;
  newAttributes?: Attribute[];
  resizeColumn: (props: any) => void;
  setInputValue?: setVirtualizedTableInputValue;
  setIsResizing?: (value: boolean) => void;
};

export const headerRenderer = ({
  attributes,
  columnIndex,
  handleChange,
  hasActions,
  inputValues,
  isLoading = false,
  isResizing,
  newAttributes,
  onSort,
  order,
  orderBy,
  resizeColumn,
  setInputValue,
  setIsResizing,
}: HeaderRendererProps): JSX.Element | null => {
  let debouncedFn;

  const colSpan = columnIndex === 0 && hasActions ? 2 : 0;
  const getColumnLabel = (attr: Attribute): string => attr.label || attr.name;
  const baseAttributes = newAttributes ? newAttributes : attributes;
  const attribute = baseAttributes[columnIndex];
  const classAppend = () => {
    if (columnIndex === 0) return 'firstHeader';
    if (columnIndex === baseAttributes.length - 1) return 'lastHeader';
    return 'middleHeader';
  };

  return (
    <TableCell
      className={classnames('header-container', classAppend(), { draggableNotAllowed: isResizing })}
      colSpan={colSpan}
      key={attribute.id}
    >
      <div className="header-item">
        <Tooltip
          arrow
          enterDelay={400}
          placement="top"
          title={<Translate id="app.gridSection.header.reorder" />}
        >
          <div className={classnames({ draggableWrapper: isLoading })}>
            <div className={classnames({ draggableNotAllowed: isLoading })}>
              <DragHandle isResizing={isResizing}>
                <DragIndicatorIcon />
              </DragHandle>
            </div>
          </div>
        </Tooltip>
        <div className="truncate-text">
          <Tooltip arrow enterDelay={400} placement="top" title={getColumnLabel(attribute)}>
            <TextField
              disabled={isNilOrEmpty(setInputValue) || isResizing}
              label={getColumnLabel(attribute)}
              onChange={(e) => {
                e.persist();
                if (isNilOrEmpty(debouncedFn)) {
                  debouncedFn = _.debounce(() => {
                    const { value } = e.target;
                    handleChange(attribute.name, value);
                  }, DEBOUNCE_WAIT);
                }
                debouncedFn();
              }}
              onInput={(e) => {
                if (isNilOrEmpty(setInputValue)) return;
                setInputValue(attribute.name, e.target['value']);
              }}
              value={inputValues ? inputValues[attribute.name] : ''}
            />
          </Tooltip>
        </div>
        {onSort && (
          <IconSort
            isLoading={isLoading || isResizing}
            name={attribute.name}
            onSort={onSort}
            order={order}
            orderBy={orderBy}
          />
        )}
      </div>
      <div className="resize-container">
        <Draggable
          axis="x"
          defaultClassName="resizable-area"
          defaultClassNameDragging="resizing"
          onDrag={(e, { deltaX }) => {
            e.stopPropagation();
            setIsResizing(true);
            resizeColumn({ deltaX });
          }}
          onStop={() => {
            setIsResizing(false);
          }}
          position={{ x: 0 } as any}
        >
          <Tooltip
            arrow
            disableFocusListener
            disableTouchListener
            enterDelay={400}
            placement="top"
            title={isResizing ? '' : <Translate id="app.gridSection.header.resize" />}
          >
            <div className="resizable-area"></div>
          </Tooltip>
        </Draggable>
      </div>
    </TableCell>
  );
};

interface IconSortProps {
  isLoading: boolean;
  name: string;
  onSort: GenericFunction;
  order: Order;
  orderBy: string;
}

function IconSort({ isLoading, name, onSort, order, orderBy }: IconSortProps) {
  const classAppend = classnames('sort-icon', { show: orderBy === name }, { disabled: isLoading });

  function dispatchOnClick() {
    if (!isLoading) onSort(name);
  }

  return (
    <Tooltip arrow enterDelay={400} placement="top" title={<Translate id="app.gridSection.header.sort" />}>
      <div className={classAppend} onClick={dispatchOnClick}>
        <Icon icon={iconBySortDirection[order]} />
      </div>
    </Tooltip>
  );
}
