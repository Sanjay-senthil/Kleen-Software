import { IntervalDate, Translate } from '@kleeen/types';

import { DatePickerStateObject } from '../../date-picker-interval.model';

export interface RelativeTimePickerProps {
  datePickerState: DatePickerStateObject;
  handleCloseDateFilter: () => void;
  handleFilter?: () => void;
  handleOpenCustomRange: () => void;
  setRelativeDate: (intervalDate: IntervalDate) => void;
  translate: Translate;
}
