import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDepartment extends RESTDataSource {
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

  // Add Department
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('department', entity);

    // Sample HTTP POST request.
    // return this.post('department', entity);
  }

  // Delete Department
  async deleteEntity(id: string) {
    return KapiCrud.delete('department', id);

    // Sample HTTP DELETE request.
    // return this.delete(`department/${id}`);
  }

  // List Department
  async listEntity(params: any) {
    return KapiCrud.list('department', params);

    // Sample HTTP GET request.
    // return this.get('department', params);
  }

  // Get Department
  async getEntity(id: string) {
    return KapiCrud.get('department', id);

    // Sample HTTP GET request.
    // return this.get(`department/${id}`);
  }

  // Update Department
  async updateEntity(entity) {
    return KapiCrud.update('department', entity);

    // Sample HTTP PATCH request.
    // return this.patch(department, entity);
  }

  // Auto complete for Department
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('department');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.department }));
  }
}
