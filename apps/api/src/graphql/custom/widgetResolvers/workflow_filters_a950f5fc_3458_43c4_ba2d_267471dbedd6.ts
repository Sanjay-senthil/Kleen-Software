import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6';

//Insurance filters
export const workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
