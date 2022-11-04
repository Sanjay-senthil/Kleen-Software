import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 65143,
        isDisplayValue: true,
        name: 'bank',
        label: 'Bank',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'bank',
        params: {
          baseModel: 'bank',
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
