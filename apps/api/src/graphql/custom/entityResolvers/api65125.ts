import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBloodCheckUp extends RESTDataSource {
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

  // Add BloodCheckUp
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bloodCheckUp', entity);

    // Sample HTTP POST request.
    // return this.post('bloodCheckUp', entity);
  }

  // Delete BloodCheckUp
  async deleteEntity(id: string) {
    return KapiCrud.delete('bloodCheckUp', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bloodCheckUp/${id}`);
  }

  // List BloodCheckUp
  async listEntity(params: any) {
    return KapiCrud.list('bloodCheckUp', params);

    // Sample HTTP GET request.
    // return this.get('bloodCheckUp', params);
  }

  // Get BloodCheckUp
  async getEntity(id: string) {
    return KapiCrud.get('bloodCheckUp', id);

    // Sample HTTP GET request.
    // return this.get(`bloodCheckUp/${id}`);
  }

  // Update BloodCheckUp
  async updateEntity(entity) {
    return KapiCrud.update('bloodCheckUp', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bloodCheckUp, entity);
  }

  // Auto complete for BloodCheckUp
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bloodCheckUp');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.bloodCheckUp }));
  }
}
