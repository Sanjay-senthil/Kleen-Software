import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiStaffs extends RESTDataSource {
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

  // Add Staffs
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('staffs', entity);

    // Sample HTTP POST request.
    // return this.post('staffs', entity);
  }

  // Delete Staffs
  async deleteEntity(id: string) {
    return KapiCrud.delete('staffs', id);

    // Sample HTTP DELETE request.
    // return this.delete(`staffs/${id}`);
  }

  // List Staffs
  async listEntity(params: any) {
    return KapiCrud.list('staffs', params);

    // Sample HTTP GET request.
    // return this.get('staffs', params);
  }

  // Get Staffs
  async getEntity(id: string) {
    return KapiCrud.get('staffs', id);

    // Sample HTTP GET request.
    // return this.get(`staffs/${id}`);
  }

  // Update Staffs
  async updateEntity(entity) {
    return KapiCrud.update('staffs', entity);

    // Sample HTTP PATCH request.
    // return this.patch(staffs, entity);
  }

  // Auto complete for Staffs
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('staffs');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.staffs }));
  }
}
