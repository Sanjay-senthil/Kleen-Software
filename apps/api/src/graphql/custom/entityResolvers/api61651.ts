import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCompletedService extends RESTDataSource {
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

  // Add CompletedService
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('completedService', entity);

    // Sample HTTP POST request.
    // return this.post('completedService', entity);
  }

  // Delete CompletedService
  async deleteEntity(id: string) {
    return KapiCrud.delete('completedService', id);

    // Sample HTTP DELETE request.
    // return this.delete(`completedService/${id}`);
  }

  // List CompletedService
  async listEntity(params: any) {
    return KapiCrud.list('completedService', params);

    // Sample HTTP GET request.
    // return this.get('completedService', params);
  }

  // Get CompletedService
  async getEntity(id: string) {
    return KapiCrud.get('completedService', id);

    // Sample HTTP GET request.
    // return this.get(`completedService/${id}`);
  }

  // Update CompletedService
  async updateEntity(entity) {
    return KapiCrud.update('completedService', entity);

    // Sample HTTP PATCH request.
    // return this.patch(completedService, entity);
  }

  // Auto complete for CompletedService
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('completedService');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.completedService }));
  }

  // Report Issue action for CompletedService
  async customAction_reportIssue(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
