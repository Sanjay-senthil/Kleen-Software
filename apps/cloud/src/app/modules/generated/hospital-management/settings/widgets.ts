import { AddDialog } from '@kleeen/react/atomic-elements';
import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [
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
        id: 65117,
        isDisplayValue: true,
        label: `maintenance`,
        multiple: true,
        name: `maintenance`,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `DoctorsDetails`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: true,
        id: 65118,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of doctors details`,
        multiple: true,
        name: `doctorsDetails`,
        prototypeId: 65117,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.SelfMulti,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `Medicines`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: true,
        id: 65135,
        isDisplayValue: false,
        isNullable: false,
        label: `medicines`,
        multiple: true,
        name: `medicines`,
        prototypeId: 65117,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfMulti,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `PatientDetails`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: true,
        id: 65119,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of patient details`,
        multiple: true,
        name: `patientDetails`,
        prototypeId: 65117,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.SelfMulti,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `HospitalDpt`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `string`,
        hasMany: true,
        id: 65122,
        isDisplayValue: false,
        isNullable: false,
        label: `hospital dpt`,
        multiple: true,
        name: `hospitalDpt`,
        prototypeId: 65117,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfMulti,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 65117,
    id: `b5efe6df-f7b8-46eb-9c5c-a5f692ed56fb`,
    name: 'Hospital Maintenance ',
    params: {
      baseModel: `Maintenance`,
      operationName: `object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-ot3SxhVNE1ENZ475X9t5pv',
    viewOrder: 0,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Dashboard 1',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65125,
            isFilterable: { in: false, out: false },
            label: `Blood Check Up`,
            name: `bloodCheckUp`,
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
            id: 65123,
            isFilterable: { in: false, out: false },
            label: `Count of Blood Types`,
            name: `bloodTypes`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `74a505f3-8cd6-49cb-81cd-3c88cfd26711`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `bloodCheckUp`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711`,
          value: {
            formatType: `string`,
            name: `bloodTypes`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Blood Bank`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65126,
            isFilterable: { in: false, out: false },
            label: `General Doctors`,
            name: `generalDoctors`,
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
            id: 65127,
            isFilterable: { in: false, out: false },
            label: `Count of Surgery Doctors`,
            name: `surgeryDoctors`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `e60c1092-8cba-4ba6-8a09-332660264c13`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `generalDoctors`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_e60c1092_8cba_4ba6_8a09_332660264c13`,
          value: {
            formatType: `string`,
            name: `surgeryDoctors`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Doctors info`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65139,
            isFilterable: { in: false, out: false },
            label: `General Treatment`,
            name: `generalTreatment`,
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
            id: 65138,
            isFilterable: { in: false, out: false },
            label: `Count of RCT`,
            name: `rct`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `7af0c100-c352-463e-9633-0a0447cec0f7`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `generalTreatment`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_7af0c100_c352_463e_9633_0a0447cec0f7`,
          value: {
            formatType: `string`,
            name: `rct`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 2,
        title: `Dental `,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65141,
            isFilterable: { in: false, out: false },
            label: `General Checkup`,
            name: `generalCheckup`,
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
            id: 65140,
            isFilterable: { in: false, out: false },
            label: `Count of Throat Checkup`,
            name: `throatCheckup`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.COLUMN_BAR,
        id: `c0edd327-8041-4e8a-b108-7bbf9debdb78`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `generalCheckup`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_c0edd327_8041_4e8a_b108_7bbf9debdb78`,
          value: {
            formatType: `string`,
            name: `throatCheckup`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `ENT`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65137,
            isFilterable: { in: false, out: false },
            label: `Ayurvedic`,
            name: `ayurvedic`,
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
            id: 65136,
            isFilterable: { in: false, out: false },
            label: `Count of Allopathic`,
            name: `allopathic`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `bbf06c05-21ab-4f6e-8f5a-b13a18bc722d`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `ayurvedic`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d`,
          value: {
            formatType: `string`,
            name: `allopathic`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 4,
        title: `Medicines`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65126,
            isFilterable: { in: false, out: false },
            label: `General Doctors`,
            name: `generalDoctors`,
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
            id: 65127,
            isFilterable: { in: false, out: false },
            label: `Count of Surgery Doctors`,
            name: `surgeryDoctors`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `097af69f-2455-4993-b0e5-62cb4f50c50e`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `generalDoctors`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_097af69f_2455_4993_b0e5_62cb4f50c50e`,
          value: {
            formatType: `string`,
            name: `surgeryDoctors`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 5,
        title: `Doctors Info`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
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
            id: 65134,
            isFilterable: { in: false, out: false },
            label: `Patients Info`,
            name: `patientsInfo`,
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
            id: 65133,
            isFilterable: { in: false, out: false },
            label: `Count of Doctor Info`,
            name: `doctorInfo`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `3865655c-a83f-4848-b963-21942f33b3d2`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `patientsInfo`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_3865655c_a83f_4848_b963_21942f33b3d2`,
          value: {
            formatType: `string`,
            name: `doctorInfo`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 6,
        title: `Surgery Details`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-5Ppr7eJ5LAACcLtQ5xHZhP',
      },
    ],
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Report 1',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-gcp8Hkoz7kQfGPLZopLX92',
    viewOrder: 3,
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
            id: 65136,
            isFilterable: { in: false, out: false },
            label: `Allopathic`,
            name: `allopathic`,
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
            id: 65137,
            isFilterable: { in: false, out: false },
            label: `Count of Ayurvedic`,
            name: `ayurvedic`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `04315240-b0ab-4990-8bfe-a10b3d05f98a`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `string`,
            name: `allopathic`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_04315240_b0ab_4990_8bfe_a10b3d05f98a`,
          value: {
            formatType: `string`,
            name: `ayurvedic`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Medicine Report`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-gcp8Hkoz7kQfGPLZopLX92',
      },
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
            id: 65117,
            isDisplayValue: true,
            label: `maintenance`,
            multiple: true,
            name: `maintenance`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfSingle,
          },
        ],
        chartType: WidgetTypes.TABLE,
        id: `14af3bf8-c910-4b7d-a69f-e5c13bd6f260`,
        params: {
          baseModel: `Maintenance`,
          operationName: `object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260`,
          value: {
            format: {},
            formatType: `string`,
            name: `maintenance`,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Maintenance Report`,
        viableSolutions: [],
      },
    ],
  },
];
