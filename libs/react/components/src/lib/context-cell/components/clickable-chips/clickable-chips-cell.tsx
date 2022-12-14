import './clickable-chips-cell.scss';

import { Attribute, Cell, ContextMenuDataPoint, FormatProps, Transformation } from '@kleeen/types';
import { ClickableChipsCellProps, PreviewChipsProps } from './clickable-chips-cell.model';
import React, { Key, useEffect, useState } from 'react';

import { BootstrapTooltip } from '../bootstrap-tooltip';
import { KUIConnect } from '@kleeen/core-react';
import { KsChip } from '../../../chip';
import { KsCrosslink } from '../../../crosslink';
import TextFormatter from '../../../textFormatter/TextFormatter';
import { isNil } from 'ramda';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useAttributeInteractions } from '../../hooks';

const TRANSFORMATION_KEY_TO_USE = 'transformation';

export const KsClickableChipsCell = React.memo(
  KUIConnect(({ translate }) => ({ translate }))(ClickableChipsCellBase),
);

//#region Private members
function ClickableChipsCellBase({
  attribute,
  cellEntityType,
  cellItems,
  chartType,
  columnLabel,
  displayColumnAttribute,
  format,
  isIdTemporary,
  openShowMoreModal,
  params,
  row,
  rowDisplayValue,
  translate,
  widgetId,
}: ClickableChipsCellProps) {
  const { hasCrossLinking, hasFilters, hasPreview } = useAttributeInteractions({
    cellEntityType,
    dataPoint: {
      attribute,
      transformationKeyToUse: TRANSFORMATION_KEY_TO_USE,
    },
    isIdTemporary,
  });

  const isClickable = hasCrossLinking || hasFilters || hasPreview;
  const [chips, setChips] = useState<Cell[]>([]);

  const cellItemsArray = cellItems as Cell[];

  useEffect(() => {
    if (isNilOrEmpty(cellItemsArray)) {
      setChips([]);
      return;
    }

    const [firstPreviewItem, secondPreviewItem] = cellItemsArray;
    const newChips = [];

    if (firstPreviewItem) {
      newChips.push(firstPreviewItem);
    }

    if (secondPreviewItem) {
      newChips.push(secondPreviewItem);
    }

    setChips(newChips);
  }, [cellItemsArray]);

  function onClick() {
    openShowMoreModal({
      attribute,
      chartType,
      columnLabel,
      data: cellItemsArray,
      format,
      isOpen: true,
      rowDisplayValue,
      widgetId,
    });
  }

  return (
    <div className="clickable-chips">
      <PreviewChips
        attribute={attribute}
        chartType={chartType}
        displayColumnAttribute={displayColumnAttribute}
        format={format}
        isClickable={isClickable}
        items={chips}
        params={params}
        row={row}
        rowDisplayValue={rowDisplayValue}
        translate={translate}
        widgetId={widgetId}
      />
      <div className="show-more-label" onClick={onClick}>
        <div className="numbers-label-container">{cellItemsArray.length}</div>
        <span>{translate('app.total')}</span>
      </div>
    </div>
  );
}

function FormattedElement({
  attribute,
  format,
  label,
}: {
  attribute: Attribute;
  format: FormatProps;
  label: Key;
}) {
  return (
    <TextFormatter
      format={format}
      formatType={attribute?.formatType}
      transformation={attribute?.aggregation || Transformation.SelfSingle}
    >
      {label}
    </TextFormatter>
  );
}

function PreviewChips({
  attribute,
  chartType,
  displayColumnAttribute,
  format,
  isClickable,
  items,
  params,
  row,
  rowDisplayValue,
  translate,
  widgetId,
}: PreviewChipsProps) {
  const [displayDataPoint, setDisplayDataPoint] = useState<ContextMenuDataPoint | null>(null);

  useEffect(() => {
    if (isNilOrEmpty(row?.id)) return;

    setDisplayDataPoint({
      attribute: displayColumnAttribute,
      ignoreInContextMenu: true,
      value: {
        displayValue: rowDisplayValue,
        id: row.id,
      },
    });
  }, [row?.id]);

  return (
    <div className="chips-container">
      {items.length ? (
        items.map((item: Cell, i: number) => {
          if (isNil(item)) return null;

          const FormattedElements = FormattedElement({
            attribute,
            format,
            label: item.displayValue as string,
          });

          const dataPoints: ContextMenuDataPoint[] = [
            {
              attribute,
              transformationKeyToUse: TRANSFORMATION_KEY_TO_USE,
              value: item,
            },
          ];

          if (!isNilOrEmpty(displayDataPoint)) {
            dataPoints.push(displayDataPoint);
          }

          return (
            <KsCrosslink
              chartType={chartType}
              dataPoints={dataPoints}
              params={params}
              transformationKeyToUse={TRANSFORMATION_KEY_TO_USE}
              widgetId={widgetId}
            >
              <BootstrapTooltip key={i} placement="top" title={FormattedElements}>
                <KsChip className={isClickable ? 'clickable' : ''} label={FormattedElements} />
              </BootstrapTooltip>
            </KsCrosslink>
          );
        })
      ) : (
        <span className="no-chips-label">{`${translate('app.no')} ${attribute?.name}`}</span>
      )}
    </div>
  );
}
//#endregion
