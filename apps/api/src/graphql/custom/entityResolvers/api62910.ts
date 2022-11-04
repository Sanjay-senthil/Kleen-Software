import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEmployeeId extends RESTDataSource {
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

  // Add EmployeeId
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('employeeId', entity);

    // Sample HTTP POST request.
    // return this.post('employeeId', entity);
  }

  // Delete EmployeeId
  async deleteEntity(id: string) {
    return KapiCrud.delete('employeeId', id);

    // Sample HTTP DELETE request.
    // return this.delete(`employeeId/${id}`);
  }

  // List EmployeeId
  async listEntity(params: any) {
    return KapiCrud.list('employeeId', params);

    // Sample HTTP GET request.
    // return this.get('employeeId', params);
  }

  // Get EmployeeId
  async getEntity(id: string) {
    return KapiCrud.get('employeeId', id);

    // Sample HTTP GET request.
    // return this.get(`employeeId/${id}`);
  }

  // Update EmployeeId
  async updateEntity(entity) {
    return KapiCrud.update('employeeId', entity);

    // Sample HTTP PATCH request.
    // return this.patch(employeeId, entity);
  }

  // Auto complete for EmployeeId
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('employeeId');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.employeeId }));
  }

  // Modify action for EmployeeId
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
