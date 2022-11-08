import { DatePickerStateObject } from '../../date-picker-interval.model';
import { Translate } from '@kleeen/types';

export interface DateFilterButtonProps {
  datePickerState: DatePickerStateObject;
  onClick: () => void;
  translate?: Translate;
}
