interface ILocalization {
  restOfResultsLabel: string;
  backTo: string;
}
interface IDeltaResults {
  y: number;
  color?: string;
  name?: string;
  drilldown?: string;
}
interface IHighChartUpdate {
  highChartUpdate: Record<string, unknown>;
}

export { ILocalization, IDeltaResults, IHighChartUpdate };
