import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGeneralDoctors extends RESTDataSource {
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

  // Add GeneralDoctors
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('generalDoctors', entity);

    // Sample HTTP POST request.
    // return this.post('generalDoctors', entity);
  }

  // Delete GeneralDoctors
  async deleteEntity(id: string) {
    return KapiCrud.delete('generalDoctors', id);

    // Sample HTTP DELETE request.
    // return this.delete(`generalDoctors/${id}`);
  }

  // List GeneralDoctors
  async listEntity(params: any) {
    return KapiCrud.list('generalDoctors', params);

    // Sample HTTP GET request.
    // return this.get('generalDoctors', params);
  }

  // Get GeneralDoctors
  async getEntity(id: string) {
    return KapiCrud.get('generalDoctors', id);

    // Sample HTTP GET request.
    // return this.get(`generalDoctors/${id}`);
  }

  // Update GeneralDoctors
  async updateEntity(entity) {
    return KapiCrud.update('generalDoctors', entity);

    // Sample HTTP PATCH request.
    // return this.patch(generalDoctors, entity);
  }

  // Auto complete for GeneralDoctors
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('generalDoctors');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.generalDoctors }));
  }
}
