import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiFoodServices extends RESTDataSource {
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

  // Add FoodServices
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('foodServices', entity);

    // Sample HTTP POST request.
    // return this.post('foodServices', entity);
  }

  // Delete FoodServices
  async deleteEntity(id: string) {
    return KapiCrud.delete('foodServices', id);

    // Sample HTTP DELETE request.
    // return this.delete(`foodServices/${id}`);
  }

  // List FoodServices
  async listEntity(params: any) {
    return KapiCrud.list('foodServices', params);

    // Sample HTTP GET request.
    // return this.get('foodServices', params);
  }

  // Get FoodServices
  async getEntity(id: string) {
    return KapiCrud.get('foodServices', id);

    // Sample HTTP GET request.
    // return this.get(`foodServices/${id}`);
  }

  // Update FoodServices
  async updateEntity(entity) {
    return KapiCrud.update('foodServices', entity);

    // Sample HTTP PATCH request.
    // return this.patch(foodServices, entity);
  }

  // Auto complete for FoodServices
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('foodServices');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.foodServices }));
  }

  // Customize action for FoodServices
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for FoodServices
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for FoodServices
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
