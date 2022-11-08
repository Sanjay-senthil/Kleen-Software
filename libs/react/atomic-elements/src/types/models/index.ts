import { CrossLinking, FormatProps, ResultsProps } from '@kleeen/types';

export interface ContextProps {
  data: DataProps;
  error: string;
  isLoading: boolean;
}

export interface DataProps extends ResultsProps {
  crossLinking: CrossLinking[] | CrossLinking;
  format: FormatProps;
}

export interface XAxisOptions extends Highcharts.XAxisOptions {
  categories?: [string];
  key?: string;
  valueLabels?: { label: string; value: number }[];
}

export interface YAxisOptions extends Highcharts.YAxisOptions {
  categories?: [string];
  key?: string;
  valueLabels?: { label: string; value: number }[];
}
