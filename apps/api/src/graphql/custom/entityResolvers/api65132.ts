import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSurgeryPatientInfo extends RESTDataSource {
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

  // Add SurgeryPatientInfo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('surgeryPatientInfo', entity);

    // Sample HTTP POST request.
    // return this.post('surgeryPatientInfo', entity);
  }

  // Delete SurgeryPatientInfo
  async deleteEntity(id: string) {
    return KapiCrud.delete('surgeryPatientInfo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`surgeryPatientInfo/${id}`);
  }

  // List SurgeryPatientInfo
  async listEntity(params: any) {
    return KapiCrud.list('surgeryPatientInfo', params);

    // Sample HTTP GET request.
    // return this.get('surgeryPatientInfo', params);
  }

  // Get SurgeryPatientInfo
  async getEntity(id: string) {
    return KapiCrud.get('surgeryPatientInfo', id);

    // Sample HTTP GET request.
    // return this.get(`surgeryPatientInfo/${id}`);
  }

  // Update SurgeryPatientInfo
  async updateEntity(entity) {
    return KapiCrud.update('surgeryPatientInfo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(surgeryPatientInfo, entity);
  }

  // Auto complete for SurgeryPatientInfo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('surgeryPatientInfo');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.surgeryPatientInfo }));
  }
}
