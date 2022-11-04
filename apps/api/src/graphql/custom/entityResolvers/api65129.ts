import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEntDpt extends RESTDataSource {
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

  // Add EntDpt
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('entDpt', entity);

    // Sample HTTP POST request.
    // return this.post('entDpt', entity);
  }

  // Delete EntDpt
  async deleteEntity(id: string) {
    return KapiCrud.delete('entDpt', id);

    // Sample HTTP DELETE request.
    // return this.delete(`entDpt/${id}`);
  }

  // List EntDpt
  async listEntity(params: any) {
    return KapiCrud.list('entDpt', params);

    // Sample HTTP GET request.
    // return this.get('entDpt', params);
  }

  // Get EntDpt
  async getEntity(id: string) {
    return KapiCrud.get('entDpt', id);

    // Sample HTTP GET request.
    // return this.get(`entDpt/${id}`);
  }

  // Update EntDpt
  async updateEntity(entity) {
    return KapiCrud.update('entDpt', entity);

    // Sample HTTP PATCH request.
    // return this.patch(entDpt, entity);
  }

  // Auto complete for EntDpt
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('entDpt');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.entDpt }));
  }
}
