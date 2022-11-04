import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLoan extends RESTDataSource {
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

  // Add Loan
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('loan', entity);

    // Sample HTTP POST request.
    // return this.post('loan', entity);
  }

  // Delete Loan
  async deleteEntity(id: string) {
    return KapiCrud.delete('loan', id);

    // Sample HTTP DELETE request.
    // return this.delete(`loan/${id}`);
  }

  // List Loan
  async listEntity(params: any) {
    return KapiCrud.list('loan', params);

    // Sample HTTP GET request.
    // return this.get('loan', params);
  }

  // Get Loan
  async getEntity(id: string) {
    return KapiCrud.get('loan', id);

    // Sample HTTP GET request.
    // return this.get(`loan/${id}`);
  }

  // Update Loan
  async updateEntity(entity) {
    return KapiCrud.update('loan', entity);

    // Sample HTTP PATCH request.
    // return this.patch(loan, entity);
  }

  // Auto complete for Loan
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('loan');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.loan }));
  }
}
