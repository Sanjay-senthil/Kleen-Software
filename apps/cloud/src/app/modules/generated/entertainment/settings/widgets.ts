import { AddDialog } from '@kleeen/react/atomic-elements';
import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [
      {
        addModalAttributes: [
          {
            id: 65094,
            isDisplayValue: true,
            name: 'entertainment',
            label: 'Entertainment',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'entertainment',
            params: {
              baseModel: 'entertainment',
              value: { formatType: 'name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 65108,
            isDisplayValue: false,
            name: 'theater',
            label: 'Theater',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'theater',
            params: {
              baseModel: 'theater',
              value: { formatType: 'name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 65105,
            isDisplayValue: false,
            name: 'boatHouse',
            label: 'Boat House',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'boatHouse',
            params: {
              baseModel: 'boatHouse',
              value: { formatType: 'name', transformation: 'selfSingle', format: {} },
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
          {
            id: 65098,
            isDisplayValue: false,
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
            id: 65096,
            isDisplayValue: false,
            name: 'tourism',
            label: 'Tourism',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'tourism',
            params: {
              baseModel: 'tourism',
              value: { formatType: 'name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 65094,
            isDisplayValue: false,
            name: 'entertainment',
            label: 'Entertainment',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'entertainment',
            params: {
              baseModel: 'entertainment',
              value: { formatType: 'name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 65092,
            isDisplayValue: false,
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
      {
        addModalAttributes: [],
        areYouSure: true,
        displayName: `Modify`,
        name: `modify`,
        type: `custom`,
      },
      {
        addModalAttributes: [],
        areYouSure: true,
        displayName: `Notify`,
        name: `notify`,
        type: `custom`,
      },
      {
        addModalAttributes: [],
        areYouSure: true,
        displayName: `Report`,
        name: `report`,
        type: `custom`,
      },
    ],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Deprt`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: false,
        id: 65093,
        isDisplayValue: false,
        isNullable: false,
        label: `deprt`,
        multiple: true,
        name: `deprt`,
        prototypeId: 61317,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: false,
        id: 65094,
        isDisplayValue: true,
        label: `entertainment`,
        multiple: true,
        name: `entertainment`,
        prototypeId: 65093,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Services`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: false,
        id: 65098,
        isDisplayValue: false,
        isNullable: false,
        label: `services`,
        multiple: true,
        name: `services`,
        prototypeId: 61281,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Tourism`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: false,
        id: 65096,
        isDisplayValue: false,
        isNullable: false,
        label: `tourism`,
        multiple: true,
        name: `tourism`,
        prototypeId: 65093,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Games`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: true,
        id: 65106,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of games`,
        multiple: true,
        name: `games`,
        prototypeId: 65094,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Pub`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: true,
        id: 65107,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of pub`,
        multiple: true,
        name: `pub`,
        prototypeId: 65094,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Theater`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: false,
        id: 65108,
        isDisplayValue: false,
        isNullable: false,
        label: `theater`,
        multiple: true,
        name: `theater`,
        prototypeId: 65094,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `BoatHouse`,
        deepDataType: `name`,
        editable: false,
        format: {},
        formatType: `name`,
        hasMany: false,
        id: 65105,
        isDisplayValue: false,
        isNullable: false,
        label: `boat house`,
        multiple: true,
        name: `boatHouse`,
        prototypeId: 65094,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 65094,
    id: `765f387f-c23f-47b9-91a2-d7bf11537869`,
    name: 'Entertainment Table',
    params: {
      baseModel: `Entertainment`,
      operationName: `object_listing_765f387f_c23f_47b9_91a2_d7bf11537869`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-fBMQuG6wxWMgUavrFv2BMT',
    viewOrder: 0,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Entertainment',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
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
            formatType: `name`,
            id: 65109,
            isFilterable: { in: false, out: false },
            label: `Adventure`,
            name: `adventure`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65110,
            isFilterable: { in: false, out: false },
            label: `Count of Sight Seeing`,
            name: `sightSeeing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `ec77cd47-d556-40d5-8225-1a7ae0b5b01d`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `name`,
            name: `adventure`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d`,
          value: {
            formatType: `name`,
            name: `sightSeeing`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Rare Sight Seeing`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65109,
            isFilterable: { in: false, out: false },
            label: `Adventure`,
            name: `adventure`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65110,
            isFilterable: { in: false, out: false },
            label: `Count of Sight Seeing`,
            name: `sightSeeing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `2955b638-00b8-4d4f-8233-41b85184c801`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `name`,
            name: `adventure`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_2955b638_00b8_4d4f_8233_41b85184c801`,
          value: {
            formatType: `name`,
            name: `sightSeeing`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Sight Seeing Comparision`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65112,
            isFilterable: { in: false, out: false },
            label: `Mountain Climbing`,
            name: `mountainClimbing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65111,
            isFilterable: { in: false, out: false },
            label: `Count of River Surfing`,
            name: `riverSurfing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `d6044bc8-da24-4fbd-9bb8-5b479fcd0ab5`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `name`,
            name: `mountainClimbing`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5`,
          value: {
            formatType: `name`,
            name: `riverSurfing`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 2,
        title: `Rare River Surfing`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65111,
            isFilterable: { in: false, out: false },
            label: `River Surfing`,
            name: `riverSurfing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65112,
            isFilterable: { in: false, out: false },
            label: `Count of Mountain Climbing`,
            name: `mountainClimbing`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `8f597d1f-2478-4ba2-b43c-2c230172ca99`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `name`,
            name: `riverSurfing`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_8f597d1f_2478_4ba2_b43c_2c230172ca99`,
          value: {
            formatType: `name`,
            name: `mountainClimbing`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `Total Mountain Climbing`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
      },
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
            id: 65098,
            isFilterable: { in: false, out: false },
            label: `Services`,
            name: `services`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.SelfSingle,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `name`,
            id: 65096,
            isFilterable: { in: false, out: false },
            label: `Tourism`,
            name: `tourism`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfSingle,
          },
        ],
        chartType: WidgetTypes.SIMPLE_LIST,
        id: `f166f0f6-3747-4fd0-8440-823ec9798a18`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `services`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_f166f0f6_3747_4fd0_8440_823ec9798a18`,
          value: {
            formatType: `name`,
            name: `tourism`,
            transformation: Transformation.SelfSingle,
          },
        },
        scope: undefined,
        sortOrder: 4,
        title: `Tourism List`,
        viableSolutions: [],
        viewId: 'ks-view-a2nnt1fYcvBJnR222bNoj9',
      },
    ],
  },
];