import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAge extends RESTDataSource {
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

  // Add Age
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('age', entity);

    // Sample HTTP POST request.
    // return this.post('age', entity);
  }

  // Delete Age
  async deleteEntity(id: string) {
    return KapiCrud.delete('age', id);

    // Sample HTTP DELETE request.
    // return this.delete(`age/${id}`);
  }

  // List Age
  async listEntity(params: any) {
    return KapiCrud.list('age', params);

    // Sample HTTP GET request.
    // return this.get('age', params);
  }

  // Get Age
  async getEntity(id: string) {
    return KapiCrud.get('age', id);

    // Sample HTTP GET request.
    // return this.get(`age/${id}`);
  }

  // Update Age
  async updateEntity(entity) {
    return KapiCrud.update('age', entity);

    // Sample HTTP PATCH request.
    // return this.patch(age, entity);
  }

  // Auto complete for Age
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('age');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.age }));
  }

  // Be Modified action for Age
  async customAction_beModified(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
