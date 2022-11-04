import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLifeInsurance extends RESTDataSource {
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

  // Add LifeInsurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('lifeInsurance', entity);

    // Sample HTTP POST request.
    // return this.post('lifeInsurance', entity);
  }

  // Delete LifeInsurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('lifeInsurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`lifeInsurance/${id}`);
  }

  // List LifeInsurance
  async listEntity(params: any) {
    return KapiCrud.list('lifeInsurance', params);

    // Sample HTTP GET request.
    // return this.get('lifeInsurance', params);
  }

  // Get LifeInsurance
  async getEntity(id: string) {
    return KapiCrud.get('lifeInsurance', id);

    // Sample HTTP GET request.
    // return this.get(`lifeInsurance/${id}`);
  }

  // Update LifeInsurance
  async updateEntity(entity) {
    return KapiCrud.update('lifeInsurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(lifeInsurance, entity);
  }

  // Auto complete for LifeInsurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('lifeInsurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.lifeInsurance }));
  }
}
