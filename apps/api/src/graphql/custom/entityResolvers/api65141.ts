import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGeneralCheckup extends RESTDataSource {
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

  // Add GeneralCheckup
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('generalCheckup', entity);

    // Sample HTTP POST request.
    // return this.post('generalCheckup', entity);
  }

  // Delete GeneralCheckup
  async deleteEntity(id: string) {
    return KapiCrud.delete('generalCheckup', id);

    // Sample HTTP DELETE request.
    // return this.delete(`generalCheckup/${id}`);
  }

  // List GeneralCheckup
  async listEntity(params: any) {
    return KapiCrud.list('generalCheckup', params);

    // Sample HTTP GET request.
    // return this.get('generalCheckup', params);
  }

  // Get GeneralCheckup
  async getEntity(id: string) {
    return KapiCrud.get('generalCheckup', id);

    // Sample HTTP GET request.
    // return this.get(`generalCheckup/${id}`);
  }

  // Update GeneralCheckup
  async updateEntity(entity) {
    return KapiCrud.update('generalCheckup', entity);

    // Sample HTTP PATCH request.
    // return this.patch(generalCheckup, entity);
  }

  // Auto complete for GeneralCheckup
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('generalCheckup');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.generalCheckup }));
  }
}
