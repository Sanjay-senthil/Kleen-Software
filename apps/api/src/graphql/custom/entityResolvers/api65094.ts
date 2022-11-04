import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiEntertainment extends RESTDataSource {
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

  // Add Entertainment
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('entertainment', entity);

    // Sample HTTP POST request.
    // return this.post('entertainment', entity);
  }

  // Delete Entertainment
  async deleteEntity(id: string) {
    return KapiCrud.delete('entertainment', id);

    // Sample HTTP DELETE request.
    // return this.delete(`entertainment/${id}`);
  }

  // List Entertainment
  async listEntity(params: any) {
    return KapiCrud.list('entertainment', params);

    // Sample HTTP GET request.
    // return this.get('entertainment', params);
  }

  // Get Entertainment
  async getEntity(id: string) {
    return KapiCrud.get('entertainment', id);

    // Sample HTTP GET request.
    // return this.get(`entertainment/${id}`);
  }

  // Update Entertainment
  async updateEntity(entity) {
    return KapiCrud.update('entertainment', entity);

    // Sample HTTP PATCH request.
    // return this.patch(entertainment, entity);
  }

  // Auto complete for Entertainment
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('entertainment');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.entertainment }));
  }

  // Allocate action for Entertainment
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Evaluate action for Entertainment
  async customAction_evaluate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for Entertainment
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for Entertainment
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Entertainment
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
