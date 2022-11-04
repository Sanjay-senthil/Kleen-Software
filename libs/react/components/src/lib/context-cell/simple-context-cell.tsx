import './context-cell.scss';

import { Cell, Transformation } from '@kleeen/types';
import { CellBody, getCellInfo, getFormat, getIfShouldDisplayClickableChipsCell } from './context-cell';
import { NEW_ROW_ID_PREFIX, isNilOrEmpty } from '@kleeen/common/utils';
import { ReactElement, useRef, useState } from 'react';
import {
  checkIfDataPointHasWidgets,
  useCrosslinkingInteraction,
  useIsInvestigation,
  useIsPreview,
} from '@kleeen/react/hooks';
import { getLinkStyle, isValidLinkByEntityType } from '@kleeen/frontend/utils';

import { CellFormatResultsType } from '../GridSection/VirtualScroll/CellRenderer/CellRenderer.model';
import { ContextMenuProps } from './context-cell.model';
import { KsClickableChipsCell } from './components';
import { KsLink } from '../link';
import { isNil } from 'ramda';
import { useStyles } from './context-cell.style';

export function KsSimpleContextCell(
  props: ContextMenuProps & { cellFormatResults: CellFormatResultsType },
): ReactElement | null {
  const { crosslinkingInteraction } = useCrosslinkingInteraction();
  const isInvestigationPage = useIsInvestigation();
  const isPreview = useIsPreview();
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const cell = props.cell as Cell;

  if (isNil(cell)) return null;

  const shouldDisplayClickableChipsCell = getIfShouldDisplayClickableChipsCell(
    props.attr?.aggregation as Transformation,
    props.cell,
  );
  const format = getFormat(props);

  const { $metadata: metadata } = cell;
  const cellEntityType = metadata?.entityType;

  const { dataPoints, tooltipTitle, isNumericType, showAppliedTruncated, resultsElement } = getCellInfo({
    attr: props.attr,
    cell,
    cellFormatResults: props.cellFormatResults,
    displayColumnAttribute: props.displayColumnAttribute,
    format,
    hasDisplayMedia: props.hasDisplayMedia,
    row: props.row,
    rowDisplayValue: props.rowDisplayValue,
  });

  //TODO: this has to be removed when we will implement the enhancement to disable the crosslinking interaction by the widget
  const isDisableCrossLinking = props.attr?.isDisableCrossLinking;

  const isIdTemporary = props?.row?.id?.toString().includes(NEW_ROW_ID_PREFIX);
  const hasCrossLink = Boolean(
    !isDisableCrossLinking &&
      !isPreview &&
      !isIdTemporary &&
      props?.cellInteraction?.hasCrossLink &&
      isValidLinkByEntityType(props.attr, cellEntityType),
  );

  const [hasInvestigations] = useState(() => {
    return isInvestigationPage && !isNilOrEmpty(dataPoints) && checkIfDataPointHasWidgets(dataPoints[0]);
  });

  if (shouldDisplayClickableChipsCell) {
    return (
      <KsClickableChipsCell
        attribute={props.attr}
        cellEntityType={cellEntityType}
        cellItems={props.cell as Cell[]}
        columnLabel={props.attr?.label}
        displayColumnAttribute={props.displayColumnAttribute}
        format={format}
        isIdTemporary={isIdTemporary}
        openShowMoreModal={props.openShowMoreModal}
        row={props.row}
        rowDisplayValue={props.rowDisplayValue}
        widgetId={props.widgetId}
      />
    );
  }

  const { highlight, underline } = getLinkStyle({
    ...props?.cellInteraction,
    hasCrossLink,
    hasInvestigations,
    isDisableCrossLinking,
    isInvestigationPage,
    isPreview,
    linkInteraction: crosslinkingInteraction,
  });

  return (
    <KsLink
      anchorEl={ref}
      highlight={highlight}
      onClick={() => {
        props?.cellInteraction?.onCellClickFunction(dataPoints, hasCrossLink || hasInvestigations, {
          currentTarget: ref.current,
        });
      }}
      onContextMenu={() => {
        props?.cellInteraction?.onCellContextMenuFunction(dataPoints, hasCrossLink || hasInvestigations, {
          currentTarget: ref.current,
        });
      }}
      underline={underline}
    >
      <CellBody
        cell={cell}
        classes={classes}
        hasDisplayMedia={props.hasDisplayMedia}
        isNumericType={isNumericType}
        resultsElement={resultsElement}
        showAppliedTruncated={showAppliedTruncated}
        tooltipTitle={tooltipTitle}
      />
    </KsLink>
  );
}
