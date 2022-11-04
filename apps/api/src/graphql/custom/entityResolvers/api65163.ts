import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiFixedDeposit extends RESTDataSource {
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

  // Add FixedDeposit
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('fixedDeposit', entity);

    // Sample HTTP POST request.
    // return this.post('fixedDeposit', entity);
  }

  // Delete FixedDeposit
  async deleteEntity(id: string) {
    return KapiCrud.delete('fixedDeposit', id);

    // Sample HTTP DELETE request.
    // return this.delete(`fixedDeposit/${id}`);
  }

  // List FixedDeposit
  async listEntity(params: any) {
    return KapiCrud.list('fixedDeposit', params);

    // Sample HTTP GET request.
    // return this.get('fixedDeposit', params);
  }

  // Get FixedDeposit
  async getEntity(id: string) {
    return KapiCrud.get('fixedDeposit', id);

    // Sample HTTP GET request.
    // return this.get(`fixedDeposit/${id}`);
  }

  // Update FixedDeposit
  async updateEntity(entity) {
    return KapiCrud.update('fixedDeposit', entity);

    // Sample HTTP PATCH request.
    // return this.patch(fixedDeposit, entity);
  }

  // Auto complete for FixedDeposit
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('fixedDeposit');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.fixedDeposit }));
  }
}
