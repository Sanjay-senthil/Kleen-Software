import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMountainClimbing extends RESTDataSource {
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

  // Add MountainClimbing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('mountainClimbing', entity);

    // Sample HTTP POST request.
    // return this.post('mountainClimbing', entity);
  }

  // Delete MountainClimbing
  async deleteEntity(id: string) {
    return KapiCrud.delete('mountainClimbing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`mountainClimbing/${id}`);
  }

  // List MountainClimbing
  async listEntity(params: any) {
    return KapiCrud.list('mountainClimbing', params);

    // Sample HTTP GET request.
    // return this.get('mountainClimbing', params);
  }

  // Get MountainClimbing
  async getEntity(id: string) {
    return KapiCrud.get('mountainClimbing', id);

    // Sample HTTP GET request.
    // return this.get(`mountainClimbing/${id}`);
  }

  // Update MountainClimbing
  async updateEntity(entity) {
    return KapiCrud.update('mountainClimbing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(mountainClimbing, entity);
  }

  // Auto complete for MountainClimbing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('mountainClimbing');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.mountainClimbing }));
  }

  // Alerts action for MountainClimbing
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for MountainClimbing
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for MountainClimbing
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for MountainClimbing
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for MountainClimbing
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
