import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTwoWheelerInsurance extends RESTDataSource {
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

  // Add TwoWheelerInsurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('twoWheelerInsurance', entity);

    // Sample HTTP POST request.
    // return this.post('twoWheelerInsurance', entity);
  }

  // Delete TwoWheelerInsurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('twoWheelerInsurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`twoWheelerInsurance/${id}`);
  }

  // List TwoWheelerInsurance
  async listEntity(params: any) {
    return KapiCrud.list('twoWheelerInsurance', params);

    // Sample HTTP GET request.
    // return this.get('twoWheelerInsurance', params);
  }

  // Get TwoWheelerInsurance
  async getEntity(id: string) {
    return KapiCrud.get('twoWheelerInsurance', id);

    // Sample HTTP GET request.
    // return this.get(`twoWheelerInsurance/${id}`);
  }

  // Update TwoWheelerInsurance
  async updateEntity(entity) {
    return KapiCrud.update('twoWheelerInsurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(twoWheelerInsurance, entity);
  }

  // Auto complete for TwoWheelerInsurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('twoWheelerInsurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.twoWheelerInsurance }));
  }
}
