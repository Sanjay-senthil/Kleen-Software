import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDowntimeHours extends RESTDataSource {
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

  // Add DowntimeHours
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('downtimeHours', entity);

    // Sample HTTP POST request.
    // return this.post('downtimeHours', entity);
  }

  // Delete DowntimeHours
  async deleteEntity(id: string) {
    return KapiCrud.delete('downtimeHours', id);

    // Sample HTTP DELETE request.
    // return this.delete(`downtimeHours/${id}`);
  }

  // List DowntimeHours
  async listEntity(params: any) {
    return KapiCrud.list('downtimeHours', params);

    // Sample HTTP GET request.
    // return this.get('downtimeHours', params);
  }

  // Get DowntimeHours
  async getEntity(id: string) {
    return KapiCrud.get('downtimeHours', id);

    // Sample HTTP GET request.
    // return this.get(`downtimeHours/${id}`);
  }

  // Update DowntimeHours
  async updateEntity(entity) {
    return KapiCrud.update('downtimeHours', entity);

    // Sample HTTP PATCH request.
    // return this.patch(downtimeHours, entity);
  }

  // Auto complete for DowntimeHours
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('downtimeHours');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.downtimeHours }));
  }
}
