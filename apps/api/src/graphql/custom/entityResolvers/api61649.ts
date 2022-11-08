import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiServiceRecord extends RESTDataSource {
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

  // Add ServiceRecord
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('serviceRecord', entity);

    // Sample HTTP POST request.
    // return this.post('serviceRecord', entity);
  }

  // Delete ServiceRecord
  async deleteEntity(id: string) {
    return KapiCrud.delete('serviceRecord', id);

    // Sample HTTP DELETE request.
    // return this.delete(`serviceRecord/${id}`);
  }

  // List ServiceRecord
  async listEntity(params: any) {
    return KapiCrud.list('serviceRecord', params);

    // Sample HTTP GET request.
    // return this.get('serviceRecord', params);
  }

  // Get ServiceRecord
  async getEntity(id: string) {
    return KapiCrud.get('serviceRecord', id);

    // Sample HTTP GET request.
    // return this.get(`serviceRecord/${id}`);
  }

  // Update ServiceRecord
  async updateEntity(entity) {
    return KapiCrud.update('serviceRecord', entity);

    // Sample HTTP PATCH request.
    // return this.patch(serviceRecord, entity);
  }

  // Auto complete for ServiceRecord
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('serviceRecord');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.serviceRecord }));
  }

  // Report Issue action for ServiceRecord
  async customAction_reportIssue(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
