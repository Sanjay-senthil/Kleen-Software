import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSurgeryDoctors extends RESTDataSource {
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

  // Add SurgeryDoctors
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('surgeryDoctors', entity);

    // Sample HTTP POST request.
    // return this.post('surgeryDoctors', entity);
  }

  // Delete SurgeryDoctors
  async deleteEntity(id: string) {
    return KapiCrud.delete('surgeryDoctors', id);

    // Sample HTTP DELETE request.
    // return this.delete(`surgeryDoctors/${id}`);
  }

  // List SurgeryDoctors
  async listEntity(params: any) {
    return KapiCrud.list('surgeryDoctors', params);

    // Sample HTTP GET request.
    // return this.get('surgeryDoctors', params);
  }

  // Get SurgeryDoctors
  async getEntity(id: string) {
    return KapiCrud.get('surgeryDoctors', id);

    // Sample HTTP GET request.
    // return this.get(`surgeryDoctors/${id}`);
  }

  // Update SurgeryDoctors
  async updateEntity(entity) {
    return KapiCrud.update('surgeryDoctors', entity);

    // Sample HTTP PATCH request.
    // return this.patch(surgeryDoctors, entity);
  }

  // Auto complete for SurgeryDoctors
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('surgeryDoctors');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.surgeryDoctors }));
  }
}
