import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLaundry extends RESTDataSource {
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

  // Add Laundry
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('laundry', entity);

    // Sample HTTP POST request.
    // return this.post('laundry', entity);
  }

  // Delete Laundry
  async deleteEntity(id: string) {
    return KapiCrud.delete('laundry', id);

    // Sample HTTP DELETE request.
    // return this.delete(`laundry/${id}`);
  }

  // List Laundry
  async listEntity(params: any) {
    return KapiCrud.list('laundry', params);

    // Sample HTTP GET request.
    // return this.get('laundry', params);
  }

  // Get Laundry
  async getEntity(id: string) {
    return KapiCrud.get('laundry', id);

    // Sample HTTP GET request.
    // return this.get(`laundry/${id}`);
  }

  // Update Laundry
  async updateEntity(entity) {
    return KapiCrud.update('laundry', entity);

    // Sample HTTP PATCH request.
    // return this.patch(laundry, entity);
  }

  // Auto complete for Laundry
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('laundry');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.laundry }));
  }

  // Customize action for Laundry
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Rating action for Laundry
  async customAction_rating(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Laundry
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for Laundry
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
