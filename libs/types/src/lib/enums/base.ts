export enum ActionType {
  Add = 'add',
  Custom = 'custom',
  Delete = 'delete',
}

export enum Transformation {
  AlphabeticalBucket = 'alphabeticalBucket',
  AlphaTier = 'alphaTier',
  Average = 'average',
  Bucket = 'bucket',
  Change = 'change',
  ChangeCount = 'changeCount',
  ChangePercent = 'changePercent',
  CountTotal = 'countTotal',
  CountUnique = 'countUnique',
  CustomAggregation = 'customAggregation',
  CustomCount = 'customCount',
  CustomTrend = 'customTrend',
  Latest = 'latest',
  Max = 'max',
  MaxSparkline = 'maxSparkline',
  MedianMiddl = 'medianMiddl',
  Min = 'min',
  ModeFrequent = 'modeFrequent',
  NoAggregation = 'noAggregation',
  Occurrence = 'occurrence',
  Oldest = 'oldest',
  SelfMulti = 'selfMulti',
  SelfSingle = 'selfSingle',
  Sum = 'sum',
  TemporalBucket = 'temporalBucket',
  Tier = 'tier',
  TrendCountHighLowSparkline = 'trendCountHighLowSparkline',
  TrendCountSparkline = 'trendCountSparkline',
  TrendCountVsEndSparkline = 'trendCountVsEndSparkline',
  TrendCountVsStartSparkline = 'trendCountVsStartSparkline',
  TrendHighLowSparkline = 'trendHighLowSparkline',
  TrendSparkline = 'trendSparkline',
  TrendVsEndSparkline = 'trendVsEndSparkline',
  TrendVsStartSparkline = 'trendVsStartSparkline',
  Unique = 'unique',
}

export { Transformation as AggregationType };

export enum crosslinkingInteractionType {
  contextMenu = 'Context menu',
  onClick = 'On click',
}

export enum DisplayMediaType {
  Emoji = 'emoji',
  Flag = 'flag',
  Src = 'src',
  Svg = 'svg',
  Text = 'text',
}

export enum DisplayMediaKapiTypeSupported {
  City = 'city',
  Country = 'country',
  CountryCode = 'country_code',
  FirstName = 'first_name',
  FullName = 'full_name',
  Prime = 'prime',
  SeverityLevel = 'severity_level',
  String = 'string',
  Username = 'username',
}

export enum EntityAttributeNames {
  DisplayValue = 'displayValue',
}

export enum FilterTypes {
  in = 'filter-in',
  out = 'filter-out',
}

export const FilterForNumerics = [
  'Data - Numeric - Continuous',
  'Data - Numeric - Discrete',
  'Data - Numeric - NTG - Discrete',
  'Data - Numeric - NTG - Severity Ranking',
  'Data - Numeric - Percentage',
  'Data - Numeric',
];

export enum IntervalDate {
  allTime = '*',
  minute = '1,m',
  oneHours = '1,h',
  oneMonth = '1,M',
  oneWeek = '1,w',
  sixHours = '6,h',
  threeMonth = '3,M',
  twentyFourHours = '24,h',
}

export enum NavPosition {
  left = 'nav-left',
  top = 'nav-top',
}

export enum NavType {
  customUrl = 'customUrl',
  workflow = 'workflow',
}

export const SameSDTAggregations = [
  Transformation.Average,
  Transformation.Latest,
  Transformation.Max,
  Transformation.MedianMiddl,
  Transformation.Min,
  Transformation.NoAggregation,
  Transformation.Oldest,
  Transformation.SelfMulti,
  Transformation.SelfSingle,
];

export enum StatisticalDataType {
  // Parent
  Categorical = 'Data - Categorical',
  Color = 'Data - Color',
  Data = 'Data',
  Image = 'Data - Image',
  Numeric = 'Data - Numeric',

  // Categorical
  Binary = 'Data - Categorical - Binary',
  FreeForm = 'Data - Categorical - free form',
  LongRichHTML = 'Data - Categorical - free form - longRichHtml',
  Ordered = 'Data - Categorical - ordered',
  OrderedSeverityRanking = 'Data - Categorical - ordered - Severity Ranking',
  OrderedTemporalLooped = 'Data - Categorical - ordered - Temporal Looped',
  Unordered = 'Data - Categorical - unordered',
  UnorderedGeo = 'Data - Categorical - unordered - geo',

  // Numeric
  NTG = 'Data - Numeric - NTG',
  NumericContinuous = 'Data - Numeric - NTG - Continuous',
  NumericContinuousGeo = 'Data - Numeric - Geo',
  NumericDiscrete = 'Data - Numeric - NTG - Discrete',
  NumericPercentage = 'Data - Numeric - NTG - Percentage',
  NumericSeverityRanking = 'Data - Numeric - NTG - Severity Ranking',
  NumericTemporal = 'Data - Numeric - Temporal',
}

export const StatisticalTypeFilterForText = [
  StatisticalDataType.Binary,
  StatisticalDataType.Categorical,
  StatisticalDataType.FreeForm,
  StatisticalDataType.LongRichHTML,
  StatisticalDataType.Ordered,
  StatisticalDataType.OrderedSeverityRanking,
  StatisticalDataType.OrderedTemporalLooped,
  StatisticalDataType.UnorderedGeo,
];

// TODO add translation support to SelectList component to remove labels here, used in HUDs refresh control section
export const TimeIntervals = [
  { label: 'Every 15 seconds', translateKey: 'app.refreshControl.every15seconds', value: 0.25 },
  { label: 'Every 30 seconds', translateKey: 'app.refreshControl.every30seconds', value: 0.5 },
  { label: 'Every minute', translateKey: 'app.refreshControl.every1minute', value: 1 },
  { label: 'Every 5 minutes', translateKey: 'app.refreshControl.every5minutes', value: 5 },
  { label: 'Every 10 minutes', translateKey: 'app.refreshControl.every10minutes', value: 10 },
  { label: 'Every 15 minutes', translateKey: 'app.refreshControl.every15minutes', value: 15 },
  { label: 'Every 30 minutes', translateKey: 'app.refreshControl.every30minutes', value: 30 },
  { label: 'Every 60 minutes', translateKey: 'app.refreshControl.every60minutes', value: 60 },
];

export enum TimestampKey {
  format = 'MM/DD/YYYY HH:mm',
  key = '--timestamp--:',
}

export enum Variant {
  filled = 'filled',
  outlined = 'outlined',
  standard = 'standard',
}

export enum ViewType {
  config = 'configure',
  custom = 'custom',
  dashboard = 'dashboard',
  report = 'report',
  table = 'table',
}

export enum WidgetDataAttributes {
  DisplayMedia = 'displayMedia',
  DisplayValue = 'displayValue',
}

export enum CardSectionLayout {
  Masonry = 'masonry', // Dashboard grid (default)
  SingleColumn = 'single-column', // Config (not used yet)
  SingleWideColumn = 'single-wide-column', // Report
}

export enum TemporalInterval {
  Second = 'second',
  Minute = 'minute',
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year',
}
