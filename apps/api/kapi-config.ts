import { InputConfig } from '@kleeen/kleeen-api';

export const config: InputConfig = {
  apiPort: 3000,
  apiPortWS: 3001,
  basePath: process.env.BASE_PATH || 'apps/api/src/assets/',
  dbPath: 'apps/api/temp/',
  isFlexibleFind: true,
  isInMemory: false,
  isSkeletonInMemory: true,
  routesPath: 'apps/api/src/custom-routes',
};
