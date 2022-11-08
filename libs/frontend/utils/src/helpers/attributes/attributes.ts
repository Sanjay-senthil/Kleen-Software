import { Attribute, CellInteraction, ColumnData, Link, Transformation, WidgetScope } from '@kleeen/types';
import {
  DEFAULT_TRANSFORMATION_KEY_TO_USE,
  isSingleCardinalityDataPoint,
  isSingleCardinalityTransformation,
} from '../transformations';

import { crosslinkingInteractionType } from '@kleeen/types';
import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { pathOr } from 'ramda';

interface CellInteractionArgs {
  availableFilters: Attribute[];
  column: ColumnData;
  hasFilters: boolean;
  isInvestigationPage: boolean;
  linkInteraction: crosslinkingInteractionType;
}

interface LinkStyleArgs {
  excludeCrossLinking?: boolean;
  hasCrossLink: boolean;
  hasFilter: boolean;
  hasInvestigations?: boolean;
  hasPreview: boolean;
  isDisableCrossLinking?: boolean;
  isInvestigationPage?: boolean;
  isPreview?: boolean;
  linkInteraction: crosslinkingInteractionType;
}

export function isFilterableAttribute({
  attribute,
  filterableAttributes,
  hasFilters,
}: {
  attribute: Attribute;
  filterableAttributes: Attribute[];
  hasFilters: boolean;
}): boolean {
  if (!hasFilters) return false;

  // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
  const attributeTransformation = pathOr(
    attribute?.aggregation as Transformation,
    [DEFAULT_TRANSFORMATION_KEY_TO_USE],
    attribute,
  );
  const isAvailable = filterableAttributes.find((att) => att.name === attribute.name);
  const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);
  const hasFilter = Boolean(isAvailable && isSingleCardinality);

  return hasFilter;
}

export function isLinkFilterableByEntityType(entityType: string, link: Link): boolean {
  return !link.entityType || link.entityType === entityType;
}

export function isLinkableByEntityType({
  attribute,
  isInvestigation,
  entityType,
}: {
  attribute: Attribute;
  isInvestigation: boolean;
  entityType: string;
}) {
  return isLinkableAttribute(attribute, isInvestigation) && isValidLinkByEntityType(attribute, entityType);
}

// this validation is needed for xor cases.
export function isValidLinkByEntityType(attribute: Attribute, entityType: string) {
  const { crossLinking: links } = attribute;

  if (isNilOrEmpty(links)) return false;

  const availableLinks = getAvailableLinks(links, entityType);

  return !isNilOrEmpty(availableLinks);
}

export function getCellInteraction({
  availableFilters,
  column,
  hasFilters,
  isInvestigationPage,
  linkInteraction,
}: CellInteractionArgs): CellInteraction {
  const attribute = column.attr;

  if (isNilOrEmpty(attribute)) {
    return {
      hasCrossLink: false,
      hasFilter: false,
      hasInvestigations: false,
      hasPreview: false,
      linkInteraction,
    };
  }

  /**
   * Crosslink
   */
  const hasCrossLink = isLinkableAttribute(attribute, isInvestigationPage);

  /**
   * Filters
   */
  const hasFilter = isFilterableAttribute({
    attribute,
    filterableAttributes: availableFilters,
    hasFilters,
  });

  /**
   * Preview
   */
  const isSingleCardinality = isSingleCardinalityDataPoint({
    attribute,
  });
  const hasPreview = entityHasWidgets({
    entityId: attribute?.id || '',
    scope: isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection,
  });

  /**
   * Investigations
   */
  const hasInvestigations = hasPreview && isInvestigationPage;

  return {
    hasCrossLink,
    hasFilter,
    hasInvestigations,
    hasPreview,
    linkInteraction,
  };
}

export function getLinkStyle({
  excludeCrossLinking = false,
  hasCrossLink,
  hasFilter,
  hasInvestigations,
  hasPreview,
  isDisableCrossLinking,
  isInvestigationPage,
  isPreview,
  linkInteraction,
}: LinkStyleArgs): {
  highlight: boolean;
  underline: boolean;
} {
  const isOnClickInteraction = linkInteraction === crosslinkingInteractionType.onClick;

  //TODO: "isDisableCrossLinking" has to be removed when we will implement the enhancement to disable the crosslinking interaction by the widget
  if (isPreview || isDisableCrossLinking) {
    return {
      highlight: false,
      underline: false,
    };
  }

  if (isInvestigationPage) {
    return {
      highlight: !excludeCrossLinking && Boolean(hasInvestigations),
      underline: false,
    };
  }

  const highlight = !excludeCrossLinking && Boolean(hasCrossLink || hasFilter || hasPreview);
  const underline = !excludeCrossLinking && hasCrossLink && !isOnClickInteraction;

  return {
    highlight,
    underline,
  };
}

//#region Private Members
function getAvailableLinks(links: Link[], entityType: string) {
  // is xor and we need to check it's entity type
  if (!isNilOrEmpty(entityType)) links.filter((link) => isLinkFilterableByEntityType(entityType, link));

  return links;
}

function isLinkableAttribute(attribute: Attribute, isInvestigation: boolean) {
  if (isInvestigation) return false;

  return !isNilOrEmpty(attribute.crossLinking);
}
//#endregion
