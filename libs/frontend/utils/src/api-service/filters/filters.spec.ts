/* eslint-disable max-lines */
import { FilterCombinator, FilterOperation, FilterOperators, IntervalDate } from '@kleeen/types';

import { INVESTIGATION_URL_PARAM } from '@kleeen/investigations';
import { getFiltersInput } from './filters';

describe('api-service', () => {
  describe('filters', () => {
    it('should skip adding rules objects if "paramsBasedOnRoute" has incomplete operations', () => {
      const filterMap = {
        ComputerChild: {},
        ComputerParent: {
          [FilterOperators.in]: [],
        },
        IsNull: null,
        IsUndefined: undefined,
      };
      const filterQuery = {
        combinator: FilterCombinator.AND,
        rules: [],
      };

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it('should ignore the investigation special param "i"', () => {
      const filterMap = {
        ComputerChild: '39a91f5e-da34-4e64-bd0f-730a7c9d6a99',
        ComputerParent: 'a7e2e0aa-7bf5-4113-8139-7167fe1b8770',
        [INVESTIGATION_URL_PARAM]:
          'eyJmb2xsb3dVcENhcmRzIjpbeyJkYXRhUG9pbnQiOnsiZW50aXR5SWQiOjE3NTM0Nywic2NvcGUiOiJzaW5nbGUifSwibWV0YWRhdGEiOnsiY3JlYXRlZEF0IjoiMjAyMS0xMC0xMlQyMDo1OTozNC41NThaIn0sImZpbHRlcnMiOnsicGxheWVyIjoiZjljODhiYzItNGU1MC00MzIzLTkwNDUtNzE1NzRiZjI2ZmIzIn19XSwibWV0YWRhdGEiOnsiY3JlYXRlZEF0IjoiMjAyMS0xMC0xMlQyMDo1OTozNC41NThaIn0sImZpbHRlcnMiOnt9fQ',
      };
      const filterQuery = {
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
            value: { id: 'a7e2e0aa-7bf5-4113-8139-7167fe1b8770' },
          },
        ],
      };

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it('should return an empty filters object input if "paramsBasedOnRoute" is nilOrEmpty', () => {
      const filterQuery = {};

      expect(getFiltersInput({})).toEqual(filterQuery);
      expect(getFiltersInput()).toEqual(filterQuery);
      expect(getFiltersInput(undefined)).toEqual(filterQuery);
    });

    it(`should return a "${FilterOperation.Is}" operation if "paramsBasedOnRoute" has a plain parameter operation`, () => {
      const filterMap = {
        ComputerChild: '39a91f5e-da34-4e64-bd0f-730a7c9d6a99',
        ComputerParent: 12345,
        IsParent: false,
      };
      const filterQuery = {
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

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a "${FilterOperation.Is}" operation if "paramsBasedOnRoute" has a "${FilterOperators.in}" operation`, () => {
      const filterMap = {
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
      const filterQuery = {
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

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a "${FilterOperation.IsNot}" operation if "paramsBasedOnRoute" has a "${FilterOperators.notIn}" operation`, () => {
      const filterMap = {
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
      const filterQuery = {
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

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a "${FilterOperation.LessOrEqualThan}" operation if "paramsBasedOnRoute" has a "${FilterOperators.max}" operation`, () => {
      const filterMap = {
        Salary: {
          [FilterOperators.max]: 80,
        },
      };
      const filterQuery = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'salary',
            operation: FilterOperation.LessOrEqualThan,
            value: { displayValue: 80 },
          },
        ],
      };

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a "${FilterOperation.GreaterOrEqualThan}" operation if "paramsBasedOnRoute" has a "${FilterOperators.min}" operation`, () => {
      const filterMap = {
        Salary: {
          [FilterOperators.min]: -45,
        },
      };
      const filterQuery = {
        combinator: FilterCombinator.AND,
        rules: [
          {
            field: 'salary',
            operation: FilterOperation.GreaterOrEqualThan,
            value: { displayValue: -45 },
          },
        ],
      };

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a range operation if "paramsBasedOnRoute" has both "${FilterOperators.min}" and "${FilterOperators.max}" operations`, () => {
      const filterMap = {
        Salary: {
          [FilterOperators.max]: 80,
          [FilterOperators.min]: -45,
        },
      };
      const filterQuery = {
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

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
    });

    it(`should return a range operation if "paramsBasedOnRoute" has both "${FilterOperators.from}" and "${FilterOperators.to}" operations`, () => {
      const filterMap = {
        Timestamp: {
          [FilterOperators.from]: 1630497600000,
          [FilterOperators.to]: 1632794400000,
        },
      };
      const filterQuery = {
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

      expect(getFiltersInput(filterMap)).toEqual(filterQuery);
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
      `should return a "${FilterOperation.RelativeDate}" of %p if "paramsBasedOnRoute" has a "${FilterOperators.relativeDate}" of %p operation`,
      (interval, expectedInterval) => {
        const filterMap = {
          Timestamp: {
            [FilterOperators.relativeDate]: interval,
          },
        };
        const filterQuery = {
          combinator: FilterCombinator.AND,
          rules: [
            {
              field: 'timestamp',
              operation: FilterOperation.RelativeDate,
              value: { displayValue: expectedInterval },
            },
          ],
        };

        expect(getFiltersInput(filterMap)).toEqual(filterQuery);
      },
    );

    it(`should return a combination of all operations if "paramsBasedOnRoute" has "${FilterOperators.in}", "${FilterOperators.max}", "${FilterOperators.min}", "${FilterOperators.from}" and "${FilterOperators.to}" operations`, () => {
      const filterMap = {
        CoffeeShop: {
          [FilterOperators.in]: ['Chocolatito'],
        },
        Salary: {
          [FilterOperators.in]: 20,
          [FilterOperators.max]: 23,
          [FilterOperators.min]: 14,
        },
        Timestamp: {
          [FilterOperators.from]: 1633101300000,
          [FilterOperators.to]: 1633274100000,
        },
      };

      expect(getFiltersInput(filterMap)).toMatchSnapshot();
    });
  });
});
