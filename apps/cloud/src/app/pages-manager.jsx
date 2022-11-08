import { useEffect, useState } from 'react';
import { useKleeenActions, useKleeenContext } from '@kleeen/react/hooks';

import { Authenticator } from './modules/custom/components';
import { HookableContextMenu } from '@kleeen/react/atomic-elements';
import { Layout } from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { getModules } from './modules';
import { initializeThirdParties } from './modules/custom/third-parties';

const isAuthEnabled = true;
const modulesToLoad = [
  {
    folder: require.context('./modules/generated', true, /\.jsx$/),
    modulePath: './modules/generated',
  },
  {
    folder: require.context('./modules/custom', true, /\.jsx$/),
    modulePath: './modules/custom',
    priority: 2,
  },
  {
    folder: require.context('./modules/kleeen-managed', true, /\.tsx$/),
    modulePath: './modules/kleeen-managed',
    priority: 1,
  },
];

export function PagesManager() {
  const { setCurrentUser } = useKleeenActions('endUser');
  const { currentUser } = useKleeenContext('endUser');
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function getLoadedModules() {
      const loadedModules = await getModules(modulesToLoad);

      setModules(loadedModules);
    }

    getLoadedModules();
  }, []);

  async function afterLoginSuccess({ currentAuthenticatedUser }) {
    syncUser(setCurrentUser, currentUser, currentAuthenticatedUser);
  }

  initializeThirdParties(currentUser);

  return (
    <Router>
      <Authenticator afterLoginSuccess={afterLoginSuccess} hideDefault={true} isEnabled={isAuthEnabled}>
        <RenderLayout modules={modules} />
      </Authenticator>
    </Router>
  );
}

//#region Private Members
function RenderLayout({ modules }) {
  return (
    <>
      <HookableContextMenu />
      <Layout modules={modules} />
    </>
  );
}

async function syncUser(setCurrentUser, currentUser, currentAuthenticatedUser) {
  try {
    const shouldUpdateCurrentUser = currentAuthenticatedUser?.username !== currentUser?.username;

    if (shouldUpdateCurrentUser) {
      setCurrentUser(currentAuthenticatedUser);
    }
  } catch (err) {
    console.error(err);
  }
}
//#endregion
