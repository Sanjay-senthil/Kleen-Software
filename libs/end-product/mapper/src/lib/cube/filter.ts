import { FilterOperation, FilterQuery } from '@kleeen/types';
import { prop, uniqBy } from 'ramda';

export function mapFilters<T>(filters: FilterQuery, mapObject: { [key: string]: unknown }): T[] {
  const { rules = [] } = filters;

  const cubeFilters = rules
    .map(({ field, operation }, i, arr) => {
      const member = mapObject[field];

      if (!member) {
        console.error(`the column name [${field}] did not have a corresponding map value`);
        return null;
      }
      const operator = operatorMap(operation);
      const values = arr
        .filter((a) => a?.field === field)
        .map((f) =>
          Array.isArray(f?.value)
            ? f?.value.map(({ displayValue, id }) => String(displayValue || id))
            : String(f?.value?.displayValue || f?.value?.id),
        );

      return {
        member,
        operator,
        values,
      };
    })
    .filter(Boolean);

  return uniqBy(prop('member'), cubeFilters);
}

//#region Private members
function operatorMap(operator: string) {
  const operators = {
    [FilterOperation.GreaterOrEqualThan]: 'gte',
    [FilterOperation.Is]: 'equals',
    [FilterOperation.IsNot]: 'notEquals',
    [FilterOperation.LessOrEqualThan]: 'lte',
  };

  return operators[operator];
}
//#endregion
