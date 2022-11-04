import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAgricultureLoan extends RESTDataSource {
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

  // Add AgricultureLoan
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('agricultureLoan', entity);

    // Sample HTTP POST request.
    // return this.post('agricultureLoan', entity);
  }

  // Delete AgricultureLoan
  async deleteEntity(id: string) {
    return KapiCrud.delete('agricultureLoan', id);

    // Sample HTTP DELETE request.
    // return this.delete(`agricultureLoan/${id}`);
  }

  // List AgricultureLoan
  async listEntity(params: any) {
    return KapiCrud.list('agricultureLoan', params);

    // Sample HTTP GET request.
    // return this.get('agricultureLoan', params);
  }

  // Get AgricultureLoan
  async getEntity(id: string) {
    return KapiCrud.get('agricultureLoan', id);

    // Sample HTTP GET request.
    // return this.get(`agricultureLoan/${id}`);
  }

  // Update AgricultureLoan
  async updateEntity(entity) {
    return KapiCrud.update('agricultureLoan', entity);

    // Sample HTTP PATCH request.
    // return this.patch(agricultureLoan, entity);
  }

  // Auto complete for AgricultureLoan
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('agricultureLoan');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.agricultureLoan }));
  }
}
