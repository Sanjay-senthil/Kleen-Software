import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDepartments extends RESTDataSource {
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

  // Add Departments
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('departments', entity);

    // Sample HTTP POST request.
    // return this.post('departments', entity);
  }

  // Delete Departments
  async deleteEntity(id: string) {
    return KapiCrud.delete('departments', id);

    // Sample HTTP DELETE request.
    // return this.delete(`departments/${id}`);
  }

  // List Departments
  async listEntity(params: any) {
    return KapiCrud.list('departments', params);

    // Sample HTTP GET request.
    // return this.get('departments', params);
  }

  // Get Departments
  async getEntity(id: string) {
    return KapiCrud.get('departments', id);

    // Sample HTTP GET request.
    // return this.get(`departments/${id}`);
  }

  // Update Departments
  async updateEntity(entity) {
    return KapiCrud.update('departments', entity);

    // Sample HTTP PATCH request.
    // return this.patch(departments, entity);
  }

  // Auto complete for Departments
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('departments');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.departments }));
  }
}
