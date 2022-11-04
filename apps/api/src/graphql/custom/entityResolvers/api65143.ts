import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBank extends RESTDataSource {
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

  // Add Bank
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bank', entity);

    // Sample HTTP POST request.
    // return this.post('bank', entity);
  }

  // Delete Bank
  async deleteEntity(id: string) {
    return KapiCrud.delete('bank', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bank/${id}`);
  }

  // List Bank
  async listEntity(params: any) {
    return KapiCrud.list('bank', params);

    // Sample HTTP GET request.
    // return this.get('bank', params);
  }

  // Get Bank
  async getEntity(id: string) {
    return KapiCrud.get('bank', id);

    // Sample HTTP GET request.
    // return this.get(`bank/${id}`);
  }

  // Update Bank
  async updateEntity(entity) {
    return KapiCrud.update('bank', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bank, entity);
  }

  // Auto complete for Bank
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bank');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.bank }));
  }
}
