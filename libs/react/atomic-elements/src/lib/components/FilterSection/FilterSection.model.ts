import { FilterForNumerics, FilterOperators, StatisticalTypeFilterForText, Translate } from '@kleeen/types';

export interface Filter {
  results: [string, string[]][];
}

export interface Params {
  baseModel: string;
  attributes: string;
  operationName?: string;
}

export enum FilterSectionEnum {
  Bounds = 'Bounds',
  FilterBy = 'SELECT FILTER TYPE',
  Values = 'Values',
}

export const optionsByStatisticalType = [
  {
    included: FilterForNumerics,
    options: [
      { name: 'Minimum', section: FilterSectionEnum.Bounds, operator: FilterOperators.min },
      { name: 'Is', section: FilterSectionEnum.Bounds, operator: FilterOperators.in },
      { name: 'Is not', section: FilterSectionEnum.Bounds, operator: FilterOperators.notIn },
      { name: 'Maximum', section: FilterSectionEnum.Bounds, operator: FilterOperators.max },
    ],
    section: FilterSectionEnum.Bounds,
  },
  {
    included: StatisticalTypeFilterForText,
    options: [
      { name: 'Is', section: FilterSectionEnum.Bounds, operator: FilterOperators.in },
      { name: 'Is not', section: FilterSectionEnum.Bounds, operator: FilterOperators.notIn },
    ],
    section: FilterSectionEnum.Bounds,
  },
];

export interface FilterAdded {
  [FilterOperators.in]?: Array<string | number>;
  [FilterOperators.notIn]?: Array<string | number>;
  [FilterOperators.min]?: number;
  [FilterOperators.max]?: number;
}

export interface FiltersAddedState {
  [category: string]: FilterAdded;
}

export interface FilterOption {
  name: string;
  statisticalType?: string;
  section: string;
  operator?: FilterOperators;
  category?: string;
  value?: string;
  displayName?: string;
  accessLevel?: string;
}

export const addFilterText = 'Add Filter';
export const materialAutocompleteClearSignal = 'clear';

export interface FilterSectionProps {
  filters: { name: string; statisticalType: string; accessLevel: string }[];
  taskName: string;
  onChangeFilterVisible?: (e: boolean) => void;
  hasDateFilter?: boolean;
  translate: Translate;
}
