import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5';

//Service filters
export const workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
