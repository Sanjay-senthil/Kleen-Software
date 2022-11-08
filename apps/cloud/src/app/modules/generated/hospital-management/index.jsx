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
  const taskName = `hospitalManagement`;
  const workflowData = {
    hasFilters: true,
    taskName: 'hospitalManagement',
    workflowId: '7ec384bc-2a69-4cd2-baff-8066e14d7419',
    entity: 'Maintenance',
  };
  const entity = `Maintenance`;
  const classes = CollectionLayoutStyle();
  const workflowName = `Hospital Management`;
  const params = { operationName: 'workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419',
      params,
    }) || {};

  const objectFocus = `maintenance`;
  const maintenanceActions = useKleeenActions(taskName);
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
                entityActions: maintenanceActions,
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
