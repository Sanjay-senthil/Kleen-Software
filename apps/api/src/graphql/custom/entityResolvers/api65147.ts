import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiInsurance extends RESTDataSource {
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

  // Add Insurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('insurance', entity);

    // Sample HTTP POST request.
    // return this.post('insurance', entity);
  }

  // Delete Insurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('insurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`insurance/${id}`);
  }

  // List Insurance
  async listEntity(params: any) {
    return KapiCrud.list('insurance', params);

    // Sample HTTP GET request.
    // return this.get('insurance', params);
  }

  // Get Insurance
  async getEntity(id: string) {
    return KapiCrud.get('insurance', id);

    // Sample HTTP GET request.
    // return this.get(`insurance/${id}`);
  }

  // Update Insurance
  async updateEntity(entity) {
    return KapiCrud.update('insurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(insurance, entity);
  }

  // Auto complete for Insurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('insurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.insurance }));
  }

  // ADD NEW action for Insurance
  async customAction_addNew(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
