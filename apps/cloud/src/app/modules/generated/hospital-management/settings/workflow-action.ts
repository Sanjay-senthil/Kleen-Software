import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 65117,
        isDisplayValue: true,
        name: 'maintenance',
        label: 'Maintenance',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'maintenance',
        params: {
          baseModel: 'maintenance',
          value: { formatType: 'string', transformation: 'selfSingle', format: {} },
        },
      },
    ],
    areYouSure: false,
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
