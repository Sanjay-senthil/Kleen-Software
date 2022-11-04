import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAllopathic extends RESTDataSource {
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

  // Add Allopathic
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('allopathic', entity);

    // Sample HTTP POST request.
    // return this.post('allopathic', entity);
  }

  // Delete Allopathic
  async deleteEntity(id: string) {
    return KapiCrud.delete('allopathic', id);

    // Sample HTTP DELETE request.
    // return this.delete(`allopathic/${id}`);
  }

  // List Allopathic
  async listEntity(params: any) {
    return KapiCrud.list('allopathic', params);

    // Sample HTTP GET request.
    // return this.get('allopathic', params);
  }

  // Get Allopathic
  async getEntity(id: string) {
    return KapiCrud.get('allopathic', id);

    // Sample HTTP GET request.
    // return this.get(`allopathic/${id}`);
  }

  // Update Allopathic
  async updateEntity(entity) {
    return KapiCrud.update('allopathic', entity);

    // Sample HTTP PATCH request.
    // return this.patch(allopathic, entity);
  }

  // Auto complete for Allopathic
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('allopathic');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.allopathic }));
  }
}
