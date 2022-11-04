import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiThroatCheckup extends RESTDataSource {
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

  // Add ThroatCheckup
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('throatCheckup', entity);

    // Sample HTTP POST request.
    // return this.post('throatCheckup', entity);
  }

  // Delete ThroatCheckup
  async deleteEntity(id: string) {
    return KapiCrud.delete('throatCheckup', id);

    // Sample HTTP DELETE request.
    // return this.delete(`throatCheckup/${id}`);
  }

  // List ThroatCheckup
  async listEntity(params: any) {
    return KapiCrud.list('throatCheckup', params);

    // Sample HTTP GET request.
    // return this.get('throatCheckup', params);
  }

  // Get ThroatCheckup
  async getEntity(id: string) {
    return KapiCrud.get('throatCheckup', id);

    // Sample HTTP GET request.
    // return this.get(`throatCheckup/${id}`);
  }

  // Update ThroatCheckup
  async updateEntity(entity) {
    return KapiCrud.update('throatCheckup', entity);

    // Sample HTTP PATCH request.
    // return this.patch(throatCheckup, entity);
  }

  // Auto complete for ThroatCheckup
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('throatCheckup');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.throatCheckup }));
  }
}
