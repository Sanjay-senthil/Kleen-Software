import { Attribute, ContextMenuDataPoint, WidgetScope } from '@kleeen/types';
import {
  isFilterableAttribute,
  isLinkableByEntityType,
  isSingleCardinalityDataPoint,
} from '@kleeen/frontend/utils';
import { useAvailableFiltersByWorkflow, useIsInvestigation } from '@kleeen/react/hooks';
import { useEffect, useState } from 'react';

import { ClickableChipsCellProps } from '../components/clickable-chips/clickable-chips-cell.model';
import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';

interface InteractionValidations {
  hasCrossLinking: boolean;
  hasFilters: boolean;
  hasPreview: boolean;
}

type UseIsAttributeClickable = Pick<ClickableChipsCellProps, 'cellEntityType' | 'isIdTemporary'> & {
  dataPoint: Pick<ContextMenuDataPoint, 'attribute' | 'transformationKeyToUse'>;
  excludeCrossLinking?: boolean;
  isPreview?: boolean;
};

const defaultInteractionValidationsState = {
  hasCrossLinking: false,
  hasFilters: false,
  hasPreview: false,
};

export function useAttributeInteractions({
  cellEntityType,
  dataPoint,
  excludeCrossLinking,
  isPreview,
  isIdTemporary,
}: UseIsAttributeClickable): InteractionValidations {
  const { attribute } = dataPoint;

  const { availableFilters, hasFilters } = useAvailableFiltersByWorkflow<Attribute>([attribute]);
  const [interactionValidations, setInteractionValidations] = useState<InteractionValidations>(
    defaultInteractionValidationsState,
  );
  const isInvestigationPage = useIsInvestigation();

  useEffect(() => {
    const shouldNotSetInteractionValidations = isNilOrEmpty(attribute);

    if (shouldNotSetInteractionValidations) return;

    /**
     * Crosslink
     */
    const linkableByEntityType = isLinkableByEntityType({
      attribute,
      isInvestigation: isInvestigationPage,
      entityType: cellEntityType,
    });
    const hasCrossLinkingInteractions =
      !isPreview && !excludeCrossLinking && !isIdTemporary && linkableByEntityType;

    /**
     * Filters
     */
    const hasFiltersInteractions = isFilterableAttribute({
      attribute,
      filterableAttributes: availableFilters,
      hasFilters,
    });

    /**
     * Preview
     */
    const isSingleCardinality = isSingleCardinalityDataPoint(dataPoint);
    const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
    const hasPreviewInteractions = entityHasWidgets({
      entityId: attribute?.id,
      scope,
    });

    setInteractionValidations({
      hasCrossLinking: hasCrossLinkingInteractions,
      hasFilters: hasFiltersInteractions,
      hasPreview: hasPreviewInteractions,
    });
  }, [attribute, isInvestigationPage, availableFilters.length]);

  return interactionValidations;
}
