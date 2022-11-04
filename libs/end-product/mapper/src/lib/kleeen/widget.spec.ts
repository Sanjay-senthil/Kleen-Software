import { Maybe, Thing, Transformation } from '@kleeen/types';

import { mapToWidget } from './widget';
import { thingsMock } from './mocks';

jest.mock('@kleeen/things', () => {
  return {
    getThingByName(name: string): Maybe<Thing> {
      return Object.values(thingsMock).find((thing) => thing.name === name) as Thing;
    },
  };
});

describe('kleeen', () => {
  describe('widget', () => {
    it.todo(
      'should return "GetWidgetDataResult" response if "mapToWidget" is called from a Area Gradient, Step Line, Area Macro Micro, Area or a Simple List Ranked widget',
    );

    it.todo(
      'should return "GetWidgetDataResult" response if "mapToWidget" is called from a Area Trend widget',
    );

    it('should return "GetWidgetDataResult" response if "mapToWidget" is called from a Donut Variant, Donut, Pie or a Simple List Ranked widget', () => {
      const rows = [
        { 'Vehicle.warrantyStatus': 'Active', 'Vehicle.countTotal': 15 },
        { 'Vehicle.warrantyStatus': 'Expired', 'Vehicle.countTotal': 9 },
      ];
      const options = {
        categoryPath: ['Vehicle.warrantyStatus'],
        groupBy: { name: 'warrantyStatus', transformation: Transformation.SelfMulti },
        resultsPath: ['Vehicle.countTotal'],
        value: { name: 'vehicle', transformation: Transformation.CountTotal },
      };

      expect(mapToWidget(rows, options)).toMatchSnapshot();
    });

    it('should return "GetWidgetDataResult" response if "mapToWidget" is called from a List widget', () => {
      const rows = [
        { 'Service.category': 'Repair', 'Service.count': 108 },
        { 'Service.category': 'Warranty', 'Service.count': 10 },
        { 'Service.category': 'Preventative', 'Service.count': 9 },
        { 'Service.category': 'Recall', 'Service.count': 2 },
      ];
      const options = {
        categoryPath: ['Service.category'],
        groupBy: { name: 'serviceRecordType', transformation: Transformation.SelfMulti },
        resultsPath: ['Service.count'],
        value: { name: 'serviceRecord', transformation: Transformation.CountTotal },
      };

      expect(mapToWidget(rows, options)).toMatchSnapshot();
    });

    it('should return "GetWidgetDataResult" response if "mapToWidget" is called from a Polar Area or a Simple List Ranked widget', () => {
      const rows = [
        {
          'Dtc.id': 'B1021-96',
          'Dtc.name': 'Air Cleaning Module Overcurrent - Circuit Current Above Threshold',
          'Vehicle.count': '38',
        },
        {
          'Dtc.id': 'P1102-21',
          'Dtc.name': 'Backlite Defrost Relay Fault - Signal Shape / Waveform Failure',
          'Vehicle.count': '58',
        },
        {
          'Dtc.id': 'B1029-16',
          'Dtc.name': 'Cabin Heater (PTCHF) 12V Logic Over Voltage - Circuit Voltage Above Threshold',
          'Vehicle.count': '63',
        },
      ];
      const options = {
        categoryPath: ['Dtc.name'],
        crossLinkPath: ['Dtc.id'],
        groupBy: { name: 'vehicleDtc', transformation: Transformation.SelfMulti },
        resultsPath: ['Vehicle.count'],
        value: { name: 'vehicle', transformation: Transformation.CountTotal },
      };

      expect(mapToWidget(rows, options)).toMatchSnapshot();
    });

    it.todo(
      'should return "GetWidgetDataResult" response if "mapToWidget" is called from a Scatter or a Simple List Ranked widget',
    );

    it('should return "GetWidgetDataResult" response if "mapToWidget" is called from a Single-Bar Horizontal/Vertical or a Simple List Ranked widget', () => {
      const rows = [
        { 'Service.component': 'Battery', 'Service.totalCost': 193 },
        { 'Service.component': 'Brake', 'Service.totalCost': 179 },
        { 'Service.component': 'Coolant', 'Service.totalCost': 121 },
        { 'Service.component': 'Motor', 'Service.totalCost': 76 },
        { 'Service.component': 'Charging System', 'Service.totalCost': 51 },
        { 'Service.component': 'Navigation', 'Service.totalCost': 47 },
      ];
      const options = {
        categoryPath: ['Service.component'],
        groupBy: { name: 'serviceDescription', transformation: Transformation.SelfMulti },
        resultsPath: ['Service.totalCost'],
        value: { name: 'serviceCost', transformation: Transformation.CountTotal },
      };

      expect(mapToWidget(rows, options)).toMatchSnapshot();
    });
  });
});
