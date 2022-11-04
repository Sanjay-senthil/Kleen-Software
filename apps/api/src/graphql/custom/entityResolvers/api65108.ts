import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTheater extends RESTDataSource {
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

  // Add Theater
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('theater', entity);

    // Sample HTTP POST request.
    // return this.post('theater', entity);
  }

  // Delete Theater
  async deleteEntity(id: string) {
    return KapiCrud.delete('theater', id);

    // Sample HTTP DELETE request.
    // return this.delete(`theater/${id}`);
  }

  // List Theater
  async listEntity(params: any) {
    return KapiCrud.list('theater', params);

    // Sample HTTP GET request.
    // return this.get('theater', params);
  }

  // Get Theater
  async getEntity(id: string) {
    return KapiCrud.get('theater', id);

    // Sample HTTP GET request.
    // return this.get(`theater/${id}`);
  }

  // Update Theater
  async updateEntity(entity) {
    return KapiCrud.update('theater', entity);

    // Sample HTTP PATCH request.
    // return this.patch(theater, entity);
  }

  // Auto complete for Theater
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('theater');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.theater }));
  }

  // Allocate action for Theater
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Evaluate action for Theater
  async customAction_evaluate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for Theater
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for Theater
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Theater
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
