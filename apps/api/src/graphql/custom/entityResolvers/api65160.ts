import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCash extends RESTDataSource {
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

  // Add Cash
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cash', entity);

    // Sample HTTP POST request.
    // return this.post('cash', entity);
  }

  // Delete Cash
  async deleteEntity(id: string) {
    return KapiCrud.delete('cash', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cash/${id}`);
  }

  // List Cash
  async listEntity(params: any) {
    return KapiCrud.list('cash', params);

    // Sample HTTP GET request.
    // return this.get('cash', params);
  }

  // Get Cash
  async getEntity(id: string) {
    return KapiCrud.get('cash', id);

    // Sample HTTP GET request.
    // return this.get(`cash/${id}`);
  }

  // Update Cash
  async updateEntity(entity) {
    return KapiCrud.update('cash', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cash, entity);
  }

  // Auto complete for Cash
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cash');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.cash }));
  }
}
