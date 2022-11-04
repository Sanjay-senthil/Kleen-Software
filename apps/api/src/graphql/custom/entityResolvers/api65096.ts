import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiTourism extends RESTDataSource {
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

  // Add Tourism
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('tourism', entity);

    // Sample HTTP POST request.
    // return this.post('tourism', entity);
  }

  // Delete Tourism
  async deleteEntity(id: string) {
    return KapiCrud.delete('tourism', id);

    // Sample HTTP DELETE request.
    // return this.delete(`tourism/${id}`);
  }

  // List Tourism
  async listEntity(params: any) {
    return KapiCrud.list('tourism', params);

    // Sample HTTP GET request.
    // return this.get('tourism', params);
  }

  // Get Tourism
  async getEntity(id: string) {
    return KapiCrud.get('tourism', id);

    // Sample HTTP GET request.
    // return this.get(`tourism/${id}`);
  }

  // Update Tourism
  async updateEntity(entity) {
    return KapiCrud.update('tourism', entity);

    // Sample HTTP PATCH request.
    // return this.patch(tourism, entity);
  }

  // Auto complete for Tourism
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('tourism');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.tourism }));
  }

  // Alerts action for Tourism
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for Tourism
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for Tourism
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for Tourism
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for Tourism
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
