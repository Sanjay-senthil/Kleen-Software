// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import { preprocessTypescript } from '@nrwl/cypress/plugins/preprocessor';

module.exports = (on: (key: string, callback: any) => void, config: Record<string, any>) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
