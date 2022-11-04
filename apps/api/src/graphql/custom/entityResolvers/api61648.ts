import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiServiceRecordType extends RESTDataSource {
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

  // Add ServiceRecordType
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('serviceRecordType', entity);

    // Sample HTTP POST request.
    // return this.post('serviceRecordType', entity);
  }

  // Delete ServiceRecordType
  async deleteEntity(id: string) {
    return KapiCrud.delete('serviceRecordType', id);

    // Sample HTTP DELETE request.
    // return this.delete(`serviceRecordType/${id}`);
  }

  // List ServiceRecordType
  async listEntity(params: any) {
    return KapiCrud.list('serviceRecordType', params);

    // Sample HTTP GET request.
    // return this.get('serviceRecordType', params);
  }

  // Get ServiceRecordType
  async getEntity(id: string) {
    return KapiCrud.get('serviceRecordType', id);

    // Sample HTTP GET request.
    // return this.get(`serviceRecordType/${id}`);
  }

  // Update ServiceRecordType
  async updateEntity(entity) {
    return KapiCrud.update('serviceRecordType', entity);

    // Sample HTTP PATCH request.
    // return this.patch(serviceRecordType, entity);
  }

  // Auto complete for ServiceRecordType
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('serviceRecordType');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.serviceRecordType }));
  }
}
