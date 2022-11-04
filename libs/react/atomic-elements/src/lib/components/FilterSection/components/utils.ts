import { isNilOrEmpty } from '@kleeen/common/utils';
import { StatisticalDataType, StatisticalTypeFilterForText } from '@kleeen/types';
import { FilterOption, FilterSectionEnum } from '../FilterSection.model';

export interface OptionDisabledProps {
  option: FilterOption;
  inputValue: string;
  statisticalTypeSelected: string;
}

export const getOptionDisabled = (props: OptionDisabledProps): boolean => {
  const { option, inputValue, statisticalTypeSelected } = props;
  const { section } = option;
  if (
    section === FilterSectionEnum.Bounds &&
    StatisticalTypeFilterForText.includes(statisticalTypeSelected as StatisticalDataType) &&
    !isNilOrEmpty(inputValue)
  ) {
    return false;
  }
  return section === FilterSectionEnum.Bounds && isNaN(parseInt(inputValue));
};
