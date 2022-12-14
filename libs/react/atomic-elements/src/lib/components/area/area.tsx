import React, { useEffect, useState } from 'react';
import { clone, path, pathOr } from 'ramda';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Loader } from '@kleeen/react/components';
import { VisualizationWidgetProps } from '@kleeen/types';
import { generalBaseOptions } from '../generalBaseOptions';
import { getOptions } from './options';
import { isValidArray } from '@kleeen/common/utils';
import merge from 'lodash.merge';

const baseOptions: Highcharts.Options = merge({}, generalBaseOptions, {
  yAxis: {
    crosshair: {
      color: 'var(--primary-color)',
    },
  },
} as Highcharts.Options);

function KsAreaBase({ context, params, ...props }: VisualizationWidgetProps & HighchartsReact.Props) {
  const results = pathOr<[]>([], ['results'], context.data);
  const format = pathOr({}, ['format'], context.data);

  const yAxis = pathOr<Highcharts.YAxisOptions>({}, ['yAxis'], format);
  const containerProps = pathOr({}, ['containerProps'], props);

  const options = getOptions(results, format, baseOptions, params);

  const containerSettings = { ...containerProps, style: { height: '100%', width: '100%' } };
  const [chartOptions, setChartOptions] = useState(null);
  useEffect(() => {
    if (isValidArray(results)) {
      const optionsForAreaChart: Highcharts.Options = merge({}, options, {
        yAxis: {
          type: yAxis.type,
          ceiling: Math.max(...results),
        },
        series: [{ data: results }],
      } as Highcharts.Options);
      setChartOptions(optionsForAreaChart);
      return () => {
        setChartOptions(null);
      };
    }
  }, [results]);

  if (context.isLoading) {
    return <Loader />;
  }

  return chartOptions !== null ? (
    <HighchartsReact
      highcharts={Highcharts}
      options={clone(chartOptions)}
      {...props}
      containerProps={containerSettings}
    />
  ) : null;
}

export const KsArea = React.memo(KsAreaBase);
