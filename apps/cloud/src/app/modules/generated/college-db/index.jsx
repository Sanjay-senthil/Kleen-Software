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
  const taskName = `collegeDb`;
  const workflowData = {
    hasFilters: false,
    taskName: 'collegeDb',
    workflowId: 'f9c52111-276e-410f-b285-848c3ff5ce4f',
    entity: 'College',
  };
  const entity = `College`;
  const classes = CollectionLayoutStyle();
  const workflowName = `College DB`;
  const objectFocus = `college`;
  const collegeActions = useKleeenActions(taskName);
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
              withDateFilter: true,
              taskName,
              title: workflowName,
              subTitle: `${getRowsCountFromFirstTable(widgets, taskName)} Count of ${entity}`,
              actionsProps: {
                entityName: entity,
                actions: workflowAction,
                entityActions: collegeActions,
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
