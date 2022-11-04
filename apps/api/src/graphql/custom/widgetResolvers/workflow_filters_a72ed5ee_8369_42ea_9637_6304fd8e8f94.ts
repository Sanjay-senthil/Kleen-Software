import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94';

//Loan filters
export const workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
