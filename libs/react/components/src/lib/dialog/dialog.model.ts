import { Maybe, ReactElement } from '@kleeen/types';

export interface DialogProps {
  description?: Maybe<string> | ReactElement;
  open: boolean;
  onClose: () => void;
  title: string | ReactElement;
}
