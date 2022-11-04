import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiNonVegeterianFood extends RESTDataSource {
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

  // Add NonVegeterianFood
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('nonVegeterianFood', entity);

    // Sample HTTP POST request.
    // return this.post('nonVegeterianFood', entity);
  }

  // Delete NonVegeterianFood
  async deleteEntity(id: string) {
    return KapiCrud.delete('nonVegeterianFood', id);

    // Sample HTTP DELETE request.
    // return this.delete(`nonVegeterianFood/${id}`);
  }

  // List NonVegeterianFood
  async listEntity(params: any) {
    return KapiCrud.list('nonVegeterianFood', params);

    // Sample HTTP GET request.
    // return this.get('nonVegeterianFood', params);
  }

  // Get NonVegeterianFood
  async getEntity(id: string) {
    return KapiCrud.get('nonVegeterianFood', id);

    // Sample HTTP GET request.
    // return this.get(`nonVegeterianFood/${id}`);
  }

  // Update NonVegeterianFood
  async updateEntity(entity) {
    return KapiCrud.update('nonVegeterianFood', entity);

    // Sample HTTP PATCH request.
    // return this.patch(nonVegeterianFood, entity);
  }

  // Auto complete for NonVegeterianFood
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('nonVegeterianFood');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.nonVegeterianFood }));
  }

  // Customize action for NonVegeterianFood
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for NonVegeterianFood
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for NonVegeterianFood
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
