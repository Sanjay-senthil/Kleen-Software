import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCleaning extends RESTDataSource {
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

  // Add Cleaning
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cleaning', entity);

    // Sample HTTP POST request.
    // return this.post('cleaning', entity);
  }

  // Delete Cleaning
  async deleteEntity(id: string) {
    return KapiCrud.delete('cleaning', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cleaning/${id}`);
  }

  // List Cleaning
  async listEntity(params: any) {
    return KapiCrud.list('cleaning', params);

    // Sample HTTP GET request.
    // return this.get('cleaning', params);
  }

  // Get Cleaning
  async getEntity(id: string) {
    return KapiCrud.get('cleaning', id);

    // Sample HTTP GET request.
    // return this.get(`cleaning/${id}`);
  }

  // Update Cleaning
  async updateEntity(entity) {
    return KapiCrud.update('cleaning', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cleaning, entity);
  }

  // Auto complete for Cleaning
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cleaning');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.cleaning }));
  }

  // Customize action for Cleaning
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Rating action for Cleaning
  async customAction_rating(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Cleaning
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for Cleaning
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
