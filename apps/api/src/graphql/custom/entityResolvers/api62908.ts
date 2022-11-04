import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEmployeeName extends RESTDataSource {
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

  // Add EmployeeName
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('employeeName', entity);

    // Sample HTTP POST request.
    // return this.post('employeeName', entity);
  }

  // Delete EmployeeName
  async deleteEntity(id: string) {
    return KapiCrud.delete('employeeName', id);

    // Sample HTTP DELETE request.
    // return this.delete(`employeeName/${id}`);
  }

  // List EmployeeName
  async listEntity(params: any) {
    return KapiCrud.list('employeeName', params);

    // Sample HTTP GET request.
    // return this.get('employeeName', params);
  }

  // Get EmployeeName
  async getEntity(id: string) {
    return KapiCrud.get('employeeName', id);

    // Sample HTTP GET request.
    // return this.get(`employeeName/${id}`);
  }

  // Update EmployeeName
  async updateEntity(entity) {
    return KapiCrud.update('employeeName', entity);

    // Sample HTTP PATCH request.
    // return this.patch(employeeName, entity);
  }

  // Auto complete for EmployeeName
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('employeeName');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.employeeName }));
  }

  // Add/Modify name action for EmployeeName
  async customAction_addModifyName(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
