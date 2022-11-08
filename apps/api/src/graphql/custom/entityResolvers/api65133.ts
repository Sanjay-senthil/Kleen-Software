import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDoctorInfo extends RESTDataSource {
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

  // Add DoctorInfo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('doctorInfo', entity);

    // Sample HTTP POST request.
    // return this.post('doctorInfo', entity);
  }

  // Delete DoctorInfo
  async deleteEntity(id: string) {
    return KapiCrud.delete('doctorInfo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`doctorInfo/${id}`);
  }

  // List DoctorInfo
  async listEntity(params: any) {
    return KapiCrud.list('doctorInfo', params);

    // Sample HTTP GET request.
    // return this.get('doctorInfo', params);
  }

  // Get DoctorInfo
  async getEntity(id: string) {
    return KapiCrud.get('doctorInfo', id);

    // Sample HTTP GET request.
    // return this.get(`doctorInfo/${id}`);
  }

  // Update DoctorInfo
  async updateEntity(entity) {
    return KapiCrud.update('doctorInfo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(doctorInfo, entity);
  }

  // Auto complete for DoctorInfo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('doctorInfo');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.doctorInfo }));
  }
}
