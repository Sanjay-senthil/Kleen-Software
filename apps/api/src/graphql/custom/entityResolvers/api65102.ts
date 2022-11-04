import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVegeterianFood extends RESTDataSource {
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

  // Add VegeterianFood
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vegeterianFood', entity);

    // Sample HTTP POST request.
    // return this.post('vegeterianFood', entity);
  }

  // Delete VegeterianFood
  async deleteEntity(id: string) {
    return KapiCrud.delete('vegeterianFood', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vegeterianFood/${id}`);
  }

  // List VegeterianFood
  async listEntity(params: any) {
    return KapiCrud.list('vegeterianFood', params);

    // Sample HTTP GET request.
    // return this.get('vegeterianFood', params);
  }

  // Get VegeterianFood
  async getEntity(id: string) {
    return KapiCrud.get('vegeterianFood', id);

    // Sample HTTP GET request.
    // return this.get(`vegeterianFood/${id}`);
  }

  // Update VegeterianFood
  async updateEntity(entity) {
    return KapiCrud.update('vegeterianFood', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vegeterianFood, entity);
  }

  // Auto complete for VegeterianFood
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vegeterianFood');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.vegeterianFood }));
  }

  // Customize action for VegeterianFood
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for VegeterianFood
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for VegeterianFood
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
