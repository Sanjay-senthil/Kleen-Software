import { MultiTransFormationResults, Transformation } from '@kleeen/types';

import { getThingByName } from '@kleeen/things';
import { pathOr } from 'ramda';

export function mapToSummaryStatistics(
  rows: any[],
  {
    attributes,
    resultsPath,
    transformations,
  }: {
    attributes: string[];
    resultsPath: string[];
    transformations: Transformation[];
  },
): MultiTransFormationResults[] {
  const [firstRow] = rows || []; // in this case we only care about first row because there is only one record

  return attributes.map((attribute, index) => {
    const format = getThingByName(attribute)?.format as any;
    const results = pathOr(null, resultsPath, firstRow);
    const transformation = transformations[index] || Transformation.CountTotal;

    return {
      crossLinking: [], // TODO: Add support for cross-link in SummaryStatistics widgets
      format,
      results,
      transformation,
    };
  });
}
