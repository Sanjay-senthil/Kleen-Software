import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPatientInfo extends RESTDataSource {
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

  // Add PatientInfo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('patientInfo', entity);

    // Sample HTTP POST request.
    // return this.post('patientInfo', entity);
  }

  // Delete PatientInfo
  async deleteEntity(id: string) {
    return KapiCrud.delete('patientInfo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`patientInfo/${id}`);
  }

  // List PatientInfo
  async listEntity(params: any) {
    return KapiCrud.list('patientInfo', params);

    // Sample HTTP GET request.
    // return this.get('patientInfo', params);
  }

  // Get PatientInfo
  async getEntity(id: string) {
    return KapiCrud.get('patientInfo', id);

    // Sample HTTP GET request.
    // return this.get(`patientInfo/${id}`);
  }

  // Update PatientInfo
  async updateEntity(entity) {
    return KapiCrud.update('patientInfo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(patientInfo, entity);
  }

  // Auto complete for PatientInfo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('patientInfo');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.patientInfo }));
  }
}
