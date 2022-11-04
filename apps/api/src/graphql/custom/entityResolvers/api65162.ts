import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRecurringDeposit extends RESTDataSource {
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

  // Add RecurringDeposit
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('recurringDeposit', entity);

    // Sample HTTP POST request.
    // return this.post('recurringDeposit', entity);
  }

  // Delete RecurringDeposit
  async deleteEntity(id: string) {
    return KapiCrud.delete('recurringDeposit', id);

    // Sample HTTP DELETE request.
    // return this.delete(`recurringDeposit/${id}`);
  }

  // List RecurringDeposit
  async listEntity(params: any) {
    return KapiCrud.list('recurringDeposit', params);

    // Sample HTTP GET request.
    // return this.get('recurringDeposit', params);
  }

  // Get RecurringDeposit
  async getEntity(id: string) {
    return KapiCrud.get('recurringDeposit', id);

    // Sample HTTP GET request.
    // return this.get(`recurringDeposit/${id}`);
  }

  // Update RecurringDeposit
  async updateEntity(entity) {
    return KapiCrud.update('recurringDeposit', entity);

    // Sample HTTP PATCH request.
    // return this.patch(recurringDeposit, entity);
  }

  // Auto complete for RecurringDeposit
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('recurringDeposit');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.recurringDeposit }));
  }
}
