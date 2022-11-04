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
  const taskName = `management`;
  const workflowData = {
    hasFilters: true,
    taskName: 'management',
    workflowId: '6eb72ff3-7af0-479f-8c00-a21245123d6e',
    entity: 'Management',
  };
  const entity = `Management`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Management`;
  const params = { operationName: 'workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e',
      params,
    }) || {};

  const objectFocus = `management`;
  const managementActions = useKleeenActions(taskName);
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
                entityActions: managementActions,
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
