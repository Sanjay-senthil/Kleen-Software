import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCurrentMileage extends RESTDataSource {
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

  // Add CurrentMileage
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('currentMileage', entity);

    // Sample HTTP POST request.
    // return this.post('currentMileage', entity);
  }

  // Delete CurrentMileage
  async deleteEntity(id: string) {
    return KapiCrud.delete('currentMileage', id);

    // Sample HTTP DELETE request.
    // return this.delete(`currentMileage/${id}`);
  }

  // List CurrentMileage
  async listEntity(params: any) {
    return KapiCrud.list('currentMileage', params);

    // Sample HTTP GET request.
    // return this.get('currentMileage', params);
  }

  // Get CurrentMileage
  async getEntity(id: string) {
    return KapiCrud.get('currentMileage', id);

    // Sample HTTP GET request.
    // return this.get(`currentMileage/${id}`);
  }

  // Update CurrentMileage
  async updateEntity(entity) {
    return KapiCrud.update('currentMileage', entity);

    // Sample HTTP PATCH request.
    // return this.patch(currentMileage, entity);
  }

  // Auto complete for CurrentMileage
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('currentMileage');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.currentMileage }));
  }
}
