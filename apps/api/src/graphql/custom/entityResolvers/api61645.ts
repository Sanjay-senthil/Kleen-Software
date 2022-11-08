import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiServiceCost extends RESTDataSource {
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

  // Add ServiceCost
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('serviceCost', entity);

    // Sample HTTP POST request.
    // return this.post('serviceCost', entity);
  }

  // Delete ServiceCost
  async deleteEntity(id: string) {
    return KapiCrud.delete('serviceCost', id);

    // Sample HTTP DELETE request.
    // return this.delete(`serviceCost/${id}`);
  }

  // List ServiceCost
  async listEntity(params: any) {
    return KapiCrud.list('serviceCost', params);

    // Sample HTTP GET request.
    // return this.get('serviceCost', params);
  }

  // Get ServiceCost
  async getEntity(id: string) {
    return KapiCrud.get('serviceCost', id);

    // Sample HTTP GET request.
    // return this.get(`serviceCost/${id}`);
  }

  // Update ServiceCost
  async updateEntity(entity) {
    return KapiCrud.update('serviceCost', entity);

    // Sample HTTP PATCH request.
    // return this.patch(serviceCost, entity);
  }

  // Auto complete for ServiceCost
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('serviceCost');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.serviceCost }));
  }
}
