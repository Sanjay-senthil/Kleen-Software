import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useFilterContext } from '@kleeen/react/hooks';
import { ReportLayoutStyle, HeaderAndSubSections, ViewsManager } from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `employeeDb`;
  const workflowData = {
    hasFilters: false,
    taskName: 'employeeDb',
    workflowId: '4e7c92bc-33b5-436b-a43d-ac156fd33d91',
  };
  const classes = ReportLayoutStyle();
  const workflowName = `Employee DB`;

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.dashboardTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={HeaderAndSubSections}
            subHeaderProps={{
              translate,
              taskName,
              title: workflowName,
              actionsProps: {
                attributes: [],
              },
            }}
            containerClasses={`${classes.dashboardArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
