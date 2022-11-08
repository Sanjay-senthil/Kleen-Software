import { MapFunctionType, Maybe, Thing } from '@kleeen/types';

import { mapToList } from './list';
import { thingsMock } from './mocks';

jest.mock('@kleeen/things', () => {
  return {
    getThingByName(name: string): Maybe<Thing> {
      return Object.values(thingsMock).find((thing) => thing.name === name) as Thing;
    },
  };
});

describe('kleeen', () => {
  describe('list', () => {
    it('should return "GetListingDataResults" response if "mapToList" is called from a Full Table widget', () => {
      const columns = [
        {
          idPath: 'Vehicle.vehicleId',
          key: 'id',
          handler: MapFunctionType.ToIdValue,
          path: 'id',
        },
        {
          idPath: 'Vehicle.vehicleId',
          key: 'vehicle',
          path: 'Vehicle.vehicleId',
          showDisplayMedia: false,
        },
        {
          key: 'vehicleBrand',
          path: 'Vehicle.brand',
          showDisplayMedia: false,
        },
        {
          key: 'vehicleModel',
          path: 'Vehicle.model',
          showDisplayMedia: false,
        },
      ];
      const rows = [
        {
          'Vehicle.model': 'S2',
          'Vehicle.brand': 'ByD',
          'Vehicle.vehicleId': '1e9aa1aaxkd630001',
        },
        {
          'Vehicle.model': 'Lifestyle Vehicle',
          'Vehicle.brand': 'Canoo',
          'Vehicle.vehicleId': '1e9aa1aaxkd630002',
        },
        {
          'Vehicle.model': 'S',
          'Vehicle.brand': 'Tesla',
          'Vehicle.vehicleId': '1e9aa1aaxkd630003',
        },
        {
          'Vehicle.model': 'Prius',
          'Vehicle.brand': 'Toyota',
          'Vehicle.vehicleId': '1e9aa1aaxkd630004',
        },
      ];

      expect(mapToList(rows, columns)).toMatchSnapshot();
    });

    it('should return "GetListingDataResults" response if "mapToList" is called from a Full Table widget with Chips', () => {
      const columns = [
        {
          key: 'vehicleEcu',
          path: 'DTC.ecu',
          showDisplayMedia: false,
        },
        { key: 'vehicleSoftwareVersion', path: 'DTC.version', showDisplayMedia: false },
        {
          handler: MapFunctionType.ToChipsValue,
          idPath: 'DTC.dtc',
          key: 'vehicleDtc',
          path: 'DTC.dtcText',
        },
      ];

      const rows = [
        {
          'DTC.ecu': 'BPCM',
          'DTC.version': '00.40.01',
          'DTC.dtcText': [
            {
              'DTC.dtc': 'B1006-19',
              'DTC.dtcText':
                'Fan Interior Ambient Temperature Sensor Front Over Current - Circuit Current Above Threshold',
            },
            {
              'DTC.dtc': 'B1033-16',
              'DTC.dtcText': 'Side view Mirror Driver Under Voltage L/R - Circuit Voltage Below Threshold',
            },
            {
              'DTC.dtc': 'B1028-19',
              'DTC.dtcText': 'Hazard Light Switch Over Current - Circuit Current Above Threshold',
            },
          ],
        },
      ];

      expect(mapToList(rows, columns)).toMatchSnapshot();
    });

    it('should return "GetListingDataResults" response if "mapToList" is called from a Full Table widget with Severity Scores', () => {
      const rows = [
        {
          'Vehicle.stateOfCharge': '11.5',
          'Vehicle.timestamp': '1643917172',
          'Vehicle.vehicleId': '1e9aa1aaxkd630008',
        },
        {
          'Vehicle.stateOfCharge': '44.5',
          'Vehicle.timestamp': '1643917174',
          'Vehicle.vehicleId': '1e9aa1aaxkd630008',
        },
        {
          'Vehicle.stateOfCharge': '67.5',
          'Vehicle.timestamp': '1643917175',
          'Vehicle.vehicleId': '1e9aa1aaxkd630008',
        },
        {
          'Vehicle.stateOfCharge': '93.5',
          'Vehicle.timestamp': '1643917176',
          'Vehicle.vehicleId': '1e9aa1aaxkd630008',
        },
      ];
      const columns = [
        {
          idPath: 'Vehicle.vehicleId',
          key: 'vehicle',
          path: 'Vehicle.vehicleId',
          showDisplayMedia: false,
        },
        { key: 'vehicleStateOfCharge', path: 'Vehicle.stateOfCharge' },
        { key: 'vehicleTimeOfLastCharge', path: 'Vehicle.timestamp', showDisplayMedia: false },
      ];

      expect(mapToList(rows, columns)).toMatchSnapshot();
    });
  });
});
