import { ActionShape, NotificationActionsMenu } from '../../NotificationActionsMenu/NotificationActionsMenu';
import { SimpleAction, SimpleActionProps } from './simple-action';

export function ActionMenu({
  action,
  actions,
  taskName,
}: {
  action?: SimpleActionProps;
  actions?: ActionShape[];
  taskName?: string;
}) {
  if (actions) {
    return <NotificationActionsMenu actions={actions} taskName={taskName} />;
  }

  if (action && action.title) return <SimpleAction title={action.title} onClick={action.onClick} />;

  return null;
}
