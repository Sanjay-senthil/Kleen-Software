import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPatientsInfo extends RESTDataSource {
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

  // Add PatientsInfo
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('patientsInfo', entity);

    // Sample HTTP POST request.
    // return this.post('patientsInfo', entity);
  }

  // Delete PatientsInfo
  async deleteEntity(id: string) {
    return KapiCrud.delete('patientsInfo', id);

    // Sample HTTP DELETE request.
    // return this.delete(`patientsInfo/${id}`);
  }

  // List PatientsInfo
  async listEntity(params: any) {
    return KapiCrud.list('patientsInfo', params);

    // Sample HTTP GET request.
    // return this.get('patientsInfo', params);
  }

  // Get PatientsInfo
  async getEntity(id: string) {
    return KapiCrud.get('patientsInfo', id);

    // Sample HTTP GET request.
    // return this.get(`patientsInfo/${id}`);
  }

  // Update PatientsInfo
  async updateEntity(entity) {
    return KapiCrud.update('patientsInfo', entity);

    // Sample HTTP PATCH request.
    // return this.patch(patientsInfo, entity);
  }

  // Auto complete for PatientsInfo
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('patientsInfo');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.patientsInfo }));
  }
}
