import { pathOr } from 'ramda';

import { formatAxis } from '@kleeen/frontend/utils';
import { generalBaseOptions } from '../generalBaseOptions';
import merge from 'lodash.merge';
import { useTextFormattersForViz } from '@kleeen/react/hooks';

const baseOptions: Highcharts.Options = merge({}, generalBaseOptions, {
  yAxis: {
    crosshair: {
      color: 'var(--primary-color)',
    },
  },
} as Highcharts.Options);

export const getOptions = (results: [], format: Record<string, unknown>, params) => {
  const type = pathOr('line', ['chart', 'type'], format);
  const colors = pathOr(['hsl(var(--viz1), .7)'], ['colors'], format);
  const title = pathOr(null, ['title', 'text'], format);
  const labels = pathOr({}, ['xAxis', 'labels'], format);
  const xAxis = pathOr<Highcharts.XAxisOptions>({}, ['xAxis'], format);
  const yAxis = pathOr<Highcharts.YAxisOptions>({}, ['yAxis'], format);
  const [formatterGroupBy, formatterGroupByForTooltip, formatterValue] = useTextFormattersForViz(params);

  const xAxisLabel =
    xAxis?.type !== 'datetime'
      ? {
          ...baseOptions.xAxis['labels'],
          ...labels,
          formatter(this) {
            return formatterGroupBy(this.value);
          },
        }
      : {
          ...baseOptions.xAxis['labels'],
          ...labels,
        };

  const xAxisValues = formatAxis(xAxis);

  return {
    ...baseOptions,
    chart: {
      ...baseOptions.chart,
      type,
    },
    title: { text: title },
    colors,
    xAxis: {
      ...baseOptions.xAxis,
      ...xAxisValues,
      labels: {
        ...xAxisLabel,
      },
    },
    yAxis: {
      ...baseOptions.yAxis,
      ...yAxis,
      labels: {
        ...baseOptions.yAxis['labels'],
        formatter(this) {
          return formatterValue(this.value);
        },
      },
    },
    series: [{ data: results }],
    tooltip: {
      ...baseOptions.tooltip,
      formatter(this) {
        return `${formatterGroupByForTooltip(this.point.category)}: ${formatterValue(this.point.y)}`;
      },
    },
  };
};
