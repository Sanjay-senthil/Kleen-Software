import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 65092,
        isDisplayValue: true,
        name: 'management',
        label: 'Management',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'management',
        params: {
          baseModel: 'management',
          value: { formatType: 'owner', transformation: 'selfSingle', format: {} },
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
