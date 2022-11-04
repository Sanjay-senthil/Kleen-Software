import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBloodBank extends RESTDataSource {
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

  // Add BloodBank
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bloodBank', entity);

    // Sample HTTP POST request.
    // return this.post('bloodBank', entity);
  }

  // Delete BloodBank
  async deleteEntity(id: string) {
    return KapiCrud.delete('bloodBank', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bloodBank/${id}`);
  }

  // List BloodBank
  async listEntity(params: any) {
    return KapiCrud.list('bloodBank', params);

    // Sample HTTP GET request.
    // return this.get('bloodBank', params);
  }

  // Get BloodBank
  async getEntity(id: string) {
    return KapiCrud.get('bloodBank', id);

    // Sample HTTP GET request.
    // return this.get(`bloodBank/${id}`);
  }

  // Update BloodBank
  async updateEntity(entity) {
    return KapiCrud.update('bloodBank', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bloodBank, entity);
  }

  // Auto complete for BloodBank
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bloodBank');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.bloodBank }));
  }
}
