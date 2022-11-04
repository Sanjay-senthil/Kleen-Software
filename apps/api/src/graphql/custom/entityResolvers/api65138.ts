import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRct extends RESTDataSource {
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

  // Add Rct
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('rct', entity);

    // Sample HTTP POST request.
    // return this.post('rct', entity);
  }

  // Delete Rct
  async deleteEntity(id: string) {
    return KapiCrud.delete('rct', id);

    // Sample HTTP DELETE request.
    // return this.delete(`rct/${id}`);
  }

  // List Rct
  async listEntity(params: any) {
    return KapiCrud.list('rct', params);

    // Sample HTTP GET request.
    // return this.get('rct', params);
  }

  // Get Rct
  async getEntity(id: string) {
    return KapiCrud.get('rct', id);

    // Sample HTTP GET request.
    // return this.get(`rct/${id}`);
  }

  // Update Rct
  async updateEntity(entity) {
    return KapiCrud.update('rct', entity);

    // Sample HTTP PATCH request.
    // return this.patch(rct, entity);
  }

  // Auto complete for Rct
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('rct');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.rct }));
  }
}
