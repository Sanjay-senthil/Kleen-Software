import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBloodTypes extends RESTDataSource {
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

  // Add BloodTypes
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bloodTypes', entity);

    // Sample HTTP POST request.
    // return this.post('bloodTypes', entity);
  }

  // Delete BloodTypes
  async deleteEntity(id: string) {
    return KapiCrud.delete('bloodTypes', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bloodTypes/${id}`);
  }

  // List BloodTypes
  async listEntity(params: any) {
    return KapiCrud.list('bloodTypes', params);

    // Sample HTTP GET request.
    // return this.get('bloodTypes', params);
  }

  // Get BloodTypes
  async getEntity(id: string) {
    return KapiCrud.get('bloodTypes', id);

    // Sample HTTP GET request.
    // return this.get(`bloodTypes/${id}`);
  }

  // Update BloodTypes
  async updateEntity(entity) {
    return KapiCrud.update('bloodTypes', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bloodTypes, entity);
  }

  // Auto complete for BloodTypes
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bloodTypes');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.bloodTypes }));
  }
}
