import { Dispatch, SetStateAction } from 'react';

import { Translate } from '@kleeen/types';

// Same as Radio - TODO: Use one shared ISelectorOption interface
export interface ICheckBoxOption {
  displayValue: string;
  label?: string;
  value?: string;
}

export interface CbOptionsPayload {
  data?: ICheckBoxOption[];
  isLoading?: boolean;
}

export interface ICheckBoxGroupProps {
  title: string;
  options: ICheckBoxOption[];
  onChange: Dispatch<SetStateAction<string>>;
  defaultSelectionValue: string;
  translate?: Translate;
}
