import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDoctorsDetails extends RESTDataSource {
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

  // Add DoctorsDetails
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('doctorsDetails', entity);

    // Sample HTTP POST request.
    // return this.post('doctorsDetails', entity);
  }

  // Delete DoctorsDetails
  async deleteEntity(id: string) {
    return KapiCrud.delete('doctorsDetails', id);

    // Sample HTTP DELETE request.
    // return this.delete(`doctorsDetails/${id}`);
  }

  // List DoctorsDetails
  async listEntity(params: any) {
    return KapiCrud.list('doctorsDetails', params);

    // Sample HTTP GET request.
    // return this.get('doctorsDetails', params);
  }

  // Get DoctorsDetails
  async getEntity(id: string) {
    return KapiCrud.get('doctorsDetails', id);

    // Sample HTTP GET request.
    // return this.get(`doctorsDetails/${id}`);
  }

  // Update DoctorsDetails
  async updateEntity(entity) {
    return KapiCrud.update('doctorsDetails', entity);

    // Sample HTTP PATCH request.
    // return this.patch(doctorsDetails, entity);
  }

  // Auto complete for DoctorsDetails
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('doctorsDetails');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.doctorsDetails }));
  }
}
