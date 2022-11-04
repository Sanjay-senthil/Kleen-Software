import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBeachViewPoint extends RESTDataSource {
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

  // Add BeachViewPoint
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('beachViewPoint', entity);

    // Sample HTTP POST request.
    // return this.post('beachViewPoint', entity);
  }

  // Delete BeachViewPoint
  async deleteEntity(id: string) {
    return KapiCrud.delete('beachViewPoint', id);

    // Sample HTTP DELETE request.
    // return this.delete(`beachViewPoint/${id}`);
  }

  // List BeachViewPoint
  async listEntity(params: any) {
    return KapiCrud.list('beachViewPoint', params);

    // Sample HTTP GET request.
    // return this.get('beachViewPoint', params);
  }

  // Get BeachViewPoint
  async getEntity(id: string) {
    return KapiCrud.get('beachViewPoint', id);

    // Sample HTTP GET request.
    // return this.get(`beachViewPoint/${id}`);
  }

  // Update BeachViewPoint
  async updateEntity(entity) {
    return KapiCrud.update('beachViewPoint', entity);

    // Sample HTTP PATCH request.
    // return this.patch(beachViewPoint, entity);
  }

  // Auto complete for BeachViewPoint
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('beachViewPoint');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.beachViewPoint }));
  }

  // Alerts action for BeachViewPoint
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for BeachViewPoint
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for BeachViewPoint
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for BeachViewPoint
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for BeachViewPoint
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
