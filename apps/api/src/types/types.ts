import {
  AccessControlPermission,
  Axis,
  EntityList,
  FilterQuery,
  GetListingDataResults,
  GetWidgetDataResult,
  ListItemBase as ListItem,
  ListingFormatItem,
  ListingItem,
  MultiTransFormationResults,
  Transformation,
  WorkflowFilter,
} from '@kleeen/types';

// Duplicated type, must unify in types library
export interface Attribute {
  aggregation?: Transformation;
  name: string;
  // TODO @carreta remove this when XORs can be aggregated [KSE3-1735]
  isXor?: boolean;
  hasMany?: boolean;
  formatType?: string;
}

export interface WorkflowFiltersResults {
  filters: WorkflowFilter[];
}

interface ActionItem {
  link?: string;
  title?: string;
  type?: string;
}

// TODO: @cafe move this and other shared types to @kleeen/types
export interface DispatchCustomActionResults {
  data: {
    actions?: ActionItem[];
    context?: any;
    customMessage?: string;
    customTitle?: string;
    functionName: string;
    success: boolean;
  };
}

export interface MultiTransFormationArgs {
  attributes?: string[];
  entity: string;
  filters: FilterQuery;
  transformations: Transformation[];
}

export interface FormatCheckResults {
  isValid: boolean;
  errors?: {
    message: string;
  }[];
}

export interface AccessControlCheckResults {
  accessLevel: AccessControlPermission;
}

export interface AuthContext {
  dataSources: Record<string, any>;
  headers: Record<string, any>;
  user: {
    email: string;
    'cognito:id': string;
  };
  token: string;
}

export {
  Axis,
  EntityList,
  GetListingDataResults,
  GetWidgetDataResult,
  ListingFormatItem,
  ListingItem,
  ListItem,
  MultiTransFormationResults,
  Transformation,
};
