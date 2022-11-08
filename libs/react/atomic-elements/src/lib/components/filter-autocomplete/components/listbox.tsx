import { ListChildComponentProps, VariableSizeList } from 'react-window';
import React, { LegacyRef, useEffect, useRef, useState } from 'react';

const OuterElementContext = React.createContext({});
const DEFAULT_ITEM_SIZE = 36; //px
const MAX_DISPLAYED_ITEMS = 10;

const OuterElementType = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

export const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref: LegacyRef<HTMLDivElement>,
) {
  const { getRowHeight, listboxRef, rowHeights, setRowHeight } = useListboxRefs();
  const [height, setHeight] = useState(0);

  const { children, ...restProps } = props;
  const itemData = React.Children.toArray(children);
  const itemCount = itemData.length;

  function getHeight() {
    if (itemCount > MAX_DISPLAYED_ITEMS) {
      return MAX_DISPLAYED_ITEMS * DEFAULT_ITEM_SIZE;
    }
    return itemData.map((_, index) => getRowHeight(index)).reduce((a, b) => a + b, 0);
  }

  function renderRow(rowProps: ListChildComponentProps) {
    return Row({ ...rowProps, setRowHeight });
  }

  useEffect(() => {
    setHeight(getHeight());
    listboxRef.current.scrollToItem(0);
  }, [Object.keys(rowHeights.current).length]);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={restProps}>
        <VariableSizeList
          height={height}
          itemCount={itemCount}
          itemData={itemData}
          itemSize={getRowHeight}
          outerElementType={OuterElementType}
          overscanCount={5}
          ref={listboxRef}
          width="100%"
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

//#region Private Members
function Row({ data, index, style, setRowHeight }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      // updates the rows hight after render, so the height can be calculated
      setRowHeight(index, rowRef?.current?.clientHeight);
    }
  }, [rowRef]);

  const innerProps = data[index].props;

  return (
    <li
      {...innerProps}
      ref={rowRef}
      style={{
        ...style,
        height: 'auto',
      }}
    >
      {innerProps.children}
    </li>
  );
}

function useListboxRefs() {
  const listboxRef = useRef(null);

  const rowHeights = useRef({});

  /**
   * Gets the height of a row if it was calculated, if not use the fallback number
   * @param index if there are row heights
   * @returns height of the element
   */
  function getRowHeight(index: number): number {
    return rowHeights.current[index] || DEFAULT_ITEM_SIZE;
  }

  /**
   * Keeps the rendered rows height
   * @param index index of the row
   * @param height height of the row
   */
  function setRowHeight(index: number, height: number) {
    listboxRef?.current?.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: height };
  }

  return { getRowHeight, listboxRef, rowHeights, setRowHeight };
}

//#endregion Private Members
