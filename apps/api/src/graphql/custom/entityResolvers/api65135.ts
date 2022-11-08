import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiMedicines extends RESTDataSource {
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

  // Add Medicines
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('medicines', entity);

    // Sample HTTP POST request.
    // return this.post('medicines', entity);
  }

  // Delete Medicines
  async deleteEntity(id: string) {
    return KapiCrud.delete('medicines', id);

    // Sample HTTP DELETE request.
    // return this.delete(`medicines/${id}`);
  }

  // List Medicines
  async listEntity(params: any) {
    return KapiCrud.list('medicines', params);

    // Sample HTTP GET request.
    // return this.get('medicines', params);
  }

  // Get Medicines
  async getEntity(id: string) {
    return KapiCrud.get('medicines', id);

    // Sample HTTP GET request.
    // return this.get(`medicines/${id}`);
  }

  // Update Medicines
  async updateEntity(entity) {
    return KapiCrud.update('medicines', entity);

    // Sample HTTP PATCH request.
    // return this.patch(medicines, entity);
  }

  // Auto complete for Medicines
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('medicines');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.medicines }));
  }
}
