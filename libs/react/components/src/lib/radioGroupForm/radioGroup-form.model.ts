interface IRadioOption {
  id: string;
  value: string;
}

export interface IRadioGroupFormProps {
  control?: unknown;
  onChange: () => void;
  options: IRadioOption[];
  title: string;
  value: string;
}
