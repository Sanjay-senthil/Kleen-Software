import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add61400: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61400.addEntity(input.entity, input.parent),
    }),
    list61400: (_parent, args, { dataSources }) => ({ data: dataSources.api61400.listEntity(args) }),
    get61400: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61400.getEntity(id) }),
    delete61400: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61400.deleteEntity(id) }),
    update61400: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61400.updateEntity(entity),
    }),
    autoComplete61400: (_parent, params, { dataSources }) => ({
      data: dataSources.api61400.getAutoCompleteValues(params.input),
    }),

    // Vehicle Resolvers
    add61441: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61441.addEntity(input.entity, input.parent),
    }),
    list61441: (_parent, args, { dataSources }) => ({ data: dataSources.api61441.listEntity(args) }),
    get61441: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61441.getEntity(id) }),
    delete61441: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61441.deleteEntity(id) }),
    update61441: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61441.updateEntity(entity),
    }),
    autoComplete61441: (_parent, params, { dataSources }) => ({
      data: dataSources.api61441.getAutoCompleteValues(params.input),
    }),

    // VehicleBrand Resolvers
    add61442: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61442.addEntity(input.entity, input.parent),
    }),
    list61442: (_parent, args, { dataSources }) => ({ data: dataSources.api61442.listEntity(args) }),
    get61442: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61442.getEntity(id) }),
    delete61442: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61442.deleteEntity(id) }),
    update61442: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61442.updateEntity(entity),
    }),
    autoComplete61442: (_parent, params, { dataSources }) => ({
      data: dataSources.api61442.getAutoCompleteValues(params.input),
    }),

    // VehicleModel Resolvers
    add61443: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61443.addEntity(input.entity, input.parent),
    }),
    list61443: (_parent, args, { dataSources }) => ({ data: dataSources.api61443.listEntity(args) }),
    get61443: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61443.getEntity(id) }),
    delete61443: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61443.deleteEntity(id) }),
    update61443: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61443.updateEntity(entity),
    }),
    autoComplete61443: (_parent, params, { dataSources }) => ({
      data: dataSources.api61443.getAutoCompleteValues(params.input),
    }),

    // ServiceDescription Resolvers
    add61641: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61641.addEntity(input.entity, input.parent),
    }),
    list61641: (_parent, args, { dataSources }) => ({ data: dataSources.api61641.listEntity(args) }),
    get61641: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61641.getEntity(id) }),
    delete61641: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61641.deleteEntity(id) }),
    update61641: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61641.updateEntity(entity),
    }),
    autoComplete61641: (_parent, params, { dataSources }) => ({
      data: dataSources.api61641.getAutoCompleteValues(params.input),
    }),

    // DatePerformed Resolvers
    add61642: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61642.addEntity(input.entity, input.parent),
    }),
    list61642: (_parent, args, { dataSources }) => ({ data: dataSources.api61642.listEntity(args) }),
    get61642: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61642.getEntity(id) }),
    delete61642: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61642.deleteEntity(id) }),
    update61642: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61642.updateEntity(entity),
    }),
    autoComplete61642: (_parent, params, { dataSources }) => ({
      data: dataSources.api61642.getAutoCompleteValues(params.input),
    }),

    // EstimatedCost Resolvers
    add61643: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61643.addEntity(input.entity, input.parent),
    }),
    list61643: (_parent, args, { dataSources }) => ({ data: dataSources.api61643.listEntity(args) }),
    get61643: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61643.getEntity(id) }),
    delete61643: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61643.deleteEntity(id) }),
    update61643: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61643.updateEntity(entity),
    }),
    autoComplete61643: (_parent, params, { dataSources }) => ({
      data: dataSources.api61643.getAutoCompleteValues(params.input),
    }),

    // DowntimeHours Resolvers
    add61644: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61644.addEntity(input.entity, input.parent),
    }),
    list61644: (_parent, args, { dataSources }) => ({ data: dataSources.api61644.listEntity(args) }),
    get61644: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61644.getEntity(id) }),
    delete61644: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61644.deleteEntity(id) }),
    update61644: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61644.updateEntity(entity),
    }),
    autoComplete61644: (_parent, params, { dataSources }) => ({
      data: dataSources.api61644.getAutoCompleteValues(params.input),
    }),

    // ServiceCost Resolvers
    add61645: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61645.addEntity(input.entity, input.parent),
    }),
    list61645: (_parent, args, { dataSources }) => ({ data: dataSources.api61645.listEntity(args) }),
    get61645: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61645.getEntity(id) }),
    delete61645: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61645.deleteEntity(id) }),
    update61645: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61645.updateEntity(entity),
    }),
    autoComplete61645: (_parent, params, { dataSources }) => ({
      data: dataSources.api61645.getAutoCompleteValues(params.input),
    }),

    // DateScheduled Resolvers
    add61646: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61646.addEntity(input.entity, input.parent),
    }),
    list61646: (_parent, args, { dataSources }) => ({ data: dataSources.api61646.listEntity(args) }),
    get61646: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61646.getEntity(id) }),
    delete61646: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61646.deleteEntity(id) }),
    update61646: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61646.updateEntity(entity),
    }),
    autoComplete61646: (_parent, params, { dataSources }) => ({
      data: dataSources.api61646.getAutoCompleteValues(params.input),
    }),

    // CurrentMileage Resolvers
    add61647: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61647.addEntity(input.entity, input.parent),
    }),
    list61647: (_parent, args, { dataSources }) => ({ data: dataSources.api61647.listEntity(args) }),
    get61647: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61647.getEntity(id) }),
    delete61647: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61647.deleteEntity(id) }),
    update61647: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61647.updateEntity(entity),
    }),
    autoComplete61647: (_parent, params, { dataSources }) => ({
      data: dataSources.api61647.getAutoCompleteValues(params.input),
    }),

    // ServiceRecordType Resolvers
    add61648: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61648.addEntity(input.entity, input.parent),
    }),
    list61648: (_parent, args, { dataSources }) => ({ data: dataSources.api61648.listEntity(args) }),
    get61648: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61648.getEntity(id) }),
    delete61648: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61648.deleteEntity(id) }),
    update61648: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61648.updateEntity(entity),
    }),
    autoComplete61648: (_parent, params, { dataSources }) => ({
      data: dataSources.api61648.getAutoCompleteValues(params.input),
    }),

    // ServiceRecord Resolvers
    add61649: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61649.addEntity(input.entity, input.parent),
    }),
    list61649: (_parent, args, { dataSources }) => ({ data: dataSources.api61649.listEntity(args) }),
    get61649: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61649.getEntity(id) }),
    delete61649: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61649.deleteEntity(id) }),
    update61649: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61649.updateEntity(entity),
    }),
    autoComplete61649: (_parent, params, { dataSources }) => ({
      data: dataSources.api61649.getAutoCompleteValues(params.input),
    }),
    reportIssue61649: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api61649.customAction_reportIssue(params.input),

    // ScheduledService Resolvers
    add61650: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61650.addEntity(input.entity, input.parent),
    }),
    list61650: (_parent, args, { dataSources }) => ({ data: dataSources.api61650.listEntity(args) }),
    get61650: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61650.getEntity(id) }),
    delete61650: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61650.deleteEntity(id) }),
    update61650: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61650.updateEntity(entity),
    }),
    autoComplete61650: (_parent, params, { dataSources }) => ({
      data: dataSources.api61650.getAutoCompleteValues(params.input),
    }),
    reportIssue61650: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api61650.customAction_reportIssue(params.input),

    // CompletedService Resolvers
    add61651: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61651.addEntity(input.entity, input.parent),
    }),
    list61651: (_parent, args, { dataSources }) => ({ data: dataSources.api61651.listEntity(args) }),
    get61651: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61651.getEntity(id) }),
    delete61651: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61651.deleteEntity(id) }),
    update61651: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61651.updateEntity(entity),
    }),
    autoComplete61651: (_parent, params, { dataSources }) => ({
      data: dataSources.api61651.getAutoCompleteValues(params.input),
    }),
    reportIssue61651: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api61651.customAction_reportIssue(params.input),

    // WarrantyStatus Resolvers
    add61652: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61652.addEntity(input.entity, input.parent),
    }),
    list61652: (_parent, args, { dataSources }) => ({ data: dataSources.api61652.listEntity(args) }),
    get61652: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61652.getEntity(id) }),
    delete61652: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61652.deleteEntity(id) }),
    update61652: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61652.updateEntity(entity),
    }),
    autoComplete61652: (_parent, params, { dataSources }) => ({
      data: dataSources.api61652.getAutoCompleteValues(params.input),
    }),

    // VehicleWarranty Resolvers
    add61653: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api61653.addEntity(input.entity, input.parent),
    }),
    list61653: (_parent, args, { dataSources }) => ({ data: dataSources.api61653.listEntity(args) }),
    get61653: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61653.getEntity(id) }),
    delete61653: (_parent, { id }, { dataSources }) => ({ data: dataSources.api61653.deleteEntity(id) }),
    update61653: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api61653.updateEntity(entity),
    }),
    autoComplete61653: (_parent, params, { dataSources }) => ({
      data: dataSources.api61653.getAutoCompleteValues(params.input),
    }),

    // Department Resolvers
    add62906: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62906.addEntity(input.entity, input.parent),
    }),
    list62906: (_parent, args, { dataSources }) => ({ data: dataSources.api62906.listEntity(args) }),
    get62906: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62906.getEntity(id) }),
    delete62906: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62906.deleteEntity(id) }),
    update62906: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62906.updateEntity(entity),
    }),
    autoComplete62906: (_parent, params, { dataSources }) => ({
      data: dataSources.api62906.getAutoCompleteValues(params.input),
    }),

    // Age Resolvers
    add62907: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62907.addEntity(input.entity, input.parent),
    }),
    list62907: (_parent, args, { dataSources }) => ({ data: dataSources.api62907.listEntity(args) }),
    get62907: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62907.getEntity(id) }),
    delete62907: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62907.deleteEntity(id) }),
    update62907: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62907.updateEntity(entity),
    }),
    autoComplete62907: (_parent, params, { dataSources }) => ({
      data: dataSources.api62907.getAutoCompleteValues(params.input),
    }),
    beModified62907: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api62907.customAction_beModified(params.input),

    // EmployeeName Resolvers
    add62908: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62908.addEntity(input.entity, input.parent),
    }),
    list62908: (_parent, args, { dataSources }) => ({ data: dataSources.api62908.listEntity(args) }),
    get62908: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62908.getEntity(id) }),
    delete62908: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62908.deleteEntity(id) }),
    update62908: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62908.updateEntity(entity),
    }),
    autoComplete62908: (_parent, params, { dataSources }) => ({
      data: dataSources.api62908.getAutoCompleteValues(params.input),
    }),
    addModifyName62908: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api62908.customAction_addModifyName(params.input),

    // DateOfJoining Resolvers
    add62909: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62909.addEntity(input.entity, input.parent),
    }),
    list62909: (_parent, args, { dataSources }) => ({ data: dataSources.api62909.listEntity(args) }),
    get62909: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62909.getEntity(id) }),
    delete62909: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62909.deleteEntity(id) }),
    update62909: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62909.updateEntity(entity),
    }),
    autoComplete62909: (_parent, params, { dataSources }) => ({
      data: dataSources.api62909.getAutoCompleteValues(params.input),
    }),
    modify62909: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api62909.customAction_modify(params.input),

    // EmployeeId Resolvers
    add62910: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62910.addEntity(input.entity, input.parent),
    }),
    list62910: (_parent, args, { dataSources }) => ({ data: dataSources.api62910.listEntity(args) }),
    get62910: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62910.getEntity(id) }),
    delete62910: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62910.deleteEntity(id) }),
    update62910: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62910.updateEntity(entity),
    }),
    autoComplete62910: (_parent, params, { dataSources }) => ({
      data: dataSources.api62910.getAutoCompleteValues(params.input),
    }),
    modify62910: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api62910.customAction_modify(params.input),

    // College Resolvers
    add62911: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62911.addEntity(input.entity, input.parent),
    }),
    list62911: (_parent, args, { dataSources }) => ({ data: dataSources.api62911.listEntity(args) }),
    get62911: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62911.getEntity(id) }),
    delete62911: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62911.deleteEntity(id) }),
    update62911: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62911.updateEntity(entity),
    }),
    autoComplete62911: (_parent, params, { dataSources }) => ({
      data: dataSources.api62911.getAutoCompleteValues(params.input),
    }),
    admitNewStudents62911: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api62911.customAction_admitNewStudents(params.input),

    // Staffs Resolvers
    add62913: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62913.addEntity(input.entity, input.parent),
    }),
    list62913: (_parent, args, { dataSources }) => ({ data: dataSources.api62913.listEntity(args) }),
    get62913: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62913.getEntity(id) }),
    delete62913: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62913.deleteEntity(id) }),
    update62913: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62913.updateEntity(entity),
    }),
    autoComplete62913: (_parent, params, { dataSources }) => ({
      data: dataSources.api62913.getAutoCompleteValues(params.input),
    }),

    // Students Resolvers
    add62914: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62914.addEntity(input.entity, input.parent),
    }),
    list62914: (_parent, args, { dataSources }) => ({ data: dataSources.api62914.listEntity(args) }),
    get62914: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62914.getEntity(id) }),
    delete62914: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62914.deleteEntity(id) }),
    update62914: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62914.updateEntity(entity),
    }),
    autoComplete62914: (_parent, params, { dataSources }) => ({
      data: dataSources.api62914.getAutoCompleteValues(params.input),
    }),

    // Departments Resolvers
    add62915: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api62915.addEntity(input.entity, input.parent),
    }),
    list62915: (_parent, args, { dataSources }) => ({ data: dataSources.api62915.listEntity(args) }),
    get62915: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62915.getEntity(id) }),
    delete62915: (_parent, { id }, { dataSources }) => ({ data: dataSources.api62915.deleteEntity(id) }),
    update62915: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api62915.updateEntity(entity),
    }),
    autoComplete62915: (_parent, params, { dataSources }) => ({
      data: dataSources.api62915.getAutoCompleteValues(params.input),
    }),

    // Management Resolvers
    add65092: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65092.addEntity(input.entity, input.parent),
    }),
    list65092: (_parent, args, { dataSources }) => ({ data: dataSources.api65092.listEntity(args) }),
    get65092: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65092.getEntity(id) }),
    delete65092: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65092.deleteEntity(id) }),
    update65092: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65092.updateEntity(entity),
    }),
    autoComplete65092: (_parent, params, { dataSources }) => ({
      data: dataSources.api65092.getAutoCompleteValues(params.input),
    }),
    allocate65092: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65092.customAction_allocate(params.input),
    edit65092: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65092.customAction_edit(params.input),

    // Deprt Resolvers
    add65093: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65093.addEntity(input.entity, input.parent),
    }),
    list65093: (_parent, args, { dataSources }) => ({ data: dataSources.api65093.listEntity(args) }),
    get65093: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65093.getEntity(id) }),
    delete65093: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65093.deleteEntity(id) }),
    update65093: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65093.updateEntity(entity),
    }),
    autoComplete65093: (_parent, params, { dataSources }) => ({
      data: dataSources.api65093.getAutoCompleteValues(params.input),
    }),
    allocate65093: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65093.customAction_allocate(params.input),
    modify65093: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65093.customAction_modify(params.input),
    notify65093: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65093.customAction_notify(params.input),

    // Entertainment Resolvers
    add65094: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65094.addEntity(input.entity, input.parent),
    }),
    list65094: (_parent, args, { dataSources }) => ({ data: dataSources.api65094.listEntity(args) }),
    get65094: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65094.getEntity(id) }),
    delete65094: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65094.deleteEntity(id) }),
    update65094: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65094.updateEntity(entity),
    }),
    autoComplete65094: (_parent, params, { dataSources }) => ({
      data: dataSources.api65094.getAutoCompleteValues(params.input),
    }),
    allocate65094: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65094.customAction_allocate(params.input),
    evaluate65094: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65094.customAction_evaluate(params.input),
    modify65094: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65094.customAction_modify(params.input),
    notify65094: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65094.customAction_notify(params.input),
    report65094: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65094.customAction_report(params.input),

    // Tourism Resolvers
    add65096: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65096.addEntity(input.entity, input.parent),
    }),
    list65096: (_parent, args, { dataSources }) => ({ data: dataSources.api65096.listEntity(args) }),
    get65096: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65096.getEntity(id) }),
    delete65096: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65096.deleteEntity(id) }),
    update65096: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65096.updateEntity(entity),
    }),
    autoComplete65096: (_parent, params, { dataSources }) => ({
      data: dataSources.api65096.getAutoCompleteValues(params.input),
    }),
    alerts65096: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65096.customAction_alerts(params.input),
    allocate65096: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65096.customAction_allocate(params.input),
    emergency65096: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65096.customAction_emergency(params.input),
    modify65096: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65096.customAction_modify(params.input),
    notify65096: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65096.customAction_notify(params.input),

    // Services Resolvers
    add65098: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65098.addEntity(input.entity, input.parent),
    }),
    list65098: (_parent, args, { dataSources }) => ({ data: dataSources.api65098.listEntity(args) }),
    get65098: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65098.getEntity(id) }),
    delete65098: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65098.deleteEntity(id) }),
    update65098: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65098.updateEntity(entity),
    }),
    autoComplete65098: (_parent, params, { dataSources }) => ({
      data: dataSources.api65098.getAutoCompleteValues(params.input),
    }),
    customize65098: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65098.customAction_customize(params.input),
    report65098: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65098.customAction_report(params.input),
    updateReport65098: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65098.customAction_updateReport(params.input),

    // FoodServices Resolvers
    add65099: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65099.addEntity(input.entity, input.parent),
    }),
    list65099: (_parent, args, { dataSources }) => ({ data: dataSources.api65099.listEntity(args) }),
    get65099: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65099.getEntity(id) }),
    delete65099: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65099.deleteEntity(id) }),
    update65099: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65099.updateEntity(entity),
    }),
    autoComplete65099: (_parent, params, { dataSources }) => ({
      data: dataSources.api65099.getAutoCompleteValues(params.input),
    }),
    customize65099: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65099.customAction_customize(params.input),
    report65099: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65099.customAction_report(params.input),
    updateReport65099: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65099.customAction_updateReport(params.input),

    // RoomServices Resolvers
    add65100: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65100.addEntity(input.entity, input.parent),
    }),
    list65100: (_parent, args, { dataSources }) => ({ data: dataSources.api65100.listEntity(args) }),
    get65100: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65100.getEntity(id) }),
    delete65100: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65100.deleteEntity(id) }),
    update65100: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65100.updateEntity(entity),
    }),
    autoComplete65100: (_parent, params, { dataSources }) => ({
      data: dataSources.api65100.getAutoCompleteValues(params.input),
    }),
    customize65100: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65100.customAction_customize(params.input),
    rating65100: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65100.customAction_rating(params.input),
    report65100: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65100.customAction_report(params.input),
    updateReport65100: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65100.customAction_updateReport(params.input),

    // NonVegeterianFood Resolvers
    add65101: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65101.addEntity(input.entity, input.parent),
    }),
    list65101: (_parent, args, { dataSources }) => ({ data: dataSources.api65101.listEntity(args) }),
    get65101: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65101.getEntity(id) }),
    delete65101: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65101.deleteEntity(id) }),
    update65101: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65101.updateEntity(entity),
    }),
    autoComplete65101: (_parent, params, { dataSources }) => ({
      data: dataSources.api65101.getAutoCompleteValues(params.input),
    }),
    customize65101: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65101.customAction_customize(params.input),
    report65101: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65101.customAction_report(params.input),
    updateReport65101: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65101.customAction_updateReport(params.input),

    // VegeterianFood Resolvers
    add65102: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65102.addEntity(input.entity, input.parent),
    }),
    list65102: (_parent, args, { dataSources }) => ({ data: dataSources.api65102.listEntity(args) }),
    get65102: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65102.getEntity(id) }),
    delete65102: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65102.deleteEntity(id) }),
    update65102: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65102.updateEntity(entity),
    }),
    autoComplete65102: (_parent, params, { dataSources }) => ({
      data: dataSources.api65102.getAutoCompleteValues(params.input),
    }),
    customize65102: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65102.customAction_customize(params.input),
    report65102: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65102.customAction_report(params.input),
    updateReport65102: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65102.customAction_updateReport(params.input),

    // Cleaning Resolvers
    add65103: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65103.addEntity(input.entity, input.parent),
    }),
    list65103: (_parent, args, { dataSources }) => ({ data: dataSources.api65103.listEntity(args) }),
    get65103: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65103.getEntity(id) }),
    delete65103: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65103.deleteEntity(id) }),
    update65103: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65103.updateEntity(entity),
    }),
    autoComplete65103: (_parent, params, { dataSources }) => ({
      data: dataSources.api65103.getAutoCompleteValues(params.input),
    }),
    customize65103: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65103.customAction_customize(params.input),
    rating65103: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65103.customAction_rating(params.input),
    report65103: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65103.customAction_report(params.input),
    updateReport65103: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65103.customAction_updateReport(params.input),

    // Laundry Resolvers
    add65104: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65104.addEntity(input.entity, input.parent),
    }),
    list65104: (_parent, args, { dataSources }) => ({ data: dataSources.api65104.listEntity(args) }),
    get65104: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65104.getEntity(id) }),
    delete65104: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65104.deleteEntity(id) }),
    update65104: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65104.updateEntity(entity),
    }),
    autoComplete65104: (_parent, params, { dataSources }) => ({
      data: dataSources.api65104.getAutoCompleteValues(params.input),
    }),
    customize65104: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65104.customAction_customize(params.input),
    rating65104: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65104.customAction_rating(params.input),
    report65104: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65104.customAction_report(params.input),
    updateReport65104: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65104.customAction_updateReport(params.input),

    // BoatHouse Resolvers
    add65105: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65105.addEntity(input.entity, input.parent),
    }),
    list65105: (_parent, args, { dataSources }) => ({ data: dataSources.api65105.listEntity(args) }),
    get65105: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65105.getEntity(id) }),
    delete65105: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65105.deleteEntity(id) }),
    update65105: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65105.updateEntity(entity),
    }),
    autoComplete65105: (_parent, params, { dataSources }) => ({
      data: dataSources.api65105.getAutoCompleteValues(params.input),
    }),
    allocate65105: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65105.customAction_allocate(params.input),
    evaluate65105: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65105.customAction_evaluate(params.input),
    modify65105: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65105.customAction_modify(params.input),
    notify65105: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65105.customAction_notify(params.input),
    report65105: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65105.customAction_report(params.input),

    // Games Resolvers
    add65106: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65106.addEntity(input.entity, input.parent),
    }),
    list65106: (_parent, args, { dataSources }) => ({ data: dataSources.api65106.listEntity(args) }),
    get65106: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65106.getEntity(id) }),
    delete65106: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65106.deleteEntity(id) }),
    update65106: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65106.updateEntity(entity),
    }),
    autoComplete65106: (_parent, params, { dataSources }) => ({
      data: dataSources.api65106.getAutoCompleteValues(params.input),
    }),
    allocate65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_allocate(params.input),
    evaluate65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_evaluate(params.input),
    modify65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_modify(params.input),
    notify65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_notify(params.input),
    report65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_report(params.input),
    review65106: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65106.customAction_review(params.input),

    // Pub Resolvers
    add65107: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65107.addEntity(input.entity, input.parent),
    }),
    list65107: (_parent, args, { dataSources }) => ({ data: dataSources.api65107.listEntity(args) }),
    get65107: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65107.getEntity(id) }),
    delete65107: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65107.deleteEntity(id) }),
    update65107: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65107.updateEntity(entity),
    }),
    autoComplete65107: (_parent, params, { dataSources }) => ({
      data: dataSources.api65107.getAutoCompleteValues(params.input),
    }),
    allocate65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_allocate(params.input),
    compliant65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_compliant(params.input),
    evaluate65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_evaluate(params.input),
    modify65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_modify(params.input),
    notify65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_notify(params.input),
    report65107: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65107.customAction_report(params.input),

    // Theater Resolvers
    add65108: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65108.addEntity(input.entity, input.parent),
    }),
    list65108: (_parent, args, { dataSources }) => ({ data: dataSources.api65108.listEntity(args) }),
    get65108: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65108.getEntity(id) }),
    delete65108: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65108.deleteEntity(id) }),
    update65108: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65108.updateEntity(entity),
    }),
    autoComplete65108: (_parent, params, { dataSources }) => ({
      data: dataSources.api65108.getAutoCompleteValues(params.input),
    }),
    allocate65108: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65108.customAction_allocate(params.input),
    evaluate65108: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65108.customAction_evaluate(params.input),
    modify65108: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65108.customAction_modify(params.input),
    notify65108: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65108.customAction_notify(params.input),
    report65108: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65108.customAction_report(params.input),

    // Adventure Resolvers
    add65109: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65109.addEntity(input.entity, input.parent),
    }),
    list65109: (_parent, args, { dataSources }) => ({ data: dataSources.api65109.listEntity(args) }),
    get65109: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65109.getEntity(id) }),
    delete65109: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65109.deleteEntity(id) }),
    update65109: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65109.updateEntity(entity),
    }),
    autoComplete65109: (_parent, params, { dataSources }) => ({
      data: dataSources.api65109.getAutoCompleteValues(params.input),
    }),
    alerts65109: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65109.customAction_alerts(params.input),
    allocate65109: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65109.customAction_allocate(params.input),
    emergency65109: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65109.customAction_emergency(params.input),
    modify65109: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65109.customAction_modify(params.input),
    notify65109: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65109.customAction_notify(params.input),

    // SightSeeing Resolvers
    add65110: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65110.addEntity(input.entity, input.parent),
    }),
    list65110: (_parent, args, { dataSources }) => ({ data: dataSources.api65110.listEntity(args) }),
    get65110: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65110.getEntity(id) }),
    delete65110: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65110.deleteEntity(id) }),
    update65110: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65110.updateEntity(entity),
    }),
    autoComplete65110: (_parent, params, { dataSources }) => ({
      data: dataSources.api65110.getAutoCompleteValues(params.input),
    }),
    alerts65110: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65110.customAction_alerts(params.input),
    allocate65110: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65110.customAction_allocate(params.input),
    emergency65110: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65110.customAction_emergency(params.input),
    modify65110: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65110.customAction_modify(params.input),
    notify65110: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65110.customAction_notify(params.input),

    // RiverSurfing Resolvers
    add65111: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65111.addEntity(input.entity, input.parent),
    }),
    list65111: (_parent, args, { dataSources }) => ({ data: dataSources.api65111.listEntity(args) }),
    get65111: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65111.getEntity(id) }),
    delete65111: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65111.deleteEntity(id) }),
    update65111: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65111.updateEntity(entity),
    }),
    autoComplete65111: (_parent, params, { dataSources }) => ({
      data: dataSources.api65111.getAutoCompleteValues(params.input),
    }),
    alerts65111: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65111.customAction_alerts(params.input),
    allocate65111: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65111.customAction_allocate(params.input),
    emergency65111: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65111.customAction_emergency(params.input),
    modify65111: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65111.customAction_modify(params.input),
    notify65111: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65111.customAction_notify(params.input),

    // MountainClimbing Resolvers
    add65112: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65112.addEntity(input.entity, input.parent),
    }),
    list65112: (_parent, args, { dataSources }) => ({ data: dataSources.api65112.listEntity(args) }),
    get65112: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65112.getEntity(id) }),
    delete65112: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65112.deleteEntity(id) }),
    update65112: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65112.updateEntity(entity),
    }),
    autoComplete65112: (_parent, params, { dataSources }) => ({
      data: dataSources.api65112.getAutoCompleteValues(params.input),
    }),
    alerts65112: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65112.customAction_alerts(params.input),
    allocate65112: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65112.customAction_allocate(params.input),
    emergency65112: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65112.customAction_emergency(params.input),
    modify65112: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65112.customAction_modify(params.input),
    notify65112: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65112.customAction_notify(params.input),

    // CampFire Resolvers
    add65113: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65113.addEntity(input.entity, input.parent),
    }),
    list65113: (_parent, args, { dataSources }) => ({ data: dataSources.api65113.listEntity(args) }),
    get65113: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65113.getEntity(id) }),
    delete65113: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65113.deleteEntity(id) }),
    update65113: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65113.updateEntity(entity),
    }),
    autoComplete65113: (_parent, params, { dataSources }) => ({
      data: dataSources.api65113.getAutoCompleteValues(params.input),
    }),
    alerts65113: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65113.customAction_alerts(params.input),
    allocate65113: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65113.customAction_allocate(params.input),
    emergency65113: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65113.customAction_emergency(params.input),
    modify65113: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65113.customAction_modify(params.input),
    notify65113: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65113.customAction_notify(params.input),

    // BeachViewPoint Resolvers
    add65114: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65114.addEntity(input.entity, input.parent),
    }),
    list65114: (_parent, args, { dataSources }) => ({ data: dataSources.api65114.listEntity(args) }),
    get65114: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65114.getEntity(id) }),
    delete65114: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65114.deleteEntity(id) }),
    update65114: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65114.updateEntity(entity),
    }),
    autoComplete65114: (_parent, params, { dataSources }) => ({
      data: dataSources.api65114.getAutoCompleteValues(params.input),
    }),
    alerts65114: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65114.customAction_alerts(params.input),
    allocate65114: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65114.customAction_allocate(params.input),
    emergency65114: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65114.customAction_emergency(params.input),
    modify65114: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65114.customAction_modify(params.input),
    notify65114: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65114.customAction_notify(params.input),

    // MountainViewPoint Resolvers
    add65116: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65116.addEntity(input.entity, input.parent),
    }),
    list65116: (_parent, args, { dataSources }) => ({ data: dataSources.api65116.listEntity(args) }),
    get65116: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65116.getEntity(id) }),
    delete65116: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65116.deleteEntity(id) }),
    update65116: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65116.updateEntity(entity),
    }),
    autoComplete65116: (_parent, params, { dataSources }) => ({
      data: dataSources.api65116.getAutoCompleteValues(params.input),
    }),
    alerts65116: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65116.customAction_alerts(params.input),
    allocate65116: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65116.customAction_allocate(params.input),
    emergency65116: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65116.customAction_emergency(params.input),
    modify65116: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65116.customAction_modify(params.input),
    notify65116: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api65116.customAction_notify(params.input),

    // Maintenance Resolvers
    add65117: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65117.addEntity(input.entity, input.parent),
    }),
    list65117: (_parent, args, { dataSources }) => ({ data: dataSources.api65117.listEntity(args) }),
    get65117: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65117.getEntity(id) }),
    delete65117: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65117.deleteEntity(id) }),
    update65117: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65117.updateEntity(entity),
    }),
    autoComplete65117: (_parent, params, { dataSources }) => ({
      data: dataSources.api65117.getAutoCompleteValues(params.input),
    }),

    // DoctorsDetails Resolvers
    add65118: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65118.addEntity(input.entity, input.parent),
    }),
    list65118: (_parent, args, { dataSources }) => ({ data: dataSources.api65118.listEntity(args) }),
    get65118: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65118.getEntity(id) }),
    delete65118: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65118.deleteEntity(id) }),
    update65118: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65118.updateEntity(entity),
    }),
    autoComplete65118: (_parent, params, { dataSources }) => ({
      data: dataSources.api65118.getAutoCompleteValues(params.input),
    }),

    // PatientDetails Resolvers
    add65119: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65119.addEntity(input.entity, input.parent),
    }),
    list65119: (_parent, args, { dataSources }) => ({ data: dataSources.api65119.listEntity(args) }),
    get65119: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65119.getEntity(id) }),
    delete65119: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65119.deleteEntity(id) }),
    update65119: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65119.updateEntity(entity),
    }),
    autoComplete65119: (_parent, params, { dataSources }) => ({
      data: dataSources.api65119.getAutoCompleteValues(params.input),
    }),

    // SurgicalDetails Resolvers
    add65120: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65120.addEntity(input.entity, input.parent),
    }),
    list65120: (_parent, args, { dataSources }) => ({ data: dataSources.api65120.listEntity(args) }),
    get65120: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65120.getEntity(id) }),
    delete65120: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65120.deleteEntity(id) }),
    update65120: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65120.updateEntity(entity),
    }),
    autoComplete65120: (_parent, params, { dataSources }) => ({
      data: dataSources.api65120.getAutoCompleteValues(params.input),
    }),

    // BloodBank Resolvers
    add65121: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65121.addEntity(input.entity, input.parent),
    }),
    list65121: (_parent, args, { dataSources }) => ({ data: dataSources.api65121.listEntity(args) }),
    get65121: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65121.getEntity(id) }),
    delete65121: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65121.deleteEntity(id) }),
    update65121: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65121.updateEntity(entity),
    }),
    autoComplete65121: (_parent, params, { dataSources }) => ({
      data: dataSources.api65121.getAutoCompleteValues(params.input),
    }),

    // HospitalDpt Resolvers
    add65122: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65122.addEntity(input.entity, input.parent),
    }),
    list65122: (_parent, args, { dataSources }) => ({ data: dataSources.api65122.listEntity(args) }),
    get65122: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65122.getEntity(id) }),
    delete65122: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65122.deleteEntity(id) }),
    update65122: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65122.updateEntity(entity),
    }),
    autoComplete65122: (_parent, params, { dataSources }) => ({
      data: dataSources.api65122.getAutoCompleteValues(params.input),
    }),

    // BloodTypes Resolvers
    add65123: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65123.addEntity(input.entity, input.parent),
    }),
    list65123: (_parent, args, { dataSources }) => ({ data: dataSources.api65123.listEntity(args) }),
    get65123: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65123.getEntity(id) }),
    delete65123: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65123.deleteEntity(id) }),
    update65123: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65123.updateEntity(entity),
    }),
    autoComplete65123: (_parent, params, { dataSources }) => ({
      data: dataSources.api65123.getAutoCompleteValues(params.input),
    }),

    // PatientInfo Resolvers
    add65124: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65124.addEntity(input.entity, input.parent),
    }),
    list65124: (_parent, args, { dataSources }) => ({ data: dataSources.api65124.listEntity(args) }),
    get65124: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65124.getEntity(id) }),
    delete65124: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65124.deleteEntity(id) }),
    update65124: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65124.updateEntity(entity),
    }),
    autoComplete65124: (_parent, params, { dataSources }) => ({
      data: dataSources.api65124.getAutoCompleteValues(params.input),
    }),

    // BloodCheckUp Resolvers
    add65125: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65125.addEntity(input.entity, input.parent),
    }),
    list65125: (_parent, args, { dataSources }) => ({ data: dataSources.api65125.listEntity(args) }),
    get65125: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65125.getEntity(id) }),
    delete65125: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65125.deleteEntity(id) }),
    update65125: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65125.updateEntity(entity),
    }),
    autoComplete65125: (_parent, params, { dataSources }) => ({
      data: dataSources.api65125.getAutoCompleteValues(params.input),
    }),

    // GeneralDoctors Resolvers
    add65126: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65126.addEntity(input.entity, input.parent),
    }),
    list65126: (_parent, args, { dataSources }) => ({ data: dataSources.api65126.listEntity(args) }),
    get65126: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65126.getEntity(id) }),
    delete65126: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65126.deleteEntity(id) }),
    update65126: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65126.updateEntity(entity),
    }),
    autoComplete65126: (_parent, params, { dataSources }) => ({
      data: dataSources.api65126.getAutoCompleteValues(params.input),
    }),

    // SurgeryDoctors Resolvers
    add65127: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65127.addEntity(input.entity, input.parent),
    }),
    list65127: (_parent, args, { dataSources }) => ({ data: dataSources.api65127.listEntity(args) }),
    get65127: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65127.getEntity(id) }),
    delete65127: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65127.deleteEntity(id) }),
    update65127: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65127.updateEntity(entity),
    }),
    autoComplete65127: (_parent, params, { dataSources }) => ({
      data: dataSources.api65127.getAutoCompleteValues(params.input),
    }),

    // DentalDpt Resolvers
    add65128: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65128.addEntity(input.entity, input.parent),
    }),
    list65128: (_parent, args, { dataSources }) => ({ data: dataSources.api65128.listEntity(args) }),
    get65128: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65128.getEntity(id) }),
    delete65128: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65128.deleteEntity(id) }),
    update65128: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65128.updateEntity(entity),
    }),
    autoComplete65128: (_parent, params, { dataSources }) => ({
      data: dataSources.api65128.getAutoCompleteValues(params.input),
    }),

    // EntDpt Resolvers
    add65129: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65129.addEntity(input.entity, input.parent),
    }),
    list65129: (_parent, args, { dataSources }) => ({ data: dataSources.api65129.listEntity(args) }),
    get65129: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65129.getEntity(id) }),
    delete65129: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65129.deleteEntity(id) }),
    update65129: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65129.updateEntity(entity),
    }),
    autoComplete65129: (_parent, params, { dataSources }) => ({
      data: dataSources.api65129.getAutoCompleteValues(params.input),
    }),

    // PhysioTherapyDpt Resolvers
    add65130: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65130.addEntity(input.entity, input.parent),
    }),
    list65130: (_parent, args, { dataSources }) => ({ data: dataSources.api65130.listEntity(args) }),
    get65130: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65130.getEntity(id) }),
    delete65130: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65130.deleteEntity(id) }),
    update65130: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65130.updateEntity(entity),
    }),
    autoComplete65130: (_parent, params, { dataSources }) => ({
      data: dataSources.api65130.getAutoCompleteValues(params.input),
    }),

    // OpDetails Resolvers
    add65131: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65131.addEntity(input.entity, input.parent),
    }),
    list65131: (_parent, args, { dataSources }) => ({ data: dataSources.api65131.listEntity(args) }),
    get65131: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65131.getEntity(id) }),
    delete65131: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65131.deleteEntity(id) }),
    update65131: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65131.updateEntity(entity),
    }),
    autoComplete65131: (_parent, params, { dataSources }) => ({
      data: dataSources.api65131.getAutoCompleteValues(params.input),
    }),

    // SurgeryPatientInfo Resolvers
    add65132: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65132.addEntity(input.entity, input.parent),
    }),
    list65132: (_parent, args, { dataSources }) => ({ data: dataSources.api65132.listEntity(args) }),
    get65132: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65132.getEntity(id) }),
    delete65132: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65132.deleteEntity(id) }),
    update65132: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65132.updateEntity(entity),
    }),
    autoComplete65132: (_parent, params, { dataSources }) => ({
      data: dataSources.api65132.getAutoCompleteValues(params.input),
    }),

    // DoctorInfo Resolvers
    add65133: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65133.addEntity(input.entity, input.parent),
    }),
    list65133: (_parent, args, { dataSources }) => ({ data: dataSources.api65133.listEntity(args) }),
    get65133: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65133.getEntity(id) }),
    delete65133: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65133.deleteEntity(id) }),
    update65133: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65133.updateEntity(entity),
    }),
    autoComplete65133: (_parent, params, { dataSources }) => ({
      data: dataSources.api65133.getAutoCompleteValues(params.input),
    }),

    // PatientsInfo Resolvers
    add65134: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65134.addEntity(input.entity, input.parent),
    }),
    list65134: (_parent, args, { dataSources }) => ({ data: dataSources.api65134.listEntity(args) }),
    get65134: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65134.getEntity(id) }),
    delete65134: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65134.deleteEntity(id) }),
    update65134: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65134.updateEntity(entity),
    }),
    autoComplete65134: (_parent, params, { dataSources }) => ({
      data: dataSources.api65134.getAutoCompleteValues(params.input),
    }),

    // Medicines Resolvers
    add65135: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65135.addEntity(input.entity, input.parent),
    }),
    list65135: (_parent, args, { dataSources }) => ({ data: dataSources.api65135.listEntity(args) }),
    get65135: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65135.getEntity(id) }),
    delete65135: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65135.deleteEntity(id) }),
    update65135: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65135.updateEntity(entity),
    }),
    autoComplete65135: (_parent, params, { dataSources }) => ({
      data: dataSources.api65135.getAutoCompleteValues(params.input),
    }),

    // Allopathic Resolvers
    add65136: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65136.addEntity(input.entity, input.parent),
    }),
    list65136: (_parent, args, { dataSources }) => ({ data: dataSources.api65136.listEntity(args) }),
    get65136: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65136.getEntity(id) }),
    delete65136: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65136.deleteEntity(id) }),
    update65136: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65136.updateEntity(entity),
    }),
    autoComplete65136: (_parent, params, { dataSources }) => ({
      data: dataSources.api65136.getAutoCompleteValues(params.input),
    }),

    // Ayurvedic Resolvers
    add65137: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65137.addEntity(input.entity, input.parent),
    }),
    list65137: (_parent, args, { dataSources }) => ({ data: dataSources.api65137.listEntity(args) }),
    get65137: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65137.getEntity(id) }),
    delete65137: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65137.deleteEntity(id) }),
    update65137: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65137.updateEntity(entity),
    }),
    autoComplete65137: (_parent, params, { dataSources }) => ({
      data: dataSources.api65137.getAutoCompleteValues(params.input),
    }),

    // Rct Resolvers
    add65138: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65138.addEntity(input.entity, input.parent),
    }),
    list65138: (_parent, args, { dataSources }) => ({ data: dataSources.api65138.listEntity(args) }),
    get65138: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65138.getEntity(id) }),
    delete65138: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65138.deleteEntity(id) }),
    update65138: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65138.updateEntity(entity),
    }),
    autoComplete65138: (_parent, params, { dataSources }) => ({
      data: dataSources.api65138.getAutoCompleteValues(params.input),
    }),

    // GeneralTreatment Resolvers
    add65139: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65139.addEntity(input.entity, input.parent),
    }),
    list65139: (_parent, args, { dataSources }) => ({ data: dataSources.api65139.listEntity(args) }),
    get65139: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65139.getEntity(id) }),
    delete65139: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65139.deleteEntity(id) }),
    update65139: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65139.updateEntity(entity),
    }),
    autoComplete65139: (_parent, params, { dataSources }) => ({
      data: dataSources.api65139.getAutoCompleteValues(params.input),
    }),

    // ThroatCheckup Resolvers
    add65140: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65140.addEntity(input.entity, input.parent),
    }),
    list65140: (_parent, args, { dataSources }) => ({ data: dataSources.api65140.listEntity(args) }),
    get65140: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65140.getEntity(id) }),
    delete65140: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65140.deleteEntity(id) }),
    update65140: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65140.updateEntity(entity),
    }),
    autoComplete65140: (_parent, params, { dataSources }) => ({
      data: dataSources.api65140.getAutoCompleteValues(params.input),
    }),

    // GeneralCheckup Resolvers
    add65141: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65141.addEntity(input.entity, input.parent),
    }),
    list65141: (_parent, args, { dataSources }) => ({ data: dataSources.api65141.listEntity(args) }),
    get65141: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65141.getEntity(id) }),
    delete65141: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65141.deleteEntity(id) }),
    update65141: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65141.updateEntity(entity),
    }),
    autoComplete65141: (_parent, params, { dataSources }) => ({
      data: dataSources.api65141.getAutoCompleteValues(params.input),
    }),

    // NormalTreatment Resolvers
    add65142: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api65142.addEntity(input.entity, input.parent),
    }),
    list65142: (_parent, args, { dataSources }) => ({ data: dataSources.api65142.listEntity(args) }),
    get65142: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65142.getEntity(id) }),
    delete65142: (_parent, { id }, { dataSources }) => ({ data: dataSources.api65142.deleteEntity(id) }),
    update65142: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api65142.updateEntity(entity),
    }),
    autoComplete65142: (_parent, params, { dataSources }) => ({
      data: dataSources.api65142.getAutoCompleteValues(params.input),
    }),
  },
};
