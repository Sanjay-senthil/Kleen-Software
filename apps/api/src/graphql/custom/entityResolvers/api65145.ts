import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDeposit extends RESTDataSource {
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

  // Add Deposit
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('deposit', entity);

    // Sample HTTP POST request.
    // return this.post('deposit', entity);
  }

  // Delete Deposit
  async deleteEntity(id: string) {
    return KapiCrud.delete('deposit', id);

    // Sample HTTP DELETE request.
    // return this.delete(`deposit/${id}`);
  }

  // List Deposit
  async listEntity(params: any) {
    return KapiCrud.list('deposit', params);

    // Sample HTTP GET request.
    // return this.get('deposit', params);
  }

  // Get Deposit
  async getEntity(id: string) {
    return KapiCrud.get('deposit', id);

    // Sample HTTP GET request.
    // return this.get(`deposit/${id}`);
  }

  // Update Deposit
  async updateEntity(entity) {
    return KapiCrud.update('deposit', entity);

    // Sample HTTP PATCH request.
    // return this.patch(deposit, entity);
  }

  // Auto complete for Deposit
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('deposit');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.deposit }));
  }
}
