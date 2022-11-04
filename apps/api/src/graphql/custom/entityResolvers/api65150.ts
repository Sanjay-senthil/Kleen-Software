import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiHealthInsurance extends RESTDataSource {
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

  // Add HealthInsurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('healthInsurance', entity);

    // Sample HTTP POST request.
    // return this.post('healthInsurance', entity);
  }

  // Delete HealthInsurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('healthInsurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`healthInsurance/${id}`);
  }

  // List HealthInsurance
  async listEntity(params: any) {
    return KapiCrud.list('healthInsurance', params);

    // Sample HTTP GET request.
    // return this.get('healthInsurance', params);
  }

  // Get HealthInsurance
  async getEntity(id: string) {
    return KapiCrud.get('healthInsurance', id);

    // Sample HTTP GET request.
    // return this.get(`healthInsurance/${id}`);
  }

  // Update HealthInsurance
  async updateEntity(entity) {
    return KapiCrud.update('healthInsurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(healthInsurance, entity);
  }

  // Auto complete for HealthInsurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('healthInsurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.healthInsurance }));
  }
}
