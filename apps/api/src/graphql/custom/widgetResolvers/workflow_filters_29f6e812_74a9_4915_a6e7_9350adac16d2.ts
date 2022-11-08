import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2';

//Vehicle Inventory filters
export const workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
