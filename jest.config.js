const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/api',
    '<rootDir>/apps/cloud',
    '<rootDir>/libs/auth',
    '<rootDir>/libs/backend/utils',
    '<rootDir>/libs/common/utils',
    '<rootDir>/libs/elements',
    '<rootDir>/libs/end-product/frontend/things',
    '<rootDir>/libs/end-product/mapper',
    '<rootDir>/libs/end-product/utils',
    '<rootDir>/libs/environment',
    '<rootDir>/libs/frontend/utils',
    '<rootDir>/libs/i18n',
    '<rootDir>/libs/investigations',
    '<rootDir>/libs/react/atomic-elements',
    '<rootDir>/libs/react/components',
    '<rootDir>/libs/react/hooks',
    '<rootDir>/libs/react/state-management',
    '<rootDir>/libs/render-utils',
    '<rootDir>/libs/testing/front-end',
    '<rootDir>/libs/things',
    '<rootDir>/libs/types',
    '<rootDir>/libs/widgets',
  ],
};
