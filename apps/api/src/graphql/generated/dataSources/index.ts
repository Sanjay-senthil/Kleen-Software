import { ApiTimestamp } from '../../custom/entityResolvers/api61400';
import { ApiVehicle } from '../../custom/entityResolvers/api61441';
import { ApiVehicleBrand } from '../../custom/entityResolvers/api61442';
import { ApiVehicleModel } from '../../custom/entityResolvers/api61443';
import { ApiServiceDescription } from '../../custom/entityResolvers/api61641';
import { ApiDatePerformed } from '../../custom/entityResolvers/api61642';
import { ApiEstimatedCost } from '../../custom/entityResolvers/api61643';
import { ApiDowntimeHours } from '../../custom/entityResolvers/api61644';
import { ApiServiceCost } from '../../custom/entityResolvers/api61645';
import { ApiDateScheduled } from '../../custom/entityResolvers/api61646';
import { ApiCurrentMileage } from '../../custom/entityResolvers/api61647';
import { ApiServiceRecordType } from '../../custom/entityResolvers/api61648';
import { ApiServiceRecord } from '../../custom/entityResolvers/api61649';
import { ApiScheduledService } from '../../custom/entityResolvers/api61650';
import { ApiCompletedService } from '../../custom/entityResolvers/api61651';
import { ApiWarrantyStatus } from '../../custom/entityResolvers/api61652';
import { ApiVehicleWarranty } from '../../custom/entityResolvers/api61653';
import { ApiDepartment } from '../../custom/entityResolvers/api62906';
import { ApiAge } from '../../custom/entityResolvers/api62907';
import { ApiEmployeeName } from '../../custom/entityResolvers/api62908';
import { ApiDateOfJoining } from '../../custom/entityResolvers/api62909';
import { ApiEmployeeId } from '../../custom/entityResolvers/api62910';
import { ApiCollege } from '../../custom/entityResolvers/api62911';
import { ApiStaffs } from '../../custom/entityResolvers/api62913';
import { ApiStudents } from '../../custom/entityResolvers/api62914';
import { ApiDepartments } from '../../custom/entityResolvers/api62915';
import { ApiManagement } from '../../custom/entityResolvers/api65092';
import { ApiDeprt } from '../../custom/entityResolvers/api65093';
import { ApiEntertainment } from '../../custom/entityResolvers/api65094';
import { ApiTourism } from '../../custom/entityResolvers/api65096';
import { ApiServices } from '../../custom/entityResolvers/api65098';
import { ApiFoodServices } from '../../custom/entityResolvers/api65099';
import { ApiRoomServices } from '../../custom/entityResolvers/api65100';
import { ApiNonVegeterianFood } from '../../custom/entityResolvers/api65101';
import { ApiVegeterianFood } from '../../custom/entityResolvers/api65102';
import { ApiCleaning } from '../../custom/entityResolvers/api65103';
import { ApiLaundry } from '../../custom/entityResolvers/api65104';
import { ApiBoatHouse } from '../../custom/entityResolvers/api65105';
import { ApiGames } from '../../custom/entityResolvers/api65106';
import { ApiPub } from '../../custom/entityResolvers/api65107';
import { ApiTheater } from '../../custom/entityResolvers/api65108';
import { ApiAdventure } from '../../custom/entityResolvers/api65109';
import { ApiSightSeeing } from '../../custom/entityResolvers/api65110';
import { ApiRiverSurfing } from '../../custom/entityResolvers/api65111';
import { ApiMountainClimbing } from '../../custom/entityResolvers/api65112';
import { ApiCampFire } from '../../custom/entityResolvers/api65113';
import { ApiBeachViewPoint } from '../../custom/entityResolvers/api65114';
import { ApiMountainViewPoint } from '../../custom/entityResolvers/api65116';
import { ApiMaintenance } from '../../custom/entityResolvers/api65117';
import { ApiDoctorsDetails } from '../../custom/entityResolvers/api65118';
import { ApiPatientDetails } from '../../custom/entityResolvers/api65119';
import { ApiSurgicalDetails } from '../../custom/entityResolvers/api65120';
import { ApiBloodBank } from '../../custom/entityResolvers/api65121';
import { ApiHospitalDpt } from '../../custom/entityResolvers/api65122';
import { ApiBloodTypes } from '../../custom/entityResolvers/api65123';
import { ApiPatientInfo } from '../../custom/entityResolvers/api65124';
import { ApiBloodCheckUp } from '../../custom/entityResolvers/api65125';
import { ApiGeneralDoctors } from '../../custom/entityResolvers/api65126';
import { ApiSurgeryDoctors } from '../../custom/entityResolvers/api65127';
import { ApiDentalDpt } from '../../custom/entityResolvers/api65128';
import { ApiEntDpt } from '../../custom/entityResolvers/api65129';
import { ApiPhysioTherapyDpt } from '../../custom/entityResolvers/api65130';
import { ApiOpDetails } from '../../custom/entityResolvers/api65131';
import { ApiSurgeryPatientInfo } from '../../custom/entityResolvers/api65132';
import { ApiDoctorInfo } from '../../custom/entityResolvers/api65133';
import { ApiPatientsInfo } from '../../custom/entityResolvers/api65134';
import { ApiMedicines } from '../../custom/entityResolvers/api65135';
import { ApiAllopathic } from '../../custom/entityResolvers/api65136';
import { ApiAyurvedic } from '../../custom/entityResolvers/api65137';
import { ApiRct } from '../../custom/entityResolvers/api65138';
import { ApiGeneralTreatment } from '../../custom/entityResolvers/api65139';
import { ApiThroatCheckup } from '../../custom/entityResolvers/api65140';
import { ApiGeneralCheckup } from '../../custom/entityResolvers/api65141';
import { ApiNormalTreatment } from '../../custom/entityResolvers/api65142';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api61400: new ApiTimestamp(),
  api61441: new ApiVehicle(),
  api61442: new ApiVehicleBrand(),
  api61443: new ApiVehicleModel(),
  api61641: new ApiServiceDescription(),
  api61642: new ApiDatePerformed(),
  api61643: new ApiEstimatedCost(),
  api61644: new ApiDowntimeHours(),
  api61645: new ApiServiceCost(),
  api61646: new ApiDateScheduled(),
  api61647: new ApiCurrentMileage(),
  api61648: new ApiServiceRecordType(),
  api61649: new ApiServiceRecord(),
  api61650: new ApiScheduledService(),
  api61651: new ApiCompletedService(),
  api61652: new ApiWarrantyStatus(),
  api61653: new ApiVehicleWarranty(),
  api62906: new ApiDepartment(),
  api62907: new ApiAge(),
  api62908: new ApiEmployeeName(),
  api62909: new ApiDateOfJoining(),
  api62910: new ApiEmployeeId(),
  api62911: new ApiCollege(),
  api62913: new ApiStaffs(),
  api62914: new ApiStudents(),
  api62915: new ApiDepartments(),
  api65092: new ApiManagement(),
  api65093: new ApiDeprt(),
  api65094: new ApiEntertainment(),
  api65096: new ApiTourism(),
  api65098: new ApiServices(),
  api65099: new ApiFoodServices(),
  api65100: new ApiRoomServices(),
  api65101: new ApiNonVegeterianFood(),
  api65102: new ApiVegeterianFood(),
  api65103: new ApiCleaning(),
  api65104: new ApiLaundry(),
  api65105: new ApiBoatHouse(),
  api65106: new ApiGames(),
  api65107: new ApiPub(),
  api65108: new ApiTheater(),
  api65109: new ApiAdventure(),
  api65110: new ApiSightSeeing(),
  api65111: new ApiRiverSurfing(),
  api65112: new ApiMountainClimbing(),
  api65113: new ApiCampFire(),
  api65114: new ApiBeachViewPoint(),
  api65116: new ApiMountainViewPoint(),
  api65117: new ApiMaintenance(),
  api65118: new ApiDoctorsDetails(),
  api65119: new ApiPatientDetails(),
  api65120: new ApiSurgicalDetails(),
  api65121: new ApiBloodBank(),
  api65122: new ApiHospitalDpt(),
  api65123: new ApiBloodTypes(),
  api65124: new ApiPatientInfo(),
  api65125: new ApiBloodCheckUp(),
  api65126: new ApiGeneralDoctors(),
  api65127: new ApiSurgeryDoctors(),
  api65128: new ApiDentalDpt(),
  api65129: new ApiEntDpt(),
  api65130: new ApiPhysioTherapyDpt(),
  api65131: new ApiOpDetails(),
  api65132: new ApiSurgeryPatientInfo(),
  api65133: new ApiDoctorInfo(),
  api65134: new ApiPatientsInfo(),
  api65135: new ApiMedicines(),
  api65136: new ApiAllopathic(),
  api65137: new ApiAyurvedic(),
  api65138: new ApiRct(),
  api65139: new ApiGeneralTreatment(),
  api65140: new ApiThroatCheckup(),
  api65141: new ApiGeneralCheckup(),
  api65142: new ApiNormalTreatment(),
});
