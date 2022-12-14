import { FormatProps, VizParams } from '@kleeen/types';
import { pathOr } from 'ramda';

import { formatAxis } from '@kleeen/frontend/utils';
import merge from 'lodash.merge';
import { useTextFormattersForViz } from '@kleeen/react/hooks';

export const getOptions = (
  results: [],
  format: FormatProps,
  baseOptions: Highcharts.Options,
  params: VizParams,
): Highcharts.Options => {
  const type = pathOr('area', ['chart', 'type'], format);
  const title = pathOr(null, ['title', 'text'], format);
  const labels = pathOr({}, ['xAxis', 'labels'], format);
  const xAxis = pathOr<Highcharts.XAxisOptions>({}, ['xAxis'], format);
  const yAxis = pathOr<Highcharts.YAxisOptions>({}, ['yAxis'], format);
  const [formatterGroupBy, formatterGroupByForTooltip, formatterValue] = useTextFormattersForViz(params);

  const plotOptions = merge({}, baseOptions.plotOptions, {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, `hsl(var(--viz1), .04)`],
          [1, `hsl(var(--viz1), .04)`],
        ],
      },
      lineColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, `hsl(var(--viz4), 1)`],
          [1, `hsl(var(--viz2), 1)`],
        ],
      },
      lineWidth: 2,
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
      labels: {
        ...baseOptions.yAxis['labels'],
        formatter(this) {
          return formatterValue(this.value);
        },
      },
    },
    series: [{ type: 'area', data: results }],
    tooltip: {
      ...baseOptions.tooltip,
      formatter(this) {
        return `${formatterGroupByForTooltip(this.point.category)}: ${formatterValue(this.point.y)}`;
      },
    },
  };
};
