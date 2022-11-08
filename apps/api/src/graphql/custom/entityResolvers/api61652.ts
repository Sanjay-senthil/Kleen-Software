import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiWarrantyStatus extends RESTDataSource {
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

  // Add WarrantyStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('warrantyStatus', entity);

    // Sample HTTP POST request.
    // return this.post('warrantyStatus', entity);
  }

  // Delete WarrantyStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('warrantyStatus', id);

    // Sample HTTP DELETE request.
    // return this.delete(`warrantyStatus/${id}`);
  }

  // List WarrantyStatus
  async listEntity(params: any) {
    return KapiCrud.list('warrantyStatus', params);

    // Sample HTTP GET request.
    // return this.get('warrantyStatus', params);
  }

  // Get WarrantyStatus
  async getEntity(id: string) {
    return KapiCrud.get('warrantyStatus', id);

    // Sample HTTP GET request.
    // return this.get(`warrantyStatus/${id}`);
  }

  // Update WarrantyStatus
  async updateEntity(entity) {
    return KapiCrud.update('warrantyStatus', entity);

    // Sample HTTP PATCH request.
    // return this.patch(warrantyStatus, entity);
  }

  // Auto complete for WarrantyStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('warrantyStatus');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.warrantyStatus }));
  }
}
