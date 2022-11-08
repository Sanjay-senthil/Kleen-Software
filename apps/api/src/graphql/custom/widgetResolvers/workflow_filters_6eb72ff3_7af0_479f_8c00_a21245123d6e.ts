import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e';

//Management filters
export const workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
