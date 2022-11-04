import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiManagement extends RESTDataSource {
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

  // Add Management
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('management', entity);

    // Sample HTTP POST request.
    // return this.post('management', entity);
  }

  // Delete Management
  async deleteEntity(id: string) {
    return KapiCrud.delete('management', id);

    // Sample HTTP DELETE request.
    // return this.delete(`management/${id}`);
  }

  // List Management
  async listEntity(params: any) {
    return KapiCrud.list('management', params);

    // Sample HTTP GET request.
    // return this.get('management', params);
  }

  // Get Management
  async getEntity(id: string) {
    return KapiCrud.get('management', id);

    // Sample HTTP GET request.
    // return this.get(`management/${id}`);
  }

  // Update Management
  async updateEntity(entity) {
    return KapiCrud.update('management', entity);

    // Sample HTTP PATCH request.
    // return this.patch(management, entity);
  }

  // Auto complete for Management
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('management');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.management }));
  }

  // Allocate action for Management
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Edit action for Management
  async customAction_edit(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
