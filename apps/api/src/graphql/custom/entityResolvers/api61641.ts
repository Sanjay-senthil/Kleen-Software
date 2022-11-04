import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiServiceDescription extends RESTDataSource {
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

  // Add ServiceDescription
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('serviceDescription', entity);

    // Sample HTTP POST request.
    // return this.post('serviceDescription', entity);
  }

  // Delete ServiceDescription
  async deleteEntity(id: string) {
    return KapiCrud.delete('serviceDescription', id);

    // Sample HTTP DELETE request.
    // return this.delete(`serviceDescription/${id}`);
  }

  // List ServiceDescription
  async listEntity(params: any) {
    return KapiCrud.list('serviceDescription', params);

    // Sample HTTP GET request.
    // return this.get('serviceDescription', params);
  }

  // Get ServiceDescription
  async getEntity(id: string) {
    return KapiCrud.get('serviceDescription', id);

    // Sample HTTP GET request.
    // return this.get(`serviceDescription/${id}`);
  }

  // Update ServiceDescription
  async updateEntity(entity) {
    return KapiCrud.update('serviceDescription', entity);

    // Sample HTTP PATCH request.
    // return this.patch(serviceDescription, entity);
  }

  // Auto complete for ServiceDescription
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('serviceDescription');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.serviceDescription }));
  }
}
