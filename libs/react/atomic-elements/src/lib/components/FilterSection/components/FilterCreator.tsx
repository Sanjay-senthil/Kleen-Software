import {
  Filter,
  FilterOption,
  FilterSectionEnum,
  FiltersAddedState,
  addFilterText,
  materialAutocompleteClearSignal,
  optionsByStatisticalType,
} from '../FilterSection.model';
import { FilterOperators, StatisticalTypeFilterForText, TimestampKey } from '@kleeen/types';
import React, { ReactElement, useEffect, useState } from 'react';

import FilterAutocomplete from '../../filter-autocomplete/filter-autocomplete';
import moment from 'moment';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { getOptionDisabled } from './utils';

const FilterCreator = ({
  categoryFilterOptions,
  filterOptionsByCategory,
  addFilter,
  setIsApplyDisabled,
  filtersAdded,
}: {
  categoryFilterOptions: FilterOption[];
  filterOptionsByCategory: Record<string, FilterOption[]>;
  addFilter: (category: string, operator: FilterOperators, value: string | number) => void;
  setIsApplyDisabled: (value: boolean) => void;
  filtersAdded: FiltersAddedState;
}): ReactElement => {
  const [label, setLabel] = useState(addFilterText);
  const [statisticalTypeSelected, setStatisticalTypeSelected] = useState(null);
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [isCategory, setIsCategory] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const isSelectingCategory = !currentCategory;
    if (isSelectingCategory) {
      // validation when the category have all the values added should not appear?
      setOptions(categoryFilterOptions);
    }
  }, [currentCategory]);

  const handleCategoryClick = ({ name: category, statisticalType = '' }: FilterOption): void => {
    setIsCategory(!isCategory);
    setCurrentCategory(category);
    setLabel(category);
    if (!isNilOrEmpty(statisticalType)) setStatisticalTypeSelected(statisticalType);
    let auxOptionsByCategory = filterOptionsByCategory[category];
    if (statisticalType === 'Data - Numeric - Temporal') {
      auxOptionsByCategory = filterOptionsByCategory[category]?.map((option) => {
        return {
          ...option,
          name: moment(option.name).format(TimestampKey.format),
          value: option.name,
        };
      });
    }
    const { options: filterOptionsByType } = optionsByStatisticalType.find(({ included }) =>
      included.includes(statisticalType),
    ) || { options: [] };
    setOptions([...filterOptionsByType, ...auxOptionsByCategory]);
  };

  const handleValueClick = ({ name, operator, section, value: valueTimestamp }: FilterOption): void => {
    setLabel(addFilterText);
    setIsCategory(!isCategory);
    // TODO close modal on this clicks
    if (section === FilterSectionEnum.Bounds) {
      addFilter(currentCategory, operator, inputValue);
    } else if (name) {
      // * We use the timestamp key to know that the value in the query string is timestamp type
      const auxName = valueTimestamp ? `${TimestampKey.key}${valueTimestamp}` : name;
      addFilter(currentCategory, FilterOperators.in, auxName);
    }
    setOptions(categoryFilterOptions);
    setCurrentCategory('');
  };

  const getOptionLabel = ({ name, section }: FilterOption): string => {
    if (section === FilterSectionEnum.Bounds) {
      return !inputValue ? name : `${name} is ${inputValue}`;
    }
    return Number.isInteger(name) ? String(name) : name || '';
  };

  const getOptions = (currentOptions: FilterOption[]): FilterOption[] => {
    if (!currentCategory || !filtersAdded[currentCategory]) return options;
    return currentOptions.filter((option) => {
      return (
        !filtersAdded[currentCategory][FilterOperators.in]?.includes(option.name) &&
        !filtersAdded[currentCategory][FilterOperators.notIn]?.includes(option.name)
      );
    });
  };

  return (
    <FilterAutocomplete
      disableCloseOnSelect={!currentCategory}
      disableClearable={!currentCategory}
      getOptionLabel={getOptionLabel}
      getOptionDisabled={(option) => getOptionDisabled({ inputValue, option, statisticalTypeSelected })}
      inputValue={inputValue}
      value={value}
      filterOptions={(filterOptions, state) => {
        const filteredOptions = filterOptions.filter(({ name, section }) => {
          if (section === FilterSectionEnum.Bounds) return true;
          return String(name).toLowerCase()?.includes(state.inputValue?.toLowerCase());
        });

        return filteredOptions;
      }}
      onInputChange={(e, changeValue, type) => {
        if (type === materialAutocompleteClearSignal) {
          setValue('');
          setCurrentCategory('');
          setIsCategory(true);
          setLabel(addFilterText);
        }
        setInputValue(changeValue);
      }}
      onChange={(_, option: FilterOption) => {
        setValue('');
        setInputValue('');
        const isSelectingCategory = !currentCategory && option;
        if (!option) return;
        if (isSelectingCategory) {
          handleCategoryClick(option);
        } else {
          handleValueClick(option);
        }
      }}
      options={getOptions(options)}
      groupBy={({ section }) => section}
    />
  );
};

export default FilterCreator;
