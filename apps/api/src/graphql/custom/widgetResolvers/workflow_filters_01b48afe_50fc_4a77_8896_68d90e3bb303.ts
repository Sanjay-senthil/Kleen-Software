import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303';

//Entertainment filters
export const workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
