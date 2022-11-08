import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEstimatedCost extends RESTDataSource {
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

  // Add EstimatedCost
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('estimatedCost', entity);

    // Sample HTTP POST request.
    // return this.post('estimatedCost', entity);
  }

  // Delete EstimatedCost
  async deleteEntity(id: string) {
    return KapiCrud.delete('estimatedCost', id);

    // Sample HTTP DELETE request.
    // return this.delete(`estimatedCost/${id}`);
  }

  // List EstimatedCost
  async listEntity(params: any) {
    return KapiCrud.list('estimatedCost', params);

    // Sample HTTP GET request.
    // return this.get('estimatedCost', params);
  }

  // Get EstimatedCost
  async getEntity(id: string) {
    return KapiCrud.get('estimatedCost', id);

    // Sample HTTP GET request.
    // return this.get(`estimatedCost/${id}`);
  }

  // Update EstimatedCost
  async updateEntity(entity) {
    return KapiCrud.update('estimatedCost', entity);

    // Sample HTTP PATCH request.
    // return this.patch(estimatedCost, entity);
  }

  // Auto complete for EstimatedCost
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('estimatedCost');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.estimatedCost }));
  }
}
