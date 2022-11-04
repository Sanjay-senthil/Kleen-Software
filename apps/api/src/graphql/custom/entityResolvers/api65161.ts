import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPolicies extends RESTDataSource {
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

  // Add Policies
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('policies', entity);

    // Sample HTTP POST request.
    // return this.post('policies', entity);
  }

  // Delete Policies
  async deleteEntity(id: string) {
    return KapiCrud.delete('policies', id);

    // Sample HTTP DELETE request.
    // return this.delete(`policies/${id}`);
  }

  // List Policies
  async listEntity(params: any) {
    return KapiCrud.list('policies', params);

    // Sample HTTP GET request.
    // return this.get('policies', params);
  }

  // Get Policies
  async getEntity(id: string) {
    return KapiCrud.get('policies', id);

    // Sample HTTP GET request.
    // return this.get(`policies/${id}`);
  }

  // Update Policies
  async updateEntity(entity) {
    return KapiCrud.update('policies', entity);

    // Sample HTTP PATCH request.
    // return this.patch(policies, entity);
  }

  // Auto complete for Policies
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('policies');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.policies }));
  }
}
