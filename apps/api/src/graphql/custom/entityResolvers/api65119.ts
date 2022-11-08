import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPatientDetails extends RESTDataSource {
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

  // Add PatientDetails
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('patientDetails', entity);

    // Sample HTTP POST request.
    // return this.post('patientDetails', entity);
  }

  // Delete PatientDetails
  async deleteEntity(id: string) {
    return KapiCrud.delete('patientDetails', id);

    // Sample HTTP DELETE request.
    // return this.delete(`patientDetails/${id}`);
  }

  // List PatientDetails
  async listEntity(params: any) {
    return KapiCrud.list('patientDetails', params);

    // Sample HTTP GET request.
    // return this.get('patientDetails', params);
  }

  // Get PatientDetails
  async getEntity(id: string) {
    return KapiCrud.get('patientDetails', id);

    // Sample HTTP GET request.
    // return this.get(`patientDetails/${id}`);
  }

  // Update PatientDetails
  async updateEntity(entity) {
    return KapiCrud.update('patientDetails', entity);

    // Sample HTTP PATCH request.
    // return this.patch(patientDetails, entity);
  }

  // Auto complete for PatientDetails
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('patientDetails');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.patientDetails }));
  }
}
