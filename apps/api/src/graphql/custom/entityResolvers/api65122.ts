import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiHospitalDpt extends RESTDataSource {
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

  // Add HospitalDpt
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('hospitalDpt', entity);

    // Sample HTTP POST request.
    // return this.post('hospitalDpt', entity);
  }

  // Delete HospitalDpt
  async deleteEntity(id: string) {
    return KapiCrud.delete('hospitalDpt', id);

    // Sample HTTP DELETE request.
    // return this.delete(`hospitalDpt/${id}`);
  }

  // List HospitalDpt
  async listEntity(params: any) {
    return KapiCrud.list('hospitalDpt', params);

    // Sample HTTP GET request.
    // return this.get('hospitalDpt', params);
  }

  // Get HospitalDpt
  async getEntity(id: string) {
    return KapiCrud.get('hospitalDpt', id);

    // Sample HTTP GET request.
    // return this.get(`hospitalDpt/${id}`);
  }

  // Update HospitalDpt
  async updateEntity(entity) {
    return KapiCrud.update('hospitalDpt', entity);

    // Sample HTTP PATCH request.
    // return this.patch(hospitalDpt, entity);
  }

  // Auto complete for HospitalDpt
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('hospitalDpt');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.hospitalDpt }));
  }
}
