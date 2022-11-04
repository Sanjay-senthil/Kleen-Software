import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSightSeeing extends RESTDataSource {
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

  // Add SightSeeing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sightSeeing', entity);

    // Sample HTTP POST request.
    // return this.post('sightSeeing', entity);
  }

  // Delete SightSeeing
  async deleteEntity(id: string) {
    return KapiCrud.delete('sightSeeing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`sightSeeing/${id}`);
  }

  // List SightSeeing
  async listEntity(params: any) {
    return KapiCrud.list('sightSeeing', params);

    // Sample HTTP GET request.
    // return this.get('sightSeeing', params);
  }

  // Get SightSeeing
  async getEntity(id: string) {
    return KapiCrud.get('sightSeeing', id);

    // Sample HTTP GET request.
    // return this.get(`sightSeeing/${id}`);
  }

  // Update SightSeeing
  async updateEntity(entity) {
    return KapiCrud.update('sightSeeing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(sightSeeing, entity);
  }

  // Auto complete for SightSeeing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sightSeeing');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.sightSeeing }));
  }

  // Alerts action for SightSeeing
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for SightSeeing
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for SightSeeing
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for SightSeeing
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for SightSeeing
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
