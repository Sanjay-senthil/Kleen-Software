import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMaintenance extends RESTDataSource {
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

  // Add Maintenance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('maintenance', entity);

    // Sample HTTP POST request.
    // return this.post('maintenance', entity);
  }

  // Delete Maintenance
  async deleteEntity(id: string) {
    return KapiCrud.delete('maintenance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`maintenance/${id}`);
  }

  // List Maintenance
  async listEntity(params: any) {
    return KapiCrud.list('maintenance', params);

    // Sample HTTP GET request.
    // return this.get('maintenance', params);
  }

  // Get Maintenance
  async getEntity(id: string) {
    return KapiCrud.get('maintenance', id);

    // Sample HTTP GET request.
    // return this.get(`maintenance/${id}`);
  }

  // Update Maintenance
  async updateEntity(entity) {
    return KapiCrud.update('maintenance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(maintenance, entity);
  }

  // Auto complete for Maintenance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('maintenance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.maintenance }));
  }
}
