import { ReactElement, useCallback, useRef, useState } from 'react';
import {
  checkIfDataPointHasWidgets,
  useAnchorElement,
  useCrosslinking,
  useCrosslinkingInteraction,
  useIsInvestigation,
  useIsPreview,
  validateCrosslinkingInteraction,
} from '@kleeen/react/hooks';
import { getLinkStyle, isCountTransformations } from '@kleeen/frontend/utils';

import { CrosslinkProps } from './crosslink.model';
import { KsContextMenu } from '@kleeen/react/components';
import { KsLink } from '../link';
import { useAttributeInteractions } from '../context-cell/hooks';

export function KsCrosslink({
  chartType,
  children,
  dataPoints,
  params,
  transformation,
  widgetId,
}: CrosslinkProps): ReactElement {
  const { anchorEl, handleClick, handleClose } = useAnchorElement();
  const { crosslink } = useCrosslinking();
  const { crosslinkingInteraction } = useCrosslinkingInteraction();
  const isInvestigationPage = useIsInvestigation();
  const isPreview = useIsPreview();
  const ref = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const [dataPoint] = dataPoints;
  //TODO: this has to be removed when we will implement the enhancement to disable the crosslinking interaction by the widget
  const isDisableCrossLinking = dataPoint?.attribute?.isDisableCrossLinking;
  const excludeCrossLinking = isCountTransformations(transformation) || isDisableCrossLinking;

  const [hasInvestigations] = useState(() => {
    return isInvestigationPage && checkIfDataPointHasWidgets(dataPoint);
  });

  const {
    hasCrossLinking: hasCrossLink,
    hasFilters,
    hasPreview,
  } = useAttributeInteractions({
    cellEntityType: dataPoint?.value?.$metadata?.entityType,
    dataPoint,
    excludeCrossLinking,
    isIdTemporary: false,
    isPreview,
  });

  const handleAnchorClick = useCallback(
    (eventProps: React.MouseEvent<HTMLButtonElement>) => {
      handleClick(eventProps);
    },
    [handleClick],
  );

  function handleCloseHelper() {
    setOpenModal(false);
    handleClose();
  }

  function onCellClick() {
    const { attribute, value } = dataPoint;

    if (hasCrossLink) {
      const [firstValidCrossLink] = attribute?.crossLinking;
      crosslink(firstValidCrossLink.slug, value, attribute);
    }
  }

  const { highlight, underline } = getLinkStyle({
    excludeCrossLinking,
    hasCrossLink,
    hasFilter: hasFilters,
    hasInvestigations,
    hasPreview,
    isDisableCrossLinking,
    isInvestigationPage,
    isPreview,
    linkInteraction: crosslinkingInteraction,
  });
  const { onClickFunction, onContextMenuFunction, validation } = validateCrosslinkingInteraction({
    anchorEl,
    handleAnchorClick,
    hasInvestigations,
    onCellClick,
    openModal,
    setOpenModal,
  });
  const showContextMenu = validation && !isPreview && !isDisableCrossLinking;

  return (
    <>
      <KsLink
        anchorEl={ref}
        highlight={highlight}
        onClick={() => {
          onClickFunction(dataPoints, hasCrossLink || hasInvestigations, { currentTarget: ref.current });
        }}
        onContextMenu={() => {
          onContextMenuFunction(dataPoints, hasCrossLink || hasInvestigations, {
            currentTarget: ref.current,
          });
        }}
        underline={underline}
      >
        {children}
      </KsLink>
      {showContextMenu && (
        <KsContextMenu
          anchorEl={anchorEl}
          autoClose
          dataPoints={dataPoints}
          onClose={handleCloseHelper}
          widgetContextParams={params}
          widgetChartType={chartType}
          widgetId={widgetId}
        />
      )}
    </>
  );
}
