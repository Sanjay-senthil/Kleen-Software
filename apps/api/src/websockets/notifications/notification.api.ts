import { getSocketIOServer } from '../init';

export enum NotificationTypeEnum {
  DOWNLOAD = 'download',
  NAVIGATION = 'navigation',
  RELOAD = 'reload',
}

export interface Notification {
  actions?: { title: string; link?: string | { url: string; target: string }; type: NotificationTypeEnum }[];
  message: string | { msg: string; values: { [key: string]: any } };
  success: boolean;
  taskName?: string;
  title: string | { msg: string; values: { [key: string]: any } };
}

export class NotificationApi {
  static notifyAllClients(message: Notification) {
    const io = getSocketIOServer();

    io.emit('event://notification', {
      actions: message.actions,
      customMessage: message.message,
      customTitle: message.title,
      success: message.success,
    });
  }

  static notifyUser(userId: string, message: Notification) {
    const io = getSocketIOServer();

    io?.sockets.to(userId).emit('event://notification', {
      actions: message.actions,
      customMessage: message.message,
      customTitle: message.title,
      success: message.success,
      taskName: message.taskName,
    });
  }
}
