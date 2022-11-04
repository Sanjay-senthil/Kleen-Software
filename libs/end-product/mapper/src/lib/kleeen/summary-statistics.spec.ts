import { Maybe, Thing, Transformation } from '@kleeen/types';

import { mapToSummaryStatistics } from './summary-statistics';
import { thingsMock } from './mocks';

jest.mock('@kleeen/things', () => {
  return {
    getThingByName(name: string): Maybe<Thing> {
      return Object.values(thingsMock).find((thing) => thing.name === name) as Thing;
    },
  };
});

describe('kleeen', () => {
  describe('summary-statistics', () => {
    it('should return "MultiTransFormationResults[]" response if "mapToSummaryStatistics" is called from a Gauge widget', () => {
      const rows = [{ 'Vehicle.stateOfCharge': '100' }];
      const options = {
        attributes: ['vehicleStateOfCharge'],
        resultsPath: ['Vehicle.stateOfCharge'],
        transformations: [Transformation.SelfSingle],
      };

      expect(mapToSummaryStatistics(rows, options)).toMatchSnapshot();
    });

    it('should return "MultiTransFormationResults[]" response if "mapToSummaryStatistics" is called from a Summary Statistics widget', () => {
      const rows = [{ 'Vehicle.countTotal': 24 }];
      const options = {
        attributes: ['Vehicle'],
        resultsPath: ['Vehicle.countTotal'],
        transformations: [Transformation.CountTotal],
      };

      expect(mapToSummaryStatistics(rows, options)).toMatchSnapshot();
    });
  });
});
