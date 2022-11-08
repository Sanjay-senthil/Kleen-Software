import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRiverSurfing extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add RiverSurfing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('riverSurfing', entity);

    // Sample HTTP POST request.
    // return this.post('riverSurfing', entity);
  }

  // Delete RiverSurfing
  async deleteEntity(id: string) {
    return KapiCrud.delete('riverSurfing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`riverSurfing/${id}`);
  }

  // List RiverSurfing
  async listEntity(params: any) {
    return KapiCrud.list('riverSurfing', params);

    // Sample HTTP GET request.
    // return this.get('riverSurfing', params);
  }

  // Get RiverSurfing
  async getEntity(id: string) {
    return KapiCrud.get('riverSurfing', id);

    // Sample HTTP GET request.
    // return this.get(`riverSurfing/${id}`);
  }

  // Update RiverSurfing
  async updateEntity(entity) {
    return KapiCrud.update('riverSurfing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(riverSurfing, entity);
  }

  // Auto complete for RiverSurfing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('riverSurfing');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.riverSurfing }));
  }

  // Alerts action for RiverSurfing
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for RiverSurfing
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for RiverSurfing
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for RiverSurfing
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for RiverSurfing
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
