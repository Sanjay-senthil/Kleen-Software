import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 65098,
        isDisplayValue: true,
        name: 'services',
        label: 'Services',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'services',
        params: {
          baseModel: 'services',
          value: { formatType: 'string', transformation: 'selfSingle', format: {} },
        },
      },
      {
        id: 65100,
        isDisplayValue: false,
        name: 'roomServices',
        label: 'Room Services',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'roomServices',
        params: {
          baseModel: 'roomServices',
          value: { formatType: 'string', transformation: 'selfSingle', format: {} },
        },
      },
      {
        id: 65099,
        isDisplayValue: false,
        name: 'foodServices',
        label: 'Food Services',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'foodServices',
        params: {
          baseModel: 'foodServices',
          value: { formatType: 'string', transformation: 'selfSingle', format: {} },
        },
      },
      {
        id: 65093,
        isDisplayValue: false,
        name: 'deprt',
        label: 'Deprt',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'deprt',
        params: {
          baseModel: 'deprt',
          value: { formatType: 'name', transformation: 'selfSingle', format: {} },
        },
      },
    ],
    areYouSure: true,
    component: AddDialog,
    displayName: `Add`,
    name: `add`,
    type: `add`,
  },
  {
    addModalAttributes: [],
    areYouSure: false,
    displayName: `Delete`,
    name: `_delete_`,
    type: `delete`,
  },
];
