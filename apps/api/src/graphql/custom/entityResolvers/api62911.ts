import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCollege extends RESTDataSource {
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

  // Add College
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('college', entity);

    // Sample HTTP POST request.
    // return this.post('college', entity);
  }

  // Delete College
  async deleteEntity(id: string) {
    return KapiCrud.delete('college', id);

    // Sample HTTP DELETE request.
    // return this.delete(`college/${id}`);
  }

  // List College
  async listEntity(params: any) {
    return KapiCrud.list('college', params);

    // Sample HTTP GET request.
    // return this.get('college', params);
  }

  // Get College
  async getEntity(id: string) {
    return KapiCrud.get('college', id);

    // Sample HTTP GET request.
    // return this.get(`college/${id}`);
  }

  // Update College
  async updateEntity(entity) {
    return KapiCrud.update('college', entity);

    // Sample HTTP PATCH request.
    // return this.patch(college, entity);
  }

  // Auto complete for College
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('college');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.college }));
  }

  // Admit New Students action for College
  async customAction_admitNewStudents(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
