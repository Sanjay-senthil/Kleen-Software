import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCarInsurance extends RESTDataSource {
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

  // Add CarInsurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('carInsurance', entity);

    // Sample HTTP POST request.
    // return this.post('carInsurance', entity);
  }

  // Delete CarInsurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('carInsurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`carInsurance/${id}`);
  }

  // List CarInsurance
  async listEntity(params: any) {
    return KapiCrud.list('carInsurance', params);

    // Sample HTTP GET request.
    // return this.get('carInsurance', params);
  }

  // Get CarInsurance
  async getEntity(id: string) {
    return KapiCrud.get('carInsurance', id);

    // Sample HTTP GET request.
    // return this.get(`carInsurance/${id}`);
  }

  // Update CarInsurance
  async updateEntity(entity) {
    return KapiCrud.update('carInsurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(carInsurance, entity);
  }

  // Auto complete for CarInsurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('carInsurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.carInsurance }));
  }
}
