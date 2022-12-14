import { VizParams } from '@kleeen/types';
import { formatAxis } from '@kleeen/frontend/utils';
import merge from 'lodash.merge';
import { pathOr } from 'ramda';
import { useTextFormattersForViz } from '@kleeen/react/hooks';

export const getOptions = (
  results: [],
  format: Record<string, unknown>,
  baseOptions: Highcharts.Options,
  params: VizParams,
) => {
  const type = pathOr('area', ['chart', 'type'], format);
  const title = pathOr(null, ['title', 'text'], format);
  const labels = pathOr({}, ['xAxis', 'labels'], format);
  const xAxis = pathOr<Highcharts.XAxisOptions>({ type: undefined }, ['xAxis'], format);
  const yAxis = pathOr<Highcharts.YAxisOptions>({}, ['yAxis'], format);
  const [formatterGroupBy, formatterGroupByForTooltip, formatterValue] = useTextFormattersForViz(params);

  const plotOptions = merge({}, baseOptions.plotOptions, {
    area: {
      lineWidth: 2,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, `hsl(var(--viz1), .7)`],
          [1, `hsl(var(--viz1), 0)`],
        ],
      },
      marker: {
        radius: 2,
      },
      threshold: null,
    },
  });

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
    plotOptions: {
      ...plotOptions,
    },
    colors: ['hsl(var(--viz1), .7)'],
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
      ceiling: Math.max(...results),
      labels: {
        ...baseOptions.yAxis['labels'],
        formatter(this) {
          return formatterValue(this.value);
        },
      },
    },
    series: [{ data: results, step: 'center' }],
    tooltip: {
      ...baseOptions.tooltip,
      formatter(this) {
        return `${formatterGroupByForTooltip(this.point.category)}: ${formatterValue(this.point.y)}`;
      },
    },
  };
};
