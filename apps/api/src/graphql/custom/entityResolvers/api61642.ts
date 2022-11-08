import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDatePerformed extends RESTDataSource {
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

  // Add DatePerformed
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('datePerformed', entity);

    // Sample HTTP POST request.
    // return this.post('datePerformed', entity);
  }

  // Delete DatePerformed
  async deleteEntity(id: string) {
    return KapiCrud.delete('datePerformed', id);

    // Sample HTTP DELETE request.
    // return this.delete(`datePerformed/${id}`);
  }

  // List DatePerformed
  async listEntity(params: any) {
    return KapiCrud.list('datePerformed', params);

    // Sample HTTP GET request.
    // return this.get('datePerformed', params);
  }

  // Get DatePerformed
  async getEntity(id: string) {
    return KapiCrud.get('datePerformed', id);

    // Sample HTTP GET request.
    // return this.get(`datePerformed/${id}`);
  }

  // Update DatePerformed
  async updateEntity(entity) {
    return KapiCrud.update('datePerformed', entity);

    // Sample HTTP PATCH request.
    // return this.patch(datePerformed, entity);
  }

  // Auto complete for DatePerformed
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('datePerformed');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.datePerformed }));
  }
}
