import { CrossLinkingMatrix, DataAggregationArgsDataPoint, GetWidgetDataResult } from '@kleeen/types';

import { getThingByName } from '@kleeen/things';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { path } from 'ramda';

export function mapToWidget(
  rows: any[],
  options: {
    categoryPath: string[];
    crossLinkPath?: string[];
    groupBy?: DataAggregationArgsDataPoint;
    resultsPath: string[];
    value?: DataAggregationArgsDataPoint;
  },
): GetWidgetDataResult {
  const categories = rows.map((row) => path(options.categoryPath, row));
  const xAxis = getThingByName(options?.groupBy?.name)?.format;
  const yAxis = getThingByName(options?.value?.name)?.format;

  function getCrossLinking(): CrossLinkingMatrix {
    const crossLinking = rows.map((row) => ({
      id: path(options.crossLinkPath, row),
      $metadata: {
        entityType: '',
      },
    }));

    return [crossLinking];
  }

  return {
    crossLinking: Array.isArray(options.crossLinkPath) ? getCrossLinking() : [],
    format: {
      xAxis: {
        ...xAxis,
        categories,
        key: options?.groupBy?.name,
        type: 'string',
      },
      yAxis: {
        ...yAxis,
        type: 'number',
        key: options?.value?.name,
      },
    },
    results: rows.map((row) => {
      const result = path(options.resultsPath, row);

      if (typeof result == 'number') return result;

      const isResultValidForNumberCoercion = !Array.isArray(result) || !isNilOrEmpty(result);

      return isResultValidForNumberCoercion ? Number(result) : 0;
    }),
  };
}
