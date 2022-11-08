import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419';

//Hospital Management filters
export const workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
