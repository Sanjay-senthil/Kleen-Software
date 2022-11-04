import { ManagerOptions, Socket, SocketOptions, io } from 'socket.io-client';
import { createContext, useContext, useEffect, useMemo } from 'react';

import { ReactElement } from '@kleeen/types';
import { environment } from '@kleeen/environment';
import { useAutoRefresh } from './useAutoRefresh';
import { useKleeenActions } from './useKleeenActions';
import { useKleeenContext } from './useKleeenContext';
import { v4 as uuidv4 } from 'uuid';

interface WebSocketContext {
  socket?: Socket;
}

const { middlewareAPI: WS_BASE, socketOptions } = environment.settings;

// Here are the socket configuration, in case persistent calls are needed the value of autoConnect must be true
const WS_OPTIONS: Partial<ManagerOptions & SocketOptions> = socketOptions || {
  autoConnect: false,
};

const WebSocketContext = createContext<WebSocketContext>({});

let socket: Socket;

export function useWebSocket() {
  const context = useContext<WebSocketContext>(WebSocketContext);

  if (!context) {
    throw new Error('This hook cannot be consumed outside "WebSocketProvider" component');
  }

  return context;
}

interface WebSocketProviderProps {
  children: ReactElement;
}

export function WebSocketProvider({ children }: WebSocketProviderProps) {
  const { autoRefreshSource } = useAutoRefresh();
  const { addNotification } = useKleeenActions('ksNotifications');
  const { currentUser } = useKleeenContext('endUser');

  useEffect(() => {
    if (!socket) {
      socket = io(WS_BASE, WS_OPTIONS);

      socket.on('event://notification', (msg) => {
        addNotification({
          key: uuidv4(),
          notification: {
            message: {
              'data-testid': msg?.success ? 'success-notification' : 'error-notification',
              actions: msg?.actions,
              message: msg?.customMessage,
              taskName: msg?.taskName,
              title: msg?.customTitle,
              variant: msg?.success ? 'success' : 'error',
            },
            options: {
              key: uuidv4(),
              persist: true,
            },
          },
        });
      });

      socket.on('event://auto-refresh', (msg: string | string[]) => {
        autoRefreshSource.next(msg);
      });
    }

    return () => {
      socket.emit('event://user-disconnected', currentUser?.username);
    };
  }, []);

  useEffect(() => {
    if (socket && currentUser?.username) {
      socket.emit('event://user-connected', currentUser?.username);
    }
  }, [socket, currentUser?.username]);

  const webSocketValue = useMemo(
    () => ({
      socket,
    }),
    [socket],
  );

  return <WebSocketContext.Provider value={webSocketValue}>{children}</WebSocketContext.Provider>;
}
