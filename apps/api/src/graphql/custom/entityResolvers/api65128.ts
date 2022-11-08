import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDentalDpt extends RESTDataSource {
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

  // Add DentalDpt
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('dentalDpt', entity);

    // Sample HTTP POST request.
    // return this.post('dentalDpt', entity);
  }

  // Delete DentalDpt
  async deleteEntity(id: string) {
    return KapiCrud.delete('dentalDpt', id);

    // Sample HTTP DELETE request.
    // return this.delete(`dentalDpt/${id}`);
  }

  // List DentalDpt
  async listEntity(params: any) {
    return KapiCrud.list('dentalDpt', params);

    // Sample HTTP GET request.
    // return this.get('dentalDpt', params);
  }

  // Get DentalDpt
  async getEntity(id: string) {
    return KapiCrud.get('dentalDpt', id);

    // Sample HTTP GET request.
    // return this.get(`dentalDpt/${id}`);
  }

  // Update DentalDpt
  async updateEntity(entity) {
    return KapiCrud.update('dentalDpt', entity);

    // Sample HTTP PATCH request.
    // return this.patch(dentalDpt, entity);
  }

  // Auto complete for DentalDpt
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('dentalDpt');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.dentalDpt }));
  }
}
