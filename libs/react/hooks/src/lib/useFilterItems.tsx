import {
  Attribute,
  Cell,
  ContextMenuItem,
  DataPointWithFormattedValue,
  DisplayValue,
  FILTERS_KEY,
  FilterOperators,
  FilterTypes,
  Filters,
  Transformation,
} from '@kleeen/types';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import {
  areFiltersInUse,
  useOldLocalStorage as useLocalStorage,
  useUrlQueryParams,
  useUserInfo,
} from '@kleeen/react/hooks';
import { getFiltersInitialState, getTimestamp, manageOperations, mapWithStringify } from '../helpers';
import {
  isCountTransformations,
  isNumericType,
  isSingleCardinalityTransformation,
} from '@kleeen/frontend/utils';
import { isNilOrEmpty, upperCamelCase, validateIsOrIsNorFilterOperator } from '@kleeen/common/utils';

import { Translate } from '@kleeen/core-react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

export function useFilterItems({
  attr,
  cell,
  handleClose,
}: {
  handleClose: () => void;
  attr: Attribute;
  cell: Cell & { formattedValue: ReactNode | number };
}) {
  const history = useHistory();
  const { paramsBasedOnRoute } = useUrlQueryParams({ useNestedObjects: true });
  const _user = useUserInfo();
  const userName = _user?.userInfo?.username;
  const filtersKey = userName ? `${FILTERS_KEY}${history.location.pathname}-${userName}` : null;
  const { setLocalStorageValue } = useLocalStorage<Record<string, unknown>>(filtersKey, '');
  const [menuItems, setMenuItems] = useState([]);
  const filtersInUse = areFiltersInUse();

  useEffect(() => {
    const items = getFilterItems({
      dataPoint: {
        attribute: attr,
        formattedValue: cell.formattedValue,
        value: cell,
      },
      filtersInUse,
      handleClose,
      history,
      paramsBasedOnRoute,
      setLocalStorageValue,
    });

    setMenuItems(items);
  }, [filtersInUse, attr?.id, attr?.aggregation, cell.id, filtersKey]);

  return menuItems;
}

export interface ContextMenuFilterItems extends ContextMenuItem {
  filterType: FilterTypes;
}

export function getFilterItems({
  dataPoint,
  filtersInUse,
  handleClose,
  history,
  paramsBasedOnRoute,
  setLocalStorageValue,
}: {
  dataPoint: DataPointWithFormattedValue;
  filtersInUse: boolean;
  handleClose: () => void;
  history: any;
  paramsBasedOnRoute: Filters;
  setLocalStorageValue: Dispatch<SetStateAction<Record<string, unknown>>>;
}): ContextMenuFilterItems[] {
  const filtersAdded = getFiltersInitialState(paramsBasedOnRoute);

  const { attribute, formattedValue, value } = dataPoint;

  const handleFilterIn = (operator: FilterOperators) => () => () => {
    const category = upperCamelCase(attribute?.name);
    const newCategory = filtersAdded[category] || {};
    const newOperator = manageOperations(operator, value?.displayValue, newCategory[operator]);
    const newFilter = {
      ...filtersAdded,
      [category]: { ...newCategory, [operator]: newOperator },
    };
    // Get time filters from url
    const Timestamp = getTimestamp(paramsBasedOnRoute);
    const timeFilters = Object.keys(Timestamp).length ? { Timestamp } : { Timestamp: undefined };
    const filtersToApply = {
      ...newFilter,
      ...timeFilters,
    };

    setLocalStorageValue(filtersToApply);
    // Apply filters into url
    const urlQuery = queryString.stringify(mapWithStringify(filtersToApply));
    history.push(`?${urlQuery}`);
    handleClose();
  };

  const handleFilterOut = (operator: FilterOperators) => () => () => {
    const category = upperCamelCase(attribute?.name);
    const name = value?.displayValue;
    const newCategory = filtersAdded[category];

    if (validateIsOrIsNorFilterOperator(operator)) {
      const currentOperatorValues = newCategory[operator] || [];
      const newOperatorValues = currentOperatorValues.filter(
        (currentOperatorValue) => name !== currentOperatorValue,
      );
      newCategory[operator] = newOperatorValues;

      if (newOperatorValues.length === 0) {
        delete newCategory[operator];
      }
    } else if (operator === FilterOperators.max || operator === FilterOperators.min) {
      delete newCategory[operator];
    }

    const newFilter = {
      ...filtersAdded,
      [category]: newCategory,
    };

    if (Object.keys(newCategory).length === 0) {
      delete newFilter[category];
    }
    // Get time filters from url
    const Timestamp = getTimestamp(paramsBasedOnRoute);
    const timeFilters = Object.keys(Timestamp).length ? { Timestamp } : { Timestamp: undefined };
    const filtersToApply = {
      ...newFilter,
      ...timeFilters,
    };

    setLocalStorageValue(filtersToApply);
    // Apply filters into url
    const urlQuery = queryString.stringify(mapWithStringify(filtersToApply));
    history.push(`?${urlQuery}`);
    handleClose();
  };

  const items: ContextMenuFilterItems[] = [];
  const transformation = attribute?.aggregation as Transformation;

  const showLessAndMoreFilter =
    filtersInUse && isNumericType(attribute) && !isCountTransformations(transformation);

  // TODO: Review if "less/more than" filters should be included in avg/sum transformations
  if (showLessAndMoreFilter) {
    const inFiltersMin = existsInFilter(
      attribute?.name,
      value?.displayValue,
      FilterOperators.min,
      filtersAdded,
    );

    items.push({
      label: (
        <Translate id="app.contextMenu.filter.moreThan" type="html" values={{ value: formattedValue }} />
      ),
      handleClick: inFiltersMin ? handleFilterOut(FilterOperators.min) : handleFilterIn(FilterOperators.min),
      key: `filter.min.${attribute?.name}`,
      roleAccessKey: `filter.min.${attribute?.name}`,
      filterType: inFiltersMin ? FilterTypes.out : FilterTypes.in,
    });
  }

  const inFiltersIn = existsInFilter(attribute?.name, value?.displayValue, FilterOperators.in, filtersAdded);

  const inFiltersNotIn = existsInFilter(
    attribute?.name,
    value?.displayValue,
    FilterOperators.notIn,
    filtersAdded,
  );

  const itemIn = {
    label: <Translate id="app.contextMenu.filter.equalTo" type="html" values={{ value: formattedValue }} />,
    handleClick: inFiltersIn ? handleFilterOut(FilterOperators.in) : handleFilterIn(FilterOperators.in),
    key: `filter.equals.${value?.id}`,
    roleAccessKey: `filter.equals.${attribute?.name}`,
    filterType: inFiltersIn ? FilterTypes.out : FilterTypes.in,
  };

  const itemNotIn = {
    label: (
      <Translate id="app.contextMenu.filter.isNotEqualTo" type="html" values={{ value: formattedValue }} />
    ),
    handleClick: inFiltersNotIn
      ? handleFilterOut(FilterOperators.notIn)
      : handleFilterIn(FilterOperators.notIn),
    key: `filter.notEquals.${value?.id}`,
    roleAccessKey: `filter.notEquals.${attribute?.name}`,
    filterType: inFiltersNotIn ? FilterTypes.out : FilterTypes.in,
  };

  if (filtersInUse && isSingleCardinalityTransformation(transformation)) {
    if (!inFiltersIn && !inFiltersNotIn) {
      items.push(itemIn);
      items.push(itemNotIn);
    }

    if (inFiltersIn) {
      items.push(itemIn);
    }

    if (inFiltersNotIn) {
      items.push(itemNotIn);
    }
  }

  // TODO: Review if "less/more than" filters should be included in avg/sum transformations
  if (showLessAndMoreFilter) {
    const inFiltersMax = existsInFilter(
      attribute?.name,
      value?.displayValue,
      FilterOperators.max,
      filtersAdded,
    );

    items.push({
      label: (
        <Translate id="app.contextMenu.filter.lessThan" type="html" values={{ value: formattedValue }} />
      ),
      handleClick: inFiltersMax ? handleFilterOut(FilterOperators.max) : handleFilterIn(FilterOperators.max),
      key: `filter.max.${attribute?.name}`,
      roleAccessKey: `filter.max.${attribute?.name}`,
      filterType: inFiltersMax ? FilterTypes.out : FilterTypes.in,
    });
  }

  return items;
}

//#region Private members
function existsInFilter(
  attribute: string,
  value: DisplayValue,
  operator: FilterOperators,
  filters: Filters,
): boolean {
  const capitalizedAttribute = upperCamelCase(attribute);
  const filteredAttr = filters[capitalizedAttribute];
  const filteredValues = filteredAttr ? filteredAttr[operator] : null;

  return !isNilOrEmpty(filteredValues) && Array.isArray(filteredValues)
    ? filteredValues.includes(value)
    : filteredValues === value;
}
//#endregion
