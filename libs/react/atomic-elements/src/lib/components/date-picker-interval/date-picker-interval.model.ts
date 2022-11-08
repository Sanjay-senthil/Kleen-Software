import { Dispatch, SetStateAction } from 'react';
import { Maybe, Translate } from '@kleeen/types';

import { Moment } from 'moment';

export type DateProps = Moment;

export interface DatePickerProps {
  from: DateProps;
  relativeDate: string;
  to: DateProps;
}

export interface DatePickerStateObject extends DatePickerProps {
  setFrom: Dispatch<SetStateAction<Maybe<DateProps>>>;
  setRelativeDate: Dispatch<SetStateAction<Maybe<string>>>;
  setTo: Dispatch<SetStateAction<Maybe<DateProps>>>;
}

export interface DatePickerIntervalProps {
  className?: string;
  datePickerState: DatePickerStateObject;
  handleFilter?: () => void;
  isOpen?: boolean;
  isSetOpen?: Dispatch<SetStateAction<boolean>>;
  translate?: Translate;
}
