import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add61400(input: AddEntityInput): GenericEntity
    list61400(input: ListEntityInput): GenericEntity
    get61400(id: String): GenericEntity
    delete61400(id: String): GenericEntity
    update61400(entity: JSON): GenericEntity
    autoComplete61400(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Vehicle
    add61441(input: AddEntityInput): GenericEntity
    list61441(input: ListEntityInput): GenericEntity
    get61441(id: String): GenericEntity
    delete61441(id: String): GenericEntity
    update61441(entity: JSON): GenericEntity
    autoComplete61441(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # VehicleBrand
    add61442(input: AddEntityInput): GenericEntity
    list61442(input: ListEntityInput): GenericEntity
    get61442(id: String): GenericEntity
    delete61442(id: String): GenericEntity
    update61442(entity: JSON): GenericEntity
    autoComplete61442(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # VehicleModel
    add61443(input: AddEntityInput): GenericEntity
    list61443(input: ListEntityInput): GenericEntity
    get61443(id: String): GenericEntity
    delete61443(id: String): GenericEntity
    update61443(entity: JSON): GenericEntity
    autoComplete61443(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ServiceDescription
    add61641(input: AddEntityInput): GenericEntity
    list61641(input: ListEntityInput): GenericEntity
    get61641(id: String): GenericEntity
    delete61641(id: String): GenericEntity
    update61641(entity: JSON): GenericEntity
    autoComplete61641(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DatePerformed
    add61642(input: AddEntityInput): GenericEntity
    list61642(input: ListEntityInput): GenericEntity
    get61642(id: String): GenericEntity
    delete61642(id: String): GenericEntity
    update61642(entity: JSON): GenericEntity
    autoComplete61642(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # EstimatedCost
    add61643(input: AddEntityInput): GenericEntity
    list61643(input: ListEntityInput): GenericEntity
    get61643(id: String): GenericEntity
    delete61643(id: String): GenericEntity
    update61643(entity: JSON): GenericEntity
    autoComplete61643(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DowntimeHours
    add61644(input: AddEntityInput): GenericEntity
    list61644(input: ListEntityInput): GenericEntity
    get61644(id: String): GenericEntity
    delete61644(id: String): GenericEntity
    update61644(entity: JSON): GenericEntity
    autoComplete61644(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ServiceCost
    add61645(input: AddEntityInput): GenericEntity
    list61645(input: ListEntityInput): GenericEntity
    get61645(id: String): GenericEntity
    delete61645(id: String): GenericEntity
    update61645(entity: JSON): GenericEntity
    autoComplete61645(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DateScheduled
    add61646(input: AddEntityInput): GenericEntity
    list61646(input: ListEntityInput): GenericEntity
    get61646(id: String): GenericEntity
    delete61646(id: String): GenericEntity
    update61646(entity: JSON): GenericEntity
    autoComplete61646(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CurrentMileage
    add61647(input: AddEntityInput): GenericEntity
    list61647(input: ListEntityInput): GenericEntity
    get61647(id: String): GenericEntity
    delete61647(id: String): GenericEntity
    update61647(entity: JSON): GenericEntity
    autoComplete61647(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ServiceRecordType
    add61648(input: AddEntityInput): GenericEntity
    list61648(input: ListEntityInput): GenericEntity
    get61648(id: String): GenericEntity
    delete61648(id: String): GenericEntity
    update61648(entity: JSON): GenericEntity
    autoComplete61648(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ServiceRecord
    add61649(input: AddEntityInput): GenericEntity
    list61649(input: ListEntityInput): GenericEntity
    get61649(id: String): GenericEntity
    delete61649(id: String): GenericEntity
    update61649(entity: JSON): GenericEntity
    autoComplete61649(input: AutoCompleteByEntityInput): AutoCompleteResponse
    reportIssue61649(input: CustomActionArgs): GenericEntity

    # ScheduledService
    add61650(input: AddEntityInput): GenericEntity
    list61650(input: ListEntityInput): GenericEntity
    get61650(id: String): GenericEntity
    delete61650(id: String): GenericEntity
    update61650(entity: JSON): GenericEntity
    autoComplete61650(input: AutoCompleteByEntityInput): AutoCompleteResponse
    reportIssue61650(input: CustomActionArgs): GenericEntity

    # CompletedService
    add61651(input: AddEntityInput): GenericEntity
    list61651(input: ListEntityInput): GenericEntity
    get61651(id: String): GenericEntity
    delete61651(id: String): GenericEntity
    update61651(entity: JSON): GenericEntity
    autoComplete61651(input: AutoCompleteByEntityInput): AutoCompleteResponse
    reportIssue61651(input: CustomActionArgs): GenericEntity

    # WarrantyStatus
    add61652(input: AddEntityInput): GenericEntity
    list61652(input: ListEntityInput): GenericEntity
    get61652(id: String): GenericEntity
    delete61652(id: String): GenericEntity
    update61652(entity: JSON): GenericEntity
    autoComplete61652(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # VehicleWarranty
    add61653(input: AddEntityInput): GenericEntity
    list61653(input: ListEntityInput): GenericEntity
    get61653(id: String): GenericEntity
    delete61653(id: String): GenericEntity
    update61653(entity: JSON): GenericEntity
    autoComplete61653(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Department
    add62906(input: AddEntityInput): GenericEntity
    list62906(input: ListEntityInput): GenericEntity
    get62906(id: String): GenericEntity
    delete62906(id: String): GenericEntity
    update62906(entity: JSON): GenericEntity
    autoComplete62906(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Age
    add62907(input: AddEntityInput): GenericEntity
    list62907(input: ListEntityInput): GenericEntity
    get62907(id: String): GenericEntity
    delete62907(id: String): GenericEntity
    update62907(entity: JSON): GenericEntity
    autoComplete62907(input: AutoCompleteByEntityInput): AutoCompleteResponse
    beModified62907(input: CustomActionArgs): GenericEntity

    # EmployeeName
    add62908(input: AddEntityInput): GenericEntity
    list62908(input: ListEntityInput): GenericEntity
    get62908(id: String): GenericEntity
    delete62908(id: String): GenericEntity
    update62908(entity: JSON): GenericEntity
    autoComplete62908(input: AutoCompleteByEntityInput): AutoCompleteResponse
    addModifyName62908(input: CustomActionArgs): GenericEntity

    # DateOfJoining
    add62909(input: AddEntityInput): GenericEntity
    list62909(input: ListEntityInput): GenericEntity
    get62909(id: String): GenericEntity
    delete62909(id: String): GenericEntity
    update62909(entity: JSON): GenericEntity
    autoComplete62909(input: AutoCompleteByEntityInput): AutoCompleteResponse
    modify62909(input: CustomActionArgs): GenericEntity

    # EmployeeId
    add62910(input: AddEntityInput): GenericEntity
    list62910(input: ListEntityInput): GenericEntity
    get62910(id: String): GenericEntity
    delete62910(id: String): GenericEntity
    update62910(entity: JSON): GenericEntity
    autoComplete62910(input: AutoCompleteByEntityInput): AutoCompleteResponse
    modify62910(input: CustomActionArgs): GenericEntity

    # College
    add62911(input: AddEntityInput): GenericEntity
    list62911(input: ListEntityInput): GenericEntity
    get62911(id: String): GenericEntity
    delete62911(id: String): GenericEntity
    update62911(entity: JSON): GenericEntity
    autoComplete62911(input: AutoCompleteByEntityInput): AutoCompleteResponse
    admitNewStudents62911(input: CustomActionArgs): GenericEntity

    # Staffs
    add62913(input: AddEntityInput): GenericEntity
    list62913(input: ListEntityInput): GenericEntity
    get62913(id: String): GenericEntity
    delete62913(id: String): GenericEntity
    update62913(entity: JSON): GenericEntity
    autoComplete62913(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Students
    add62914(input: AddEntityInput): GenericEntity
    list62914(input: ListEntityInput): GenericEntity
    get62914(id: String): GenericEntity
    delete62914(id: String): GenericEntity
    update62914(entity: JSON): GenericEntity
    autoComplete62914(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Departments
    add62915(input: AddEntityInput): GenericEntity
    list62915(input: ListEntityInput): GenericEntity
    get62915(id: String): GenericEntity
    delete62915(id: String): GenericEntity
    update62915(entity: JSON): GenericEntity
    autoComplete62915(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Management
    add65092(input: AddEntityInput): GenericEntity
    list65092(input: ListEntityInput): GenericEntity
    get65092(id: String): GenericEntity
    delete65092(id: String): GenericEntity
    update65092(entity: JSON): GenericEntity
    autoComplete65092(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65092(input: CustomActionArgs): GenericEntity
    edit65092(input: CustomActionArgs): GenericEntity

    # Deprt
    add65093(input: AddEntityInput): GenericEntity
    list65093(input: ListEntityInput): GenericEntity
    get65093(id: String): GenericEntity
    delete65093(id: String): GenericEntity
    update65093(entity: JSON): GenericEntity
    autoComplete65093(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65093(input: CustomActionArgs): GenericEntity
    modify65093(input: CustomActionArgs): GenericEntity
    notify65093(input: CustomActionArgs): GenericEntity

    # Entertainment
    add65094(input: AddEntityInput): GenericEntity
    list65094(input: ListEntityInput): GenericEntity
    get65094(id: String): GenericEntity
    delete65094(id: String): GenericEntity
    update65094(entity: JSON): GenericEntity
    autoComplete65094(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65094(input: CustomActionArgs): GenericEntity
    evaluate65094(input: CustomActionArgs): GenericEntity
    modify65094(input: CustomActionArgs): GenericEntity
    notify65094(input: CustomActionArgs): GenericEntity
    report65094(input: CustomActionArgs): GenericEntity

    # Tourism
    add65096(input: AddEntityInput): GenericEntity
    list65096(input: ListEntityInput): GenericEntity
    get65096(id: String): GenericEntity
    delete65096(id: String): GenericEntity
    update65096(entity: JSON): GenericEntity
    autoComplete65096(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65096(input: CustomActionArgs): GenericEntity
    allocate65096(input: CustomActionArgs): GenericEntity
    emergency65096(input: CustomActionArgs): GenericEntity
    modify65096(input: CustomActionArgs): GenericEntity
    notify65096(input: CustomActionArgs): GenericEntity

    # Services
    add65098(input: AddEntityInput): GenericEntity
    list65098(input: ListEntityInput): GenericEntity
    get65098(id: String): GenericEntity
    delete65098(id: String): GenericEntity
    update65098(entity: JSON): GenericEntity
    autoComplete65098(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65098(input: CustomActionArgs): GenericEntity
    report65098(input: CustomActionArgs): GenericEntity
    updateReport65098(input: CustomActionArgs): GenericEntity

    # FoodServices
    add65099(input: AddEntityInput): GenericEntity
    list65099(input: ListEntityInput): GenericEntity
    get65099(id: String): GenericEntity
    delete65099(id: String): GenericEntity
    update65099(entity: JSON): GenericEntity
    autoComplete65099(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65099(input: CustomActionArgs): GenericEntity
    report65099(input: CustomActionArgs): GenericEntity
    updateReport65099(input: CustomActionArgs): GenericEntity

    # RoomServices
    add65100(input: AddEntityInput): GenericEntity
    list65100(input: ListEntityInput): GenericEntity
    get65100(id: String): GenericEntity
    delete65100(id: String): GenericEntity
    update65100(entity: JSON): GenericEntity
    autoComplete65100(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65100(input: CustomActionArgs): GenericEntity
    rating65100(input: CustomActionArgs): GenericEntity
    report65100(input: CustomActionArgs): GenericEntity
    updateReport65100(input: CustomActionArgs): GenericEntity

    # NonVegeterianFood
    add65101(input: AddEntityInput): GenericEntity
    list65101(input: ListEntityInput): GenericEntity
    get65101(id: String): GenericEntity
    delete65101(id: String): GenericEntity
    update65101(entity: JSON): GenericEntity
    autoComplete65101(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65101(input: CustomActionArgs): GenericEntity
    report65101(input: CustomActionArgs): GenericEntity
    updateReport65101(input: CustomActionArgs): GenericEntity

    # VegeterianFood
    add65102(input: AddEntityInput): GenericEntity
    list65102(input: ListEntityInput): GenericEntity
    get65102(id: String): GenericEntity
    delete65102(id: String): GenericEntity
    update65102(entity: JSON): GenericEntity
    autoComplete65102(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65102(input: CustomActionArgs): GenericEntity
    report65102(input: CustomActionArgs): GenericEntity
    updateReport65102(input: CustomActionArgs): GenericEntity

    # Cleaning
    add65103(input: AddEntityInput): GenericEntity
    list65103(input: ListEntityInput): GenericEntity
    get65103(id: String): GenericEntity
    delete65103(id: String): GenericEntity
    update65103(entity: JSON): GenericEntity
    autoComplete65103(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65103(input: CustomActionArgs): GenericEntity
    rating65103(input: CustomActionArgs): GenericEntity
    report65103(input: CustomActionArgs): GenericEntity
    updateReport65103(input: CustomActionArgs): GenericEntity

    # Laundry
    add65104(input: AddEntityInput): GenericEntity
    list65104(input: ListEntityInput): GenericEntity
    get65104(id: String): GenericEntity
    delete65104(id: String): GenericEntity
    update65104(entity: JSON): GenericEntity
    autoComplete65104(input: AutoCompleteByEntityInput): AutoCompleteResponse
    customize65104(input: CustomActionArgs): GenericEntity
    rating65104(input: CustomActionArgs): GenericEntity
    report65104(input: CustomActionArgs): GenericEntity
    updateReport65104(input: CustomActionArgs): GenericEntity

    # BoatHouse
    add65105(input: AddEntityInput): GenericEntity
    list65105(input: ListEntityInput): GenericEntity
    get65105(id: String): GenericEntity
    delete65105(id: String): GenericEntity
    update65105(entity: JSON): GenericEntity
    autoComplete65105(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65105(input: CustomActionArgs): GenericEntity
    evaluate65105(input: CustomActionArgs): GenericEntity
    modify65105(input: CustomActionArgs): GenericEntity
    notify65105(input: CustomActionArgs): GenericEntity
    report65105(input: CustomActionArgs): GenericEntity

    # Games
    add65106(input: AddEntityInput): GenericEntity
    list65106(input: ListEntityInput): GenericEntity
    get65106(id: String): GenericEntity
    delete65106(id: String): GenericEntity
    update65106(entity: JSON): GenericEntity
    autoComplete65106(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65106(input: CustomActionArgs): GenericEntity
    evaluate65106(input: CustomActionArgs): GenericEntity
    modify65106(input: CustomActionArgs): GenericEntity
    notify65106(input: CustomActionArgs): GenericEntity
    report65106(input: CustomActionArgs): GenericEntity
    review65106(input: CustomActionArgs): GenericEntity

    # Pub
    add65107(input: AddEntityInput): GenericEntity
    list65107(input: ListEntityInput): GenericEntity
    get65107(id: String): GenericEntity
    delete65107(id: String): GenericEntity
    update65107(entity: JSON): GenericEntity
    autoComplete65107(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65107(input: CustomActionArgs): GenericEntity
    compliant65107(input: CustomActionArgs): GenericEntity
    evaluate65107(input: CustomActionArgs): GenericEntity
    modify65107(input: CustomActionArgs): GenericEntity
    notify65107(input: CustomActionArgs): GenericEntity
    report65107(input: CustomActionArgs): GenericEntity

    # Theater
    add65108(input: AddEntityInput): GenericEntity
    list65108(input: ListEntityInput): GenericEntity
    get65108(id: String): GenericEntity
    delete65108(id: String): GenericEntity
    update65108(entity: JSON): GenericEntity
    autoComplete65108(input: AutoCompleteByEntityInput): AutoCompleteResponse
    allocate65108(input: CustomActionArgs): GenericEntity
    evaluate65108(input: CustomActionArgs): GenericEntity
    modify65108(input: CustomActionArgs): GenericEntity
    notify65108(input: CustomActionArgs): GenericEntity
    report65108(input: CustomActionArgs): GenericEntity

    # Adventure
    add65109(input: AddEntityInput): GenericEntity
    list65109(input: ListEntityInput): GenericEntity
    get65109(id: String): GenericEntity
    delete65109(id: String): GenericEntity
    update65109(entity: JSON): GenericEntity
    autoComplete65109(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65109(input: CustomActionArgs): GenericEntity
    allocate65109(input: CustomActionArgs): GenericEntity
    emergency65109(input: CustomActionArgs): GenericEntity
    modify65109(input: CustomActionArgs): GenericEntity
    notify65109(input: CustomActionArgs): GenericEntity

    # SightSeeing
    add65110(input: AddEntityInput): GenericEntity
    list65110(input: ListEntityInput): GenericEntity
    get65110(id: String): GenericEntity
    delete65110(id: String): GenericEntity
    update65110(entity: JSON): GenericEntity
    autoComplete65110(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65110(input: CustomActionArgs): GenericEntity
    allocate65110(input: CustomActionArgs): GenericEntity
    emergency65110(input: CustomActionArgs): GenericEntity
    modify65110(input: CustomActionArgs): GenericEntity
    notify65110(input: CustomActionArgs): GenericEntity

    # RiverSurfing
    add65111(input: AddEntityInput): GenericEntity
    list65111(input: ListEntityInput): GenericEntity
    get65111(id: String): GenericEntity
    delete65111(id: String): GenericEntity
    update65111(entity: JSON): GenericEntity
    autoComplete65111(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65111(input: CustomActionArgs): GenericEntity
    allocate65111(input: CustomActionArgs): GenericEntity
    emergency65111(input: CustomActionArgs): GenericEntity
    modify65111(input: CustomActionArgs): GenericEntity
    notify65111(input: CustomActionArgs): GenericEntity

    # MountainClimbing
    add65112(input: AddEntityInput): GenericEntity
    list65112(input: ListEntityInput): GenericEntity
    get65112(id: String): GenericEntity
    delete65112(id: String): GenericEntity
    update65112(entity: JSON): GenericEntity
    autoComplete65112(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65112(input: CustomActionArgs): GenericEntity
    allocate65112(input: CustomActionArgs): GenericEntity
    emergency65112(input: CustomActionArgs): GenericEntity
    modify65112(input: CustomActionArgs): GenericEntity
    notify65112(input: CustomActionArgs): GenericEntity

    # CampFire
    add65113(input: AddEntityInput): GenericEntity
    list65113(input: ListEntityInput): GenericEntity
    get65113(id: String): GenericEntity
    delete65113(id: String): GenericEntity
    update65113(entity: JSON): GenericEntity
    autoComplete65113(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65113(input: CustomActionArgs): GenericEntity
    allocate65113(input: CustomActionArgs): GenericEntity
    emergency65113(input: CustomActionArgs): GenericEntity
    modify65113(input: CustomActionArgs): GenericEntity
    notify65113(input: CustomActionArgs): GenericEntity

    # BeachViewPoint
    add65114(input: AddEntityInput): GenericEntity
    list65114(input: ListEntityInput): GenericEntity
    get65114(id: String): GenericEntity
    delete65114(id: String): GenericEntity
    update65114(entity: JSON): GenericEntity
    autoComplete65114(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65114(input: CustomActionArgs): GenericEntity
    allocate65114(input: CustomActionArgs): GenericEntity
    emergency65114(input: CustomActionArgs): GenericEntity
    modify65114(input: CustomActionArgs): GenericEntity
    notify65114(input: CustomActionArgs): GenericEntity

    # MountainViewPoint
    add65116(input: AddEntityInput): GenericEntity
    list65116(input: ListEntityInput): GenericEntity
    get65116(id: String): GenericEntity
    delete65116(id: String): GenericEntity
    update65116(entity: JSON): GenericEntity
    autoComplete65116(input: AutoCompleteByEntityInput): AutoCompleteResponse
    alerts65116(input: CustomActionArgs): GenericEntity
    allocate65116(input: CustomActionArgs): GenericEntity
    emergency65116(input: CustomActionArgs): GenericEntity
    modify65116(input: CustomActionArgs): GenericEntity
    notify65116(input: CustomActionArgs): GenericEntity

    # Maintenance
    add65117(input: AddEntityInput): GenericEntity
    list65117(input: ListEntityInput): GenericEntity
    get65117(id: String): GenericEntity
    delete65117(id: String): GenericEntity
    update65117(entity: JSON): GenericEntity
    autoComplete65117(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DoctorsDetails
    add65118(input: AddEntityInput): GenericEntity
    list65118(input: ListEntityInput): GenericEntity
    get65118(id: String): GenericEntity
    delete65118(id: String): GenericEntity
    update65118(entity: JSON): GenericEntity
    autoComplete65118(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # PatientDetails
    add65119(input: AddEntityInput): GenericEntity
    list65119(input: ListEntityInput): GenericEntity
    get65119(id: String): GenericEntity
    delete65119(id: String): GenericEntity
    update65119(entity: JSON): GenericEntity
    autoComplete65119(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SurgicalDetails
    add65120(input: AddEntityInput): GenericEntity
    list65120(input: ListEntityInput): GenericEntity
    get65120(id: String): GenericEntity
    delete65120(id: String): GenericEntity
    update65120(entity: JSON): GenericEntity
    autoComplete65120(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BloodBank
    add65121(input: AddEntityInput): GenericEntity
    list65121(input: ListEntityInput): GenericEntity
    get65121(id: String): GenericEntity
    delete65121(id: String): GenericEntity
    update65121(entity: JSON): GenericEntity
    autoComplete65121(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # HospitalDpt
    add65122(input: AddEntityInput): GenericEntity
    list65122(input: ListEntityInput): GenericEntity
    get65122(id: String): GenericEntity
    delete65122(id: String): GenericEntity
    update65122(entity: JSON): GenericEntity
    autoComplete65122(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BloodTypes
    add65123(input: AddEntityInput): GenericEntity
    list65123(input: ListEntityInput): GenericEntity
    get65123(id: String): GenericEntity
    delete65123(id: String): GenericEntity
    update65123(entity: JSON): GenericEntity
    autoComplete65123(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # PatientInfo
    add65124(input: AddEntityInput): GenericEntity
    list65124(input: ListEntityInput): GenericEntity
    get65124(id: String): GenericEntity
    delete65124(id: String): GenericEntity
    update65124(entity: JSON): GenericEntity
    autoComplete65124(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BloodCheckUp
    add65125(input: AddEntityInput): GenericEntity
    list65125(input: ListEntityInput): GenericEntity
    get65125(id: String): GenericEntity
    delete65125(id: String): GenericEntity
    update65125(entity: JSON): GenericEntity
    autoComplete65125(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GeneralDoctors
    add65126(input: AddEntityInput): GenericEntity
    list65126(input: ListEntityInput): GenericEntity
    get65126(id: String): GenericEntity
    delete65126(id: String): GenericEntity
    update65126(entity: JSON): GenericEntity
    autoComplete65126(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SurgeryDoctors
    add65127(input: AddEntityInput): GenericEntity
    list65127(input: ListEntityInput): GenericEntity
    get65127(id: String): GenericEntity
    delete65127(id: String): GenericEntity
    update65127(entity: JSON): GenericEntity
    autoComplete65127(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DentalDpt
    add65128(input: AddEntityInput): GenericEntity
    list65128(input: ListEntityInput): GenericEntity
    get65128(id: String): GenericEntity
    delete65128(id: String): GenericEntity
    update65128(entity: JSON): GenericEntity
    autoComplete65128(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # EntDpt
    add65129(input: AddEntityInput): GenericEntity
    list65129(input: ListEntityInput): GenericEntity
    get65129(id: String): GenericEntity
    delete65129(id: String): GenericEntity
    update65129(entity: JSON): GenericEntity
    autoComplete65129(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # PhysioTherapyDpt
    add65130(input: AddEntityInput): GenericEntity
    list65130(input: ListEntityInput): GenericEntity
    get65130(id: String): GenericEntity
    delete65130(id: String): GenericEntity
    update65130(entity: JSON): GenericEntity
    autoComplete65130(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # OpDetails
    add65131(input: AddEntityInput): GenericEntity
    list65131(input: ListEntityInput): GenericEntity
    get65131(id: String): GenericEntity
    delete65131(id: String): GenericEntity
    update65131(entity: JSON): GenericEntity
    autoComplete65131(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SurgeryPatientInfo
    add65132(input: AddEntityInput): GenericEntity
    list65132(input: ListEntityInput): GenericEntity
    get65132(id: String): GenericEntity
    delete65132(id: String): GenericEntity
    update65132(entity: JSON): GenericEntity
    autoComplete65132(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DoctorInfo
    add65133(input: AddEntityInput): GenericEntity
    list65133(input: ListEntityInput): GenericEntity
    get65133(id: String): GenericEntity
    delete65133(id: String): GenericEntity
    update65133(entity: JSON): GenericEntity
    autoComplete65133(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # PatientsInfo
    add65134(input: AddEntityInput): GenericEntity
    list65134(input: ListEntityInput): GenericEntity
    get65134(id: String): GenericEntity
    delete65134(id: String): GenericEntity
    update65134(entity: JSON): GenericEntity
    autoComplete65134(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Medicines
    add65135(input: AddEntityInput): GenericEntity
    list65135(input: ListEntityInput): GenericEntity
    get65135(id: String): GenericEntity
    delete65135(id: String): GenericEntity
    update65135(entity: JSON): GenericEntity
    autoComplete65135(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Allopathic
    add65136(input: AddEntityInput): GenericEntity
    list65136(input: ListEntityInput): GenericEntity
    get65136(id: String): GenericEntity
    delete65136(id: String): GenericEntity
    update65136(entity: JSON): GenericEntity
    autoComplete65136(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Ayurvedic
    add65137(input: AddEntityInput): GenericEntity
    list65137(input: ListEntityInput): GenericEntity
    get65137(id: String): GenericEntity
    delete65137(id: String): GenericEntity
    update65137(entity: JSON): GenericEntity
    autoComplete65137(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Rct
    add65138(input: AddEntityInput): GenericEntity
    list65138(input: ListEntityInput): GenericEntity
    get65138(id: String): GenericEntity
    delete65138(id: String): GenericEntity
    update65138(entity: JSON): GenericEntity
    autoComplete65138(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GeneralTreatment
    add65139(input: AddEntityInput): GenericEntity
    list65139(input: ListEntityInput): GenericEntity
    get65139(id: String): GenericEntity
    delete65139(id: String): GenericEntity
    update65139(entity: JSON): GenericEntity
    autoComplete65139(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ThroatCheckup
    add65140(input: AddEntityInput): GenericEntity
    list65140(input: ListEntityInput): GenericEntity
    get65140(id: String): GenericEntity
    delete65140(id: String): GenericEntity
    update65140(entity: JSON): GenericEntity
    autoComplete65140(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # GeneralCheckup
    add65141(input: AddEntityInput): GenericEntity
    list65141(input: ListEntityInput): GenericEntity
    get65141(id: String): GenericEntity
    delete65141(id: String): GenericEntity
    update65141(entity: JSON): GenericEntity
    autoComplete65141(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # NormalTreatment
    add65142(input: AddEntityInput): GenericEntity
    list65142(input: ListEntityInput): GenericEntity
    get65142(id: String): GenericEntity
    delete65142(id: String): GenericEntity
    update65142(entity: JSON): GenericEntity
    autoComplete65142(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
