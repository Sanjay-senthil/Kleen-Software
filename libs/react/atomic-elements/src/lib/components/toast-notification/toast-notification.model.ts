import { ActionShape } from '../NotificationActionsMenu/NotificationActionsMenu';
import { Key } from 'react';
import { SimpleActionProps } from './components/simple-action';

export interface MessageShape {
  action?: SimpleActionProps;
  actions?: ActionShape[];
  functionName: string;
  message?: string | { msg: string; values: { [key: string]: any } };
  taskName?: string;
  title?: string | { msg: string; values: { [key: string]: any } };
  variant: 'success' | 'error';
}

export interface ToastNotificationProps {
  id: Key;
  message: MessageShape;
}
