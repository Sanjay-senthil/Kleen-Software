import { Maybe, Thing } from '@kleeen/types';

import { mapToSummary } from './summary';
import { thingsMock } from './mocks';

jest.mock('@kleeen/things', () => {
  return {
    getThingByName(name: string): Maybe<Thing> {
      return Object.values(thingsMock).find((thing) => thing.name === name) as Thing;
    },
  };
});

describe('kleeen', () => {
  describe('summary', () => {
    it('should return "GetListingDataResults" response if "mapToSummary" is called from a Summary Entity Detail widget', () => {
      const rows = [
        {
          'Vehicle.vehicleId': 7,
          'Vehicle.brand': 'BYD',
          'Vehicle.model': 'S2',
          'Vehicle.warrantyStatus': 'Active',
          'Service.completedCount': 10,
          'Service.scheduledCount': 1,
          'Vehicle.currentMileage': 222206,
        },
      ];
      const columns = [
        {
          idPath: 'Vehicle.vehicleId',
          key: 'vehicle',
          path: 'Vehicle.vehicleId',
        },
        { key: 'vehicleBrand', path: 'Vehicle.brand' },
        { key: 'vehicleModel', path: 'Vehicle.model' },
        { key: 'vehicleWarranty', path: 'Vehicle.warrantyStatus' },
        { key: 'completedService', path: 'Service.completedCount' },
        { key: 'scheduledService', path: 'Service.scheduledCount' },
        { key: 'currentMileage', path: 'Vehicle.currentMileage' },
      ];

      expect(mapToSummary(rows, columns)).toMatchSnapshot();
    });
  });
});
