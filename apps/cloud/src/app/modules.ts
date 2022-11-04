interface Module {
  component: JSX.Element;
  path: string;
  priority?: number;
}

interface ModuleToLoad {
  folder: { [key: string]: any };
  modulePath: string;
  priority?: number;
}

export async function getModules(
  modulesToLoad: ModuleToLoad[],
  modulesToIgnore: string[] = [],
): Promise<Module[]> {
  const modulesLoaded = await Promise.all(
    modulesToLoad.map(async ({ folder, modulePath, priority = 0 }): Promise<Module[]> => {
      const resolvedModules: Module[] = await Promise.all(
        folder
          .keys()
          .map((moduleRoute: string) => moduleRoute.substr(1))
          .filter((moduleRoute: string) => {
            const [, moduleName] = moduleRoute.split('/');

            return !modulesToIgnore.includes(moduleName);
          })
          .map(async (moduleRoute: string) => {
            const { default: component } = await import(`${modulePath}${moduleRoute}`);
            const parsedModuleRoute = systemRouteToUrlRoute(moduleRoute);

            return { component, path: parsedModuleRoute, priority } as Module;
          }),
      );
      return resolvedModules;
    }),
  );

  const initialValue: Module[] = [];
  const modules: Module[] = modulesLoaded.reduce(
    (acc: Module[], ac: Module[]): Module[] => [...acc, ...ac],
    initialValue,
  );
  return modules;
}

//#region Private members
function systemRouteToUrlRoute(route: string): string {
  return route.replace('.jsx', '').replace('.tsx', '').replace('/index', '');
}
//#endregion
