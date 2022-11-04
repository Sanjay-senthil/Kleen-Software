/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    crossLinking: JSON
    format: JSON
    results: JSON
    series: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    latestRequestTimestamp: Float
    pagination: JSON
    strategy: String
  }

  input DataListingArgs {
    attributes: JSON!
    entity: String!
    filters: JSON
    latestRequestTimestamp: Float
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

  type Filters {
    accessLevel: AccessLevel!
    name: String!
    statisticalType: String!
  }

  type WorkflowFiltersResult {
    filters: [Filters!]!
  }

    extend type Query {
          # Widget Summary
    # View: vehicleDetail
    # Widget: Vehicle Summary
    # Widget type: behavior
    entity_detail_52e18549_ec43_438d_accd_09e57adba7e9(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Vehicle Detail
    # Widget: Scheduled Service Records
    # Thing: ScheduledService
    # Attributes: serviceDescription, serviceRecordType, estimatedCost
    # Widget type: goal
    object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Insurance
    # Widget: Table of Insurance
    # Thing: Bank
    # Attributes: bank, insurance
    # Widget type: goal
    object_listing_0b79bfe3_3751_416d_afdb_56368f570184(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Widget 1
    # Thing: employeeName
    # Attributes: EmployeeId, EmployeeName, Age, Department
    object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Maintenance Report
    # Thing: maintenance
    # Attributes: Maintenance
    object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Deparment
    # Thing: management
    # Attributes: Deprt, Management
    object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Service
    # Widget: Services Table
    # Thing: Services
    # Attributes: foodServices, roomServices
    # Widget type: goal
    object_listing_6652108c_5a53_4e63_a76f_6784340429ce(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Entertainment
    # Widget: Entertainment Table
    # Thing: Entertainment
    # Attributes: deprt, entertainment, services, tourism, games, pub, theater, boatHouse
    # Widget type: goal
    object_listing_765f387f_c23f_47b9_91a2_d7bf11537869(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Service Table
    # Thing: services
    # Attributes: Deprt, Services
    object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Loan
    # Widget: Table of Loan
    # Thing: Bank
    # Attributes: bank, loan
    # Widget type: goal
    object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Health Report
    # Thing: bank
    # Attributes: Bank, Insurance
    object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Hospital Management
    # Widget: Hospital Maintenance 
    # Thing: Maintenance
    # Attributes: maintenance, doctorsDetails, medicines, patientDetails, hospitalDpt
    # Widget type: goal
    object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Vehicle Inventory
    # Widget: Table of Vehicle 1
    # Thing: Vehicle
    # Attributes: vehicle, vehicleModel, vehicleBrand
    # Widget type: goal
    object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: College DB
    # Widget: College
    # Thing: College
    # Attributes: departments, staffs, students
    # Widget type: goal
    object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Vehicle Detail
    # Widget: Completed Service Records
    # Thing: CompletedService
    # Attributes: serviceDescription, serviceRecordType, downtimeHours
    # Widget type: goal
    object_listing_e915eed6_556f_4343_ba04_004d1e429082(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Home Loan
    # Thing: bank
    # Attributes: Loan, Bank
    object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Management
    # Widget: Managing Table
    # Thing: Management
    # Attributes: management, deprt
    # Widget type: goal
    object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Medicine Report
    # Value: ayurvedic - Total Count
    # Group by: allopathic - No Aggregation
    widget_04315240_b0ab_4990_8bfe_a10b3d05f98a(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Doctors Info
    # Value: surgeryDoctors - Total Count
    # Group by: generalDoctors - No Aggregation
    widget_097af69f_2455_4993_b0e5_62cb4f50c50e(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Service Record Warranty Coverage
    # Value: serviceRecord - Total Count
    # Group by: serviceRecordType - No Aggregation
    widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Games List
    # Value: games - Total Count
    # Group by: pub - No Aggregation
    widget_175e5113_b3a2_4dd7_904a_db2d69b801f5(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Service Cost
    # Value: serviceCost - Total Count
    # Group by: serviceDescription - No Aggregation
    widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Comparing Pub
    # Value: pub - Total Count
    # Group by: games - No Aggregation
    widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Long term
    # Value: loan - Total Count
    # Group by: insurance - No Aggregation
    widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Warranty Status Breakdown
    # Value: vehicle - Total Count
    # Group by: warrantyStatus - No Aggregation
    widget_28625961_64d7_424c_bf41_9ef87e476c8f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Widget 1
    # Value: employeeId - No Aggregation
    # Group by: employeeName - No Aggregation
    widget_28cc8c50_1f73_4589_a015_7e039b786521(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sight Seeing Comparision
    # Value: sightSeeing - Total Count
    # Group by: adventure - No Aggregation
    widget_2955b638_00b8_4d4f_8233_41b85184c801(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Pub Classification
    # Value: pub - Total Count
    # Group by: games - No Aggregation
    widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Surgery Details
    # Value: doctorInfo - Total Count
    # Group by: patientsInfo - No Aggregation
    widget_3865655c_a83f_4848_b963_21942f33b3d2(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Pub List
    # Value: pub - Total Count
    # Group by: games - No Aggregation
    widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Widget 2
    # Value: employeeId - Total Count
    # Group by: age - No Aggregation
    widget_4680d179_a146_49c2_94e5_1f8d89c36505(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Comp Pub by Games
    # Value: games - Total Count
    # Group by: pub - No Aggregation
    widget_5081d20a_c065_4439_99e0_9b55549a7e7b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Blood Bank
    # Value: bloodTypes - Total Count
    # Group by: bloodCheckUp - No Aggregation
    widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Dental 
    # Value: rct - Total Count
    # Group by: generalTreatment - No Aggregation
    widget_7af0c100_c352_463e_9633_0a0447cec0f7(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Room Service List
    # Value: roomServices - No Aggregation
    # Group by: foodServices - No Aggregation
    widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Agriculture loan
    # Value: homeLoan - Total Count
    # Group by: agricultureLoan - No Aggregation
    widget_838a2038_360a_439d_9b35_a580ab127715(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Total Mountain Climbing
    # Value: mountainClimbing - Total Count
    # Group by: riverSurfing - No Aggregation
    widget_8f597d1f_2478_4ba2_b43c_2c230172ca99(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: PUB Rare
    # Value: pub - Total Count
    # Group by: games - No Aggregation
    widget_9a53f00f_2d78_4680_8066_4833234fede9(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Comparing games
    # Value: games - Total Count
    # Group by: pub - No Aggregation
    widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Games
    # Value: games - Total Count
    # Group by: pub - No Aggregation
    widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Comp Games by Pub
    # Value: pub - Total Count
    # Group by: games - No Aggregation
    widget_aeb87860_cf14_44fa_b6e1_4883a4967627(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Mileage Trend Compared to Downtime
    # Value: currentMileage - Change (in percentage)
    # Group by: timestamp - No Aggregation
    widget_b92f69e9_2e6a_42fe_b640_4660be090e68(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Medicines
    # Value: allopathic - Total Count
    # Group by: ayurvedic - No Aggregation
    widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: ENT
    # Value: throatCheckup - Total Count
    # Group by: generalCheckup - No Aggregation
    widget_c0edd327_8041_4e8a_b108_7bbf9debdb78(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Agriculture loan
    # Value: insurance - Total Count
    # Group by: loan - No Aggregation
    widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Widget 1
    # Value: currentMileage - Max
    # Group by: vehicleWarranty - No Aggregation
    widget_d167adac_ecb5_4ece_8fec_212cc0862287(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Rare River Surfing
    # Value: riverSurfing - Total Count
    # Group by: mountainClimbing - No Aggregation
    widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Doctors info
    # Value: surgeryDoctors - Total Count
    # Group by: generalDoctors - No Aggregation
    widget_e60c1092_8cba_4ba6_8a09_332660264c13(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Rare Sight Seeing
    # Value: sightSeeing - Total Count
    # Group by: adventure - No Aggregation
    widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Tourism List
    # Value: tourism - No Aggregation
    # Group by: services - No Aggregation
    widget_f166f0f6_3747_4fd0_8440_823ec9798a18(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Rare Games
    # Value: games - Total Count
    # Group by: pub - No Aggregation
    widget_f17c2a24_d9d0_4c38_9a38_916463c8740e(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Rare Vegeterian Food
    # Value: vegeterianFood - Total Count
    # Group by: nonVegeterianFood - No Aggregation
    widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sight Seeing Adventure
    # Value: sightSeeing - Total Count
    # Group by: adventure - No Aggregation
    widget_fda8bec5_0887_41ba_9994_e09fae8e4b80(input: DataAggregationArgs): GraphResult


    widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics558bc4b0_231c_430f_b842_a120f29daaae(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics77e5b90b_11cc_4705_803c_d7252da56097(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Student Name
    # Value: students
    widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Students Class
    # Value: departments
    widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Filter Bar
    # View: entertainment
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303: WorkflowFiltersResult

    # Filter Bar
    # View: vehicleInventory
    # Widget: Vehicles Filter
    # Widget type: behavior
    workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2: WorkflowFiltersResult

    # Filter Bar
    # View: service
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5: WorkflowFiltersResult

    # Filter Bar
    # View: management
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e: WorkflowFiltersResult

    # Filter Bar
    # View: hospitalManagement
    # Widget: Filter 
    # Widget type: behavior
    workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419: WorkflowFiltersResult

    # Filter Bar
    # View: loan
    # Widget: Loan Filter 
    # Widget type: behavior
    workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94: WorkflowFiltersResult

    # Filter Bar
    # View: insurance
    # Widget: Filter 
    # Widget type: behavior
    workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6: WorkflowFiltersResult
    }
  `;
