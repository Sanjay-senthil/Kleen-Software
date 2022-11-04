/* eslint-disable max-lines */
import { FilterCombinator, FilterOperation, FilterOperators, FilterQuery, IntervalDate } from '@kleeen/types';

import { transformFiltersToDeprecatedVersion } from './filters';

describe('compatibility', () => {
  describe('filters', () => {
    it('should return undefined if "filters" is nil', () => {
      expect(
        transformFiltersToDeprecatedVersion({
          filters: undefined,
        } as { filters: FilterQuery }),
      ).toBeUndefined();
      expect(
        transformFiltersToDeprecatedVersion({
          filters: null,
        } as { filters: FilterQuery }),
      ).toBeUndefined();
      expect(
        transformFiltersToDeprecatedVersion({
          filters: {},
        } as { filters: FilterQuery }),
      ).toBeUndefined();
    });

    it('should return undefined if "filters" has no rules', () => {
      const filters = {
        combinator: FilterCombinator.AND,
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        } as { filters: FilterQuery }),
      ).toBeUndefined();
    });

    it('should return an empty filters object if "filters" has empty rules', () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [],
      };
      const filtersDeprecatedVersion = {};

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with three "plain" keys if "filters" has three "${FilterOperation.Is}" rules`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'computerChild',
            operation: FilterOperation.Is,
            value: { id: '39a91f5e-da34-4e64-bd0f-730a7c9d6a99' },
          },
          {
            field: 'computerParent',
            operation: FilterOperation.Is,
            value: { id: 12345 },
          },
          {
            field: 'isParent',
            operation: FilterOperation.Is,
            value: { id: false },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        computerChild: '39a91f5e-da34-4e64-bd0f-730a7c9d6a99',
        computerParent: 12345,
        isParent: false,
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with three "${FilterOperators.in}" keys if "filters" has four "${FilterOperation.Is}" rules and two of them belong to the same field`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'computer',
            operation: FilterOperation.Is,
            value: { displayValue: 12345 },
          },
          {
            field: 'computerChild',
            operation: FilterOperation.Is,
            value: { displayValue: 'quia aut dolorum at porro deserunt accusamus' },
          },
          {
            field: 'computerParent',
            operation: FilterOperation.Is,
            value: { displayValue: 'optio nobis maiores' },
          },
          {
            field: 'computerParent',
            operation: FilterOperation.Is,
            value: { displayValue: 'quisquam voluptate molestias eius' },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Computer: {
          [FilterOperators.in]: [12345],
        },
        ComputerChild: {
          [FilterOperators.in]: ['quia aut dolorum at porro deserunt accusamus'],
        },
        ComputerParent: {
          [FilterOperators.in]: ['optio nobis maiores', 'quisquam voluptate molestias eius'],
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with three "${FilterOperators.notIn}" keys if "filters" has four "${FilterOperation.IsNot}" rules and two of them belong to the same field`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'computer',
            operation: FilterOperation.IsNot,
            value: { displayValue: 12345 },
          },
          {
            field: 'computerChild',
            operation: FilterOperation.IsNot,
            value: { displayValue: 'quia aut dolorum at porro deserunt accusamus' },
          },
          {
            field: 'computerParent',
            operation: FilterOperation.IsNot,
            value: { displayValue: 'optio nobis maiores' },
          },
          {
            field: 'computerParent',
            operation: FilterOperation.IsNot,
            value: { displayValue: 'quisquam voluptate molestias eius' },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Computer: {
          [FilterOperators.notIn]: [12345],
        },
        ComputerChild: {
          [FilterOperators.notIn]: ['quia aut dolorum at porro deserunt accusamus'],
        },
        ComputerParent: {
          [FilterOperators.notIn]: ['optio nobis maiores', 'quisquam voluptate molestias eius'],
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with one "${FilterOperators.max}" key if "filters" has one "${FilterOperation.LessOrEqualThan}" rule`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'salary',
            operation: FilterOperation.LessOrEqualThan,
            value: { displayValue: 80 },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Salary: {
          [FilterOperators.max]: 80,
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with one "${FilterOperators.min}" key if "filters" has one "${FilterOperation.GreaterOrEqualThan}" rule`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'salary',
            operation: FilterOperation.GreaterOrEqualThan,
            value: { displayValue: -45 },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Salary: {
          [FilterOperators.min]: -45,
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with one "${FilterOperators.min}" and one "${FilterOperators.max}" keys if "filters" has one "${FilterOperation.GreaterOrEqualThan}" and one "${FilterOperation.LessOrEqualThan}" rules`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'salary',
            operation: FilterOperation.LessOrEqualThan,
            value: { displayValue: 80 },
          },
          {
            field: 'salary',
            operation: FilterOperation.GreaterOrEqualThan,
            value: { displayValue: -45 },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Salary: {
          [FilterOperators.max]: 80,
          [FilterOperators.min]: -45,
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it(`should return a filters object with one "${FilterOperators.from}" and one "${FilterOperators.to}" keys if "filters" has one "${FilterOperation.GreaterOrEqualThan}" and one "${FilterOperation.LessOrEqualThan}" timestamp rules`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'timestamp',
            operation: FilterOperation.GreaterOrEqualThan,
            value: { displayValue: 1630497600000 },
          },
          {
            field: 'timestamp',
            operation: FilterOperation.LessOrEqualThan,
            value: { displayValue: 1632794400000 },
          },
        ],
      };
      const filtersDeprecatedVersion = {
        Timestamp: {
          [FilterOperators.from]: 1630497600000,
          [FilterOperators.to]: 1632794400000,
        },
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toEqual(filtersDeprecatedVersion);
    });

    it.each([
      [IntervalDate.allTime, IntervalDate.allTime],
      [IntervalDate.minute, IntervalDate.minute],
      [IntervalDate.oneHours, IntervalDate.oneHours],
      [IntervalDate.oneMonth, IntervalDate.oneMonth],
      [IntervalDate.oneWeek, IntervalDate.oneWeek],
      [IntervalDate.sixHours, IntervalDate.sixHours],
      [IntervalDate.threeMonth, IntervalDate.threeMonth],
      [IntervalDate.twentyFourHours, IntervalDate.twentyFourHours],
    ])(
      `should return a filters object with one %p "${FilterOperators.relativeDate}" key if "filters" has one %p "${FilterOperation.RelativeDate}" rule`,
      (interval, expectedInterval) => {
        const filters = {
          combinator: FilterCombinator.AND,
          rules: [
            {
              field: 'timestamp',
              operation: FilterOperation.RelativeDate,
              value: { displayValue: interval },
            },
          ],
        };
        const filtersDeprecatedVersion = {
          Timestamp: {
            [FilterOperators.relativeDate]: expectedInterval,
          },
        };

        expect(
          transformFiltersToDeprecatedVersion({
            filters,
          }),
        ).toEqual(filtersDeprecatedVersion);
      },
    );

    it(`should return a filters objects with all keys if "filters" has all operators`, () => {
      const filters = {
        combinator: FilterCombinator.AND,
        rules: [
          { field: 'coffeeShop', operation: FilterOperation.Is, value: { displayValue: 'Chocolatito' } },
          { field: 'salary', operation: FilterOperation.Is, value: { displayValue: 20 } },
          { field: 'salary', operation: FilterOperation.GreaterOrEqualThan, value: { displayValue: 14 } },
          { field: 'salary', operation: FilterOperation.LessOrEqualThan, value: { displayValue: 23 } },
          {
            field: 'timestamp',
            operation: FilterOperation.GreaterOrEqualThan,
            value: { displayValue: 1633101300000 },
          },
          {
            field: 'timestamp',
            operation: FilterOperation.LessOrEqualThan,
            value: { displayValue: 1633274100000 },
          },
        ],
      };

      expect(
        transformFiltersToDeprecatedVersion({
          filters,
        }),
      ).toMatchSnapshot();
    });
  });
});
