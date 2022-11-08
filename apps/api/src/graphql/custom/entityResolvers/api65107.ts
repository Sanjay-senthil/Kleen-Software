import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPub extends RESTDataSource {
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

  // Add Pub
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('pub', entity);

    // Sample HTTP POST request.
    // return this.post('pub', entity);
  }

  // Delete Pub
  async deleteEntity(id: string) {
    return KapiCrud.delete('pub', id);

    // Sample HTTP DELETE request.
    // return this.delete(`pub/${id}`);
  }

  // List Pub
  async listEntity(params: any) {
    return KapiCrud.list('pub', params);

    // Sample HTTP GET request.
    // return this.get('pub', params);
  }

  // Get Pub
  async getEntity(id: string) {
    return KapiCrud.get('pub', id);

    // Sample HTTP GET request.
    // return this.get(`pub/${id}`);
  }

  // Update Pub
  async updateEntity(entity) {
    return KapiCrud.update('pub', entity);

    // Sample HTTP PATCH request.
    // return this.patch(pub, entity);
  }

  // Auto complete for Pub
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('pub');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.pub }));
  }

  // Allocate action for Pub
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Compliant action for Pub
  async customAction_compliant(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Evaluate action for Pub
  async customAction_evaluate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for Pub
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for Pub
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Pub
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
