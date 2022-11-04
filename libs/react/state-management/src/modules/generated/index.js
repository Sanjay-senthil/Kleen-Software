import * as entertainment from './entertainment';
import * as vehicleInventory from './vehicleInventory';
import * as service from './service';
import * as employeeDb from './employeeDb';
import * as vehicleDetail from './vehicleDetail';
import * as management from './management';
import * as hospitalManagement from './hospitalManagement';
import * as collegeDb from './collegeDb';

export default {
  ...Object.values({
    entertainment,

    vehicleInventory,

    service,

    employeeDb,

    vehicleDetail,

    management,

    hospitalManagement,

    collegeDb,
  }),
};
