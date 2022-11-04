import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPhysioTherapyDpt extends RESTDataSource {
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

  // Add PhysioTherapyDpt
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('physioTherapyDpt', entity);

    // Sample HTTP POST request.
    // return this.post('physioTherapyDpt', entity);
  }

  // Delete PhysioTherapyDpt
  async deleteEntity(id: string) {
    return KapiCrud.delete('physioTherapyDpt', id);

    // Sample HTTP DELETE request.
    // return this.delete(`physioTherapyDpt/${id}`);
  }

  // List PhysioTherapyDpt
  async listEntity(params: any) {
    return KapiCrud.list('physioTherapyDpt', params);

    // Sample HTTP GET request.
    // return this.get('physioTherapyDpt', params);
  }

  // Get PhysioTherapyDpt
  async getEntity(id: string) {
    return KapiCrud.get('physioTherapyDpt', id);

    // Sample HTTP GET request.
    // return this.get(`physioTherapyDpt/${id}`);
  }

  // Update PhysioTherapyDpt
  async updateEntity(entity) {
    return KapiCrud.update('physioTherapyDpt', entity);

    // Sample HTTP PATCH request.
    // return this.patch(physioTherapyDpt, entity);
  }

  // Auto complete for PhysioTherapyDpt
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('physioTherapyDpt');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.physioTherapyDpt }));
  }
}
