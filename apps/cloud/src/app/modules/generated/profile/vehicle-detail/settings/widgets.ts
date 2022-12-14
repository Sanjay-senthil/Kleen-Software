import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Vehicle Dashboard',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-7nqDsVabZPnph9GJYiFL3R',
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
            format: {
              examples: [
                'Flat Tire',
                'Broken Glass',
                'Oil Change',
                'Regular Service Interval',
                'Batttery',
                'Exterior Damage',
                'Engine Noise',
                'Suspension',
                'Brakes',
                'Electrical',
                'Interior',
                'Air Conditioning',
                'Navigation',
                'Error Code',
                'Emissions',
                'Inspection',
                'Accident Repair',
                'Transmission',
                'Performance',
                'Detailing',
              ],
            },
            formatType: `prime`,
            id: 61641,
            isFilterable: { in: false, out: false },
            label: `Service Description`,
            name: `serviceDescription`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { min: 1, max: 100, prefix: '$', suffix: 'k', examples: [] },
            formatType: `USD`,
            id: 61645,
            isFilterable: { in: false, out: false },
            label: `Count of Service Cost`,
            name: `serviceCost`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX,
        id: `1bf5e483-aee0-4d3a-8d38-8447c96ba57f`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `serviceDescription`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f`,
          value: {
            formatType: `USD`,
            name: `serviceCost`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Service Cost`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-7nqDsVabZPnph9GJYiFL3R',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            formatType: `timestamp`,
            id: 61400,
            isFilterable: { in: false, out: false },
            label: `Timestamp`,
            name: `timestamp`,
            statisticalType: StatisticalDataType.NumericTemporal,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.ChangePercent,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { max: 189000, examples: [] },
            formatType: `integer`,
            id: 61647,
            isFilterable: { in: false, out: false },
            label: `Change of Current Mileage`,
            name: `currentMileage`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.ChangePercent,
          },
        ],
        chartType: WidgetTypes.AREA_TREND,
        id: `b92f69e9-2e6a-42fe-b640-4660be090e68`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `timestamp`,
            name: `timestamp`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_b92f69e9_2e6a_42fe_b640_4660be090e68`,
          value: {
            formatType: `integer`,
            name: `currentMileage`,
            transformation: Transformation.ChangePercent,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Mileage Trend Compared to Downtime`,
        viableSolutions: [],
        viewId: 'ks-view-7nqDsVabZPnph9GJYiFL3R',
      },
    ],
  },
  {
    actions: [],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `ServiceDescription`,
        deepDataType: `string`,
        editable: false,
        format: {
          examples: [
            'Flat Tire',
            'Broken Glass',
            'Oil Change',
            'Regular Service Interval',
            'Batttery',
            'Exterior Damage',
            'Engine Noise',
            'Suspension',
            'Brakes',
            'Electrical',
            'Interior',
            'Air Conditioning',
            'Navigation',
            'Error Code',
            'Emissions',
            'Inspection',
            'Accident Repair',
            'Transmission',
            'Performance',
            'Detailing',
          ],
        },
        formatType: `prime`,
        hasMany: false,
        id: 61641,
        isDisplayValue: false,
        isNullable: false,
        label: `service description`,
        multiple: true,
        name: `serviceDescription`,
        prototypeId: 61277,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `ServiceRecordType`,
        deepDataType: `severity_level`,
        editable: false,
        format: {
          examples: ['Repair', 'Warranty', 'Recall', 'Preventative'],
          valueLabels: [
            { label: 'Repair', value: 1 },
            { label: 'Warranty', value: 2 },
            { label: 'Recall', value: 3 },
            { label: 'Preventative', value: 4 },
          ],
          max: 4,
          min: 1,
          severityBad: 1,
          severityGood: 4,
          severityLevels: 4,
        },
        formatType: `severity_level`,
        hasMany: false,
        id: 61648,
        isDisplayValue: false,
        isNullable: false,
        label: `service record type`,
        multiple: true,
        name: `serviceRecordType`,
        prototypeId: 61328,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.OrderedSeverityRanking,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `DowntimeHours`,
        deepDataType: `integer`,
        editable: false,
        format: { examples: [], max: 24, min: 1 },
        formatType: `integer`,
        hasMany: false,
        id: 61644,
        isDisplayValue: false,
        isNullable: false,
        label: `downtime hours`,
        multiple: true,
        name: `downtimeHours`,
        prototypeId: 61280,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 61651,
    id: `e915eed6-556f-4343-ba04-004d1e429082`,
    name: 'Completed Service Records',
    params: {
      baseModel: `CompletedService`,
      operationName: `object_listing_e915eed6_556f_4343_ba04_004d1e429082`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-uMo39Heu3WyGouJ3KBHUVY',
    viewOrder: 2,
  },
  {
    actions: [],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `ServiceDescription`,
        deepDataType: `string`,
        editable: false,
        format: {
          examples: [
            'Flat Tire',
            'Broken Glass',
            'Oil Change',
            'Regular Service Interval',
            'Batttery',
            'Exterior Damage',
            'Engine Noise',
            'Suspension',
            'Brakes',
            'Electrical',
            'Interior',
            'Air Conditioning',
            'Navigation',
            'Error Code',
            'Emissions',
            'Inspection',
            'Accident Repair',
            'Transmission',
            'Performance',
            'Detailing',
          ],
        },
        formatType: `prime`,
        hasMany: false,
        id: 61641,
        isDisplayValue: false,
        isNullable: false,
        label: `service description`,
        multiple: true,
        name: `serviceDescription`,
        prototypeId: 61277,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `ServiceRecordType`,
        deepDataType: `severity_level`,
        editable: false,
        format: {
          examples: ['Repair', 'Warranty', 'Recall', 'Preventative'],
          valueLabels: [
            { label: 'Repair', value: 1 },
            { label: 'Warranty', value: 2 },
            { label: 'Recall', value: 3 },
            { label: 'Preventative', value: 4 },
          ],
          max: 4,
          min: 1,
          severityBad: 1,
          severityGood: 4,
          severityLevels: 4,
        },
        formatType: `severity_level`,
        hasMany: false,
        id: 61648,
        isDisplayValue: false,
        isNullable: false,
        label: `service record type`,
        multiple: true,
        name: `serviceRecordType`,
        prototypeId: 61328,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.OrderedSeverityRanking,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `EstimatedCost`,
        deepDataType: `integer`,
        editable: false,
        format: { examples: [], max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 61643,
        isDisplayValue: false,
        isNullable: false,
        label: `estimated cost`,
        multiple: true,
        name: `estimatedCost`,
        prototypeId: 61394,
        settings: { isEditable: false, isFilledByEU: false },
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 61650,
    id: `095dfbc9-3e93-4b0c-bc62-6b0f2c26a425`,
    name: 'Scheduled Service Records',
    params: {
      baseModel: `ScheduledService`,
      operationName: `object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-2a67xSeP3gesUqhyoRbUyV',
    viewOrder: 3,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Dashboard 2',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-sJejMtmVt5dctBwYyqKkJP',
    viewOrder: 4,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { examples: [] },
            formatType: `uuid`,
            id: 61653,
            isFilterable: { in: false, out: false },
            label: `Vehicle Warranty`,
            name: `vehicleWarranty`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Max,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { max: 189000, examples: [] },
            formatType: `integer`,
            id: 61647,
            isFilterable: { in: false, out: false },
            label: `Max of Current Mileage`,
            name: `currentMileage`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Max,
          },
        ],
        chartType: WidgetTypes.SIMPLE_LIST_RANKED,
        id: `d167adac-ecb5-4ece-8fec-212cc0862287`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `uuid`,
            name: `vehicleWarranty`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_d167adac_ecb5_4ece_8fec_212cc0862287`,
          value: {
            formatType: `integer`,
            name: `currentMileage`,
            transformation: Transformation.Max,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Widget 1`,
        viableSolutions: [],
        viewId: 'ks-view-sJejMtmVt5dctBwYyqKkJP',
      },
    ],
  },
];
