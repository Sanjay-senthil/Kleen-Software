import { AddDialog } from '@kleeen/react/atomic-elements';
import { Transformation, StatisticalDataType, WidgetTypes, ElementDisplayType } from '@kleeen/types';

export const widgets = [
  {
    actions: [
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
    ],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: false,
        id: 65143,
        isDisplayValue: true,
        label: `bank`,
        multiple: true,
        name: `bank`,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `Insurance`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: true,
        id: 65147,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of insurance`,
        multiple: true,
        name: `insurance`,
        prototypeId: 61281,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 65143,
    id: `0b79bfe3-3751-416d-afdb-56368f570184`,
    name: 'Table of Insurance',
    params: {
      baseModel: `Bank`,
      operationName: `object_listing_0b79bfe3_3751_416d_afdb_56368f570184`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-2qbYfCHfpgMcDuq28bS419',
    viewOrder: 0,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Insurance Dashboard ',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-5TVJk9vMGgETBEwHdsFZM4',
    viewOrder: 1,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `string`,
            id: 65147,
            isFilterable: { in: false, out: false },
            label: `Insurance`,
            name: `insurance`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `string`,
            id: 65153,
            isFilterable: { in: false, out: false },
            label: `Count of Loan`,
            name: `loan`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `22855164-7cc2-4b7d-8772-c90f0d54e8c4`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `insurance`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4`,
          value: {
            formatType: `string`,
            name: `loan`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Long term`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5TVJk9vMGgETBEwHdsFZM4',
      },
    ],
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Insurance Report',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-a6adDs5m1aUwZ1bZuEKYa5',
    viewOrder: 2,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfSingle,
            canAddValues: true,
            canEditValues: true,
            crossLinking: [],
            dataType: `string`,
            format: {},
            formatType: `string`,
            hasMany: false,
            id: 65143,
            isDisplayValue: true,
            label: `bank`,
            multiple: true,
            name: `bank`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfSingle,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: true,
            canEditValues: false,
            crossLinking: [],
            dataType: `Insurance`,
            deepDataType: `string`,
            format: {},
            formatType: `string`,
            hasMany: true,
            id: 65147,
            isDisplayValue: false,
            isNullable: false,
            label: `Count of insurance`,
            multiple: true,
            name: `insurance`,
            prototypeId: 61281,
            settings: {},
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
        ],
        chartType: WidgetTypes.TABLE,
        id: `a9c8448c-5ebb-41bf-983d-eadd54b1e8cf`,
        params: {
          baseModel: `Bank`,
          operationName: `object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf`,
          value: {
            format: {},
            formatType: `string`,
            name: `bank`,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Health Report`,
        viableSolutions: [],
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.CountUnique,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `string`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `string`,
            id: 65143,
            isFilterable: { in: false, out: false },
            label: `Count of Bank`,
            multiple: true,
            name: `Bank`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountUnique,
          },
          {
            aggregation: Transformation.CountUnique,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `string`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `string`,
            id: 65147,
            isFilterable: { in: false, out: false },
            label: `Count of Insurance`,
            multiple: true,
            name: `Insurance`,
            settings: {},
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountUnique,
          },
        ],
        chartType: WidgetTypes.SUMMARY,
        id: `558bc4b0-231c-430f-b842-a120f29daaae`,
        params: {
          operationName: `widget_statistics558bc4b0_231c_430f_b842_a120f29daaae`,
          value: {
            attributes: [{ name: 'Bank' }, { name: 'Insurance' }],
            label: ``,
            name: ``,
            transformations: [
              {
                transformation: Transformation.CountUnique,
                isPrimary: true,
              },
              {
                transformation: Transformation.CountUnique,
                isPrimary: false,
              },
            ],
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Vehicle Report`,
        viableSolutions: [],
      },
    ],
  },
];