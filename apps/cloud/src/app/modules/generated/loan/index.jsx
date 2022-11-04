import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useFilterContext, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import {
  CollectionLayoutStyle,
  HeaderAndSubSections,
  ViewsManager,
  getRowsCountFromFirstTable,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `loan`;
  const workflowData = {
    hasFilters: true,
    taskName: 'loan',
    workflowId: 'a72ed5ee-8369-42ea-9637-6304fd8e8f94',
    entity: 'Bank',
  };
  const entity = `Bank`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Loan`;
  const params = { operationName: 'workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94',
      params,
    }) || {};

  const objectFocus = `bank`;
  const bankActions = useKleeenActions(taskName);
  const { paramsBasedOnRoute } = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={HeaderAndSubSections}
            subHeaderProps={{
              objectValue: objectFocus,
              parent: currentEntity,
              translate,
              taskName,
              title: workflowName,
              subTitle: `${getRowsCountFromFirstTable(widgets, taskName)} Count of ${entity}`,
              withFilterSection: true,
              filters: data?.filters,
              actionsProps: {
                entityName: entity,
                actions: workflowAction,
                entityActions: bankActions,
                attributes: [],
              },
            }}
            containerClasses={`${classes.entityBrowserArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
