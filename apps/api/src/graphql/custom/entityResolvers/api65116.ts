import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMountainViewPoint extends RESTDataSource {
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

  // Add MountainViewPoint
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('mountainViewPoint', entity);

    // Sample HTTP POST request.
    // return this.post('mountainViewPoint', entity);
  }

  // Delete MountainViewPoint
  async deleteEntity(id: string) {
    return KapiCrud.delete('mountainViewPoint', id);

    // Sample HTTP DELETE request.
    // return this.delete(`mountainViewPoint/${id}`);
  }

  // List MountainViewPoint
  async listEntity(params: any) {
    return KapiCrud.list('mountainViewPoint', params);

    // Sample HTTP GET request.
    // return this.get('mountainViewPoint', params);
  }

  // Get MountainViewPoint
  async getEntity(id: string) {
    return KapiCrud.get('mountainViewPoint', id);

    // Sample HTTP GET request.
    // return this.get(`mountainViewPoint/${id}`);
  }

  // Update MountainViewPoint
  async updateEntity(entity) {
    return KapiCrud.update('mountainViewPoint', entity);

    // Sample HTTP PATCH request.
    // return this.patch(mountainViewPoint, entity);
  }

  // Auto complete for MountainViewPoint
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('mountainViewPoint');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.mountainViewPoint }));
  }

  // Alerts action for MountainViewPoint
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for MountainViewPoint
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for MountainViewPoint
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for MountainViewPoint
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for MountainViewPoint
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
