import {
  FilterCombinator,
  FilterOperation,
  FilterOperators,
  FilterQuery,
  FilterRule,
  Filters,
  Maybe,
  ParamsBasedOnRoute,
  PrimitiveType,
} from '@kleeen/types';
import { isNilOrEmpty, isPrimitive } from '@kleeen/common/utils';

import { INVESTIGATION_URL_PARAM } from '@kleeen/investigations';
import camelCase from 'lodash.camelcase';

const operationMap: { [key in FilterOperators]: FilterOperation } = {
  [FilterOperators.from]: FilterOperation.GreaterOrEqualThan,
  [FilterOperators.in]: FilterOperation.Is,
  [FilterOperators.max]: FilterOperation.LessOrEqualThan,
  [FilterOperators.min]: FilterOperation.GreaterOrEqualThan,
  [FilterOperators.notIn]: FilterOperation.IsNot,
  [FilterOperators.relativeDate]: FilterOperation.RelativeDate,
  [FilterOperators.to]: FilterOperation.LessOrEqualThan,
};

export function getFiltersInput(filters?: Filters): FilterQuery | Record<string, never> {
  if (isNilOrEmpty(filters)) return {};

  const rules = Object.entries(filters).reduce((acc: FilterRule[], [thingName, operation]) => {
    if (thingName === INVESTIGATION_URL_PARAM) {
      // Ignore the special Investigation param
      return acc;
    }

    const field = getFilterFieldName(thingName);

    if (isPrimitive(operation)) {
      const ruleFromPrimitive = {
        field,
        operation: FilterOperation.Is,
        value: { id: operation },
      };

      acc.push(ruleFromPrimitive);

      return acc;
    }

    const filterRulesFromObject = getFilterOperationsAndValues({
      field,
      operation,
    });

    if (isNilOrEmpty(filterRulesFromObject)) return acc;

    acc.push(...filterRulesFromObject);

    return acc;
  }, []);
  const filtersInput = {
    combinator: FilterCombinator.AND,
    rules,
  };

  return filtersInput;
}

//#region Private members
interface GetFilterOperationsAndValues {
  field: string;
  operation: ParamsBasedOnRoute;
}

function getFilterOperationsAndValues({
  field,
  operation,
}: GetFilterOperationsAndValues): Maybe<FilterRule[]> {
  if (isNilOrEmpty(operation)) return;

  const filterOperationsAndValues = Object.entries(operation).reduce(
    (acc: FilterRule[], [oldOperator, value]) => {
      if (isNilOrEmpty(value)) return acc;

      const baseFilterOperationAndValue = {
        field,
        operation: operationMap[oldOperator as FilterOperators],
      };

      if (Array.isArray(value)) {
        const displayValues = value as PrimitiveType[];
        const rules = displayValues.map((displayValue): FilterRule => {
          return {
            ...baseFilterOperationAndValue,
            value: {
              displayValue,
            },
          };
        });

        acc.push(...rules);

        return acc;
      }

      const displayValue = value as PrimitiveType;
      const filterOperationAndValue = {
        ...baseFilterOperationAndValue,
        value: { displayValue },
      };

      acc.push(filterOperationAndValue);

      return acc;
    },
    [],
  );

  return filterOperationsAndValues;
}

function getFilterFieldName(originalName: string): string {
  return camelCase(originalName);
}
//#endregion
