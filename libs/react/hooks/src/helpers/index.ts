import {
  ContextMenuDataPoint,
  DataPoint,
  FilterOperators,
  WidgetScope,
  crosslinkingInteractionType,
} from '@kleeen/types';
import moment, { Moment } from 'moment';
import { useCallback, useMemo } from 'react';

import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty, validateIsOrIsNorFilterOperator } from '@kleeen/common/utils';
import { isSingleCardinalityDataPoint } from '@kleeen/frontend/utils';
import { useCrosslinkingInteraction } from '@kleeen/react/hooks';
import { validateCrossLinkingProps } from './helpers.model';

export function getWidgetContextName({ taskName, widgetId }: { taskName: string; widgetId: string }): string {
  return `${taskName}_${widgetId}`;
}

export const manageOperations = (
  operator: FilterOperators,
  value: string | number | boolean,
  operators,
): any => {
  if (Array.isArray(operators) || validateIsOrIsNorFilterOperator(operator)) {
    return [...(operators || []), value];
  }
  return value;
};

export const getFromValueOf = (paramsBasedOnRoute): undefined | Moment =>
  paramsBasedOnRoute?.Timestamp?.from ? moment(paramsBasedOnRoute?.Timestamp?.from) : undefined;

export const getToValueOf = (paramsBasedOnRoute): undefined | Moment =>
  paramsBasedOnRoute?.Timestamp?.to ? moment(paramsBasedOnRoute?.Timestamp?.to) : undefined;

export const getRelativeDateValueOf = (paramsBasedOnRoute): undefined | string =>
  paramsBasedOnRoute?.Timestamp?.relativeDate;

export const mapWithStringify = (filtersToApply) => {
  return Object.keys(filtersToApply).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.stringify(filtersToApply[key]),
    }),
    {},
  );
};

export const getFiltersInitialState = (params: Record<string, any>) => {
  const initialState = Object.keys(params).reduce((acc, key) => {
    return {
      ...acc,
      [key]: params[key],
    };
  }, {});

  return initialState;
};

export const getTimestamp = (params: Record<string, any>) => {
  const from = getFromValueOf(params);
  const to = getToValueOf(params);
  const relativeDate = getRelativeDateValueOf(params);
  const Timestamp: { from?: number; to?: number; relativeDate?: string } = {};
  if (from || to || relativeDate) {
    if (from) Timestamp.from = moment.utc(from).valueOf();
    if (to) Timestamp.to = moment.utc(to).valueOf();
    if (relativeDate) Timestamp.relativeDate = relativeDate;
  }
  return Timestamp;
};

export const validateCrosslinkingInteraction = ({
  anchorEl,
  handleAnchorClick,
  hasInvestigations,
  onCellClick,
  openModal,
  setOpenModal,
}: validateCrossLinkingProps) => {
  const { crosslinkingInteraction } = useCrosslinkingInteraction();

  const validation = openModal && Boolean(anchorEl);

  const openModalCallback = useCallback(
    (dataPoints, hasCrossLink, eventProps) => {
      if (hasCrossLink || hasInvestigations) {
        setOpenModal(true);
        if (handleAnchorClick) handleAnchorClick(eventProps, dataPoints);
      }
    },
    [setOpenModal],
  );

  const leftClickInteraction = useMemo(
    () => ({
      onClickFunction: (
        dataPoints: ContextMenuDataPoint[],
        hasCrossLink: boolean,
        eventProps: React.MouseEvent<HTMLButtonElement>,
      ) => {
        if (!isNilOrEmpty(handleAnchorClick)) {
          handleAnchorClick(eventProps, dataPoints);
        }
        openModalCallback(dataPoints, hasCrossLink, eventProps);
      },
      onContextMenuFunction: null,
      validation,
    }),
    [validation, openModalCallback, handleAnchorClick],
  );

  const rightClickInteraction = useMemo(
    () => ({
      onClickFunction: onCellClick,
      onContextMenuFunction: openModalCallback,
      validation,
    }),
    [validation, openModalCallback, onCellClick],
  );

  switch (crosslinkingInteraction) {
    case crosslinkingInteractionType.contextMenu:
      document.oncontextmenu = function (e) {
        e.preventDefault();
        return !openModal;
      };
      return rightClickInteraction;
    case crosslinkingInteractionType.onClick:
      return leftClickInteraction;
    default:
      return leftClickInteraction;
  }
};

export function checkIfDataPointHasWidgets(dataPoint: DataPoint): boolean {
  const { attribute, value } = dataPoint;

  const isSingleCardinality = isSingleCardinalityDataPoint(dataPoint);
  const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
  const entityId = attribute.id;

  const isSingleScope = scope === WidgetScope.Single;

  const hasWidgets = entityHasWidgets({
    entityId,
    scope,
  });

  const isSingleScopeWithoutValue = isSingleScope && isNilOrEmpty(value?.id);
  return isSingleScopeWithoutValue ? false : hasWidgets;
}
