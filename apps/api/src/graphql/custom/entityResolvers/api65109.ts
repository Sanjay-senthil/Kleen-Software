import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAdventure extends RESTDataSource {
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

  // Add Adventure
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('adventure', entity);

    // Sample HTTP POST request.
    // return this.post('adventure', entity);
  }

  // Delete Adventure
  async deleteEntity(id: string) {
    return KapiCrud.delete('adventure', id);

    // Sample HTTP DELETE request.
    // return this.delete(`adventure/${id}`);
  }

  // List Adventure
  async listEntity(params: any) {
    return KapiCrud.list('adventure', params);

    // Sample HTTP GET request.
    // return this.get('adventure', params);
  }

  // Get Adventure
  async getEntity(id: string) {
    return KapiCrud.get('adventure', id);

    // Sample HTTP GET request.
    // return this.get(`adventure/${id}`);
  }

  // Update Adventure
  async updateEntity(entity) {
    return KapiCrud.update('adventure', entity);

    // Sample HTTP PATCH request.
    // return this.patch(adventure, entity);
  }

  // Auto complete for Adventure
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('adventure');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.adventure }));
  }

  // Alerts action for Adventure
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for Adventure
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for Adventure
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for Adventure
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for Adventure
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
