import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAyurvedic extends RESTDataSource {
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

  // Add Ayurvedic
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ayurvedic', entity);

    // Sample HTTP POST request.
    // return this.post('ayurvedic', entity);
  }

  // Delete Ayurvedic
  async deleteEntity(id: string) {
    return KapiCrud.delete('ayurvedic', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ayurvedic/${id}`);
  }

  // List Ayurvedic
  async listEntity(params: any) {
    return KapiCrud.list('ayurvedic', params);

    // Sample HTTP GET request.
    // return this.get('ayurvedic', params);
  }

  // Get Ayurvedic
  async getEntity(id: string) {
    return KapiCrud.get('ayurvedic', id);

    // Sample HTTP GET request.
    // return this.get(`ayurvedic/${id}`);
  }

  // Update Ayurvedic
  async updateEntity(entity) {
    return KapiCrud.update('ayurvedic', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ayurvedic, entity);
  }

  // Auto complete for Ayurvedic
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ayurvedic');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.ayurvedic }));
  }
}
