import {
  Bucket,
  CrossLinking,
  CrossLinkingMatrix,
  DisplayValue,
  Transformation,
  UpdateDataStrategy,
} from '@kleeen/types';

/**
 * Enumerations
 */

export enum MapFunctionType {
  ToDisplayValue = 'toDisplayValue',
  ToChipsValue = 'toChipsValue',
  ToIdValue = 'toIdValue',
}

/**
 * Interfaces
 */

export interface Axis {
  categories?: string[] | ListItemBase[];
  key?: string;
  type?: string;
}

export interface ColumnMap {
  handler?: MapFunctionType;
  idPath?: string;
  key: string;
  path: string;
  showDisplayMedia?: boolean;
}

export interface Entity {
  name: string;
  properties: { [property: string]: { statisticalType: string } };
}

export interface EntityList {
  [key: string]: ListingItem | ListingItem[];
}

export interface DataAggregationArgsDataPoint {
  bucket?: Bucket;
  name: string;
  transformation?: Transformation;
  transformations?: Transformation[];
}

export interface GetListingDataResults {
  data: EntityList[];
  format: { [key: string]: ListingFormatItem };
  latestRequestTimestamp?: number;
  pagination?: { totalCount: number };
  strategy?: UpdateDataStrategy;
}

export interface GetWidgetDataResult {
  crossLinking?: CrossLinkingMatrix;
  format: {
    xAxis?: Axis;
    yAxis?: Axis;
  };
  results: number[] | number[][];
}

export interface ListingFormatItem {
  aggregations?: null;
  examples?: null;
  max?: null;
  min?: null;
  prefix?: null;
  severityBad?: null;
  severityGood?: null;
  severityLevels?: null;
  suffix?: null;
}

export interface ListingItem {
  displayValue: DisplayValue;
  id?: string;
}

export interface MultiTransFormationResults {
  crossLinking?: CrossLinking[];
  format: {
    xAxis?: Axis;
    yAxis?: Axis;
  };
  results: number | number[] | number[][];
  transformation: Transformation;
}

export interface TransformationArgs extends Pick<ColumnMap, 'idPath' | 'key' | 'path' | 'showDisplayMedia'> {
  row: any;
}

/**
 * Types
 */

export type ListItemBase = number | string | boolean | undefined;
