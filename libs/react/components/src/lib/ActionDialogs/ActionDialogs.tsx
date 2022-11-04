import { MouseEvent, ReactElement } from 'react';

import { ActionDialogsProps } from './ActionDialogs.model';
import { ActionType } from '@kleeen/types';
import { AddDialogPayload } from '../dialog/components/add-dialog/add-dialog.model';
import { ConfirmationActionDialog } from './components/ConfirmationDialog/ConfirmationDialog';
import CustomDialogComponent from './custom-action-dialog';
import { KUIConnect } from '@kleeen/core-react';

function ActionDialogsComponent(props: ActionDialogsProps): ReactElement {
  const { action } = props;
  const { component: CustomDialogComponentName, type } = action;
  const isCustomDeleteAction = CustomDialogComponentName && type === ActionType.Delete;

  return (
    <>
      <ConfirmationAction {...props} />
      <DialogComponent {...props} />
      {
        // Add handler for Custom Delete dialog here
        isCustomDeleteAction && <></>
      }
      <CustomDialog {...props} />
    </>
  );
}

function ConfirmationAction({
  action,
  dispatchAction,
  entity,
  isConfirmationOpen,
  onIsConfirmationOpenChange,
  translate,
}: ActionDialogsProps): ReactElement {
  const { areYouSure } = action;

  function handleConfirmationClose(): void {
    onIsConfirmationOpenChange(action);
  }

  if (!areYouSure) return null;

  return (
    <ConfirmationActionDialog
      description={
        entity
          ? `${translate && translate('app.dialog.confirmation')} ${translate(
              'app.modal.action.addNew',
            )} ${entity}?`
          : `${translate && translate('app.dialog.confirmation')} ${action.displayName}?`
      }
      key={`${action.name}-confirmation`}
      open={isConfirmationOpen || false}
      onAction={(e: MouseEvent) => dispatchAction(action, e)}
      onClose={handleConfirmationClose}
      title={entity ? `${translate && translate('app.modal.action.addNew')} ${entity}` : action.displayName}
    />
  );
}

function DialogComponent({
  action,
  attributes,
  context,
  dispatchAction,
  entity,
  isCustomOpen,
  onIsCustomOpenChange,
  parent,
  taskName,
  translate,
}: ActionDialogsProps): ReactElement {
  const { component: CustomDialogComponentName, type } = action;

  const isCustomAddAction = CustomDialogComponentName && type === ActionType.Add;
  const isAddActionWithCustomModal = isCustomAddAction && typeof CustomDialogComponentName === 'string';
  const AddDialogComponent = isAddActionWithCustomModal ? CustomDialogComponent : CustomDialogComponentName;

  function handleCustomClose(): void {
    onIsCustomOpenChange(action);
  }

  if (!(isCustomAddAction && CustomDialogComponentName)) return null;

  return (
    <AddDialogComponent
      attributes={attributes}
      component={CustomDialogComponentName}
      action={action}
      context={context}
      description={`${translate && translate('app.dialog.confirmation')} ${action.displayName}?`}
      key={`${action.name}-custom`}
      open={isCustomOpen || false}
      onAction={(e: MouseEvent, payload: AddDialogPayload) => {
        dispatchAction({ action, e, payload });
      }}
      onClose={handleCustomClose}
      parent={parent}
      taskName={taskName}
      title={
        entity
          ? `${translate && translate('app.modal.action.addNew')} ${entity}`
          : translate && translate('app.modal.action.addNew')
      }
    />
  );
}

function CustomDialog({
  action,
  context,
  dispatchAction,
  isCustomOpen,
  onIsCustomOpenChange,
}: ActionDialogsProps): ReactElement {
  function handleCustomClose(): void {
    onIsCustomOpenChange(action);
  }

  const { component: CustomDialogComponentName, type } = action;

  const isCustomAction = CustomDialogComponentName && type === ActionType.Custom;
  if (!(isCustomAction && CustomDialogComponentName)) return null;
  return (
    <CustomDialogComponent
      context={context}
      description={action.description}
      key={`${action.name}-custom`}
      open={isCustomOpen || false}
      onAction={(e: MouseEvent) => dispatchAction(action, e)}
      onClose={handleCustomClose}
      component={CustomDialogComponentName as string}
      title={action.displayName}
    />
  );
}

export const ActionDialogs = KUIConnect(({ translate }) => ({ translate }))(ActionDialogsComponent);
