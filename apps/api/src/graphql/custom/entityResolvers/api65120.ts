import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSurgicalDetails extends RESTDataSource {
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

  // Add SurgicalDetails
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('surgicalDetails', entity);

    // Sample HTTP POST request.
    // return this.post('surgicalDetails', entity);
  }

  // Delete SurgicalDetails
  async deleteEntity(id: string) {
    return KapiCrud.delete('surgicalDetails', id);

    // Sample HTTP DELETE request.
    // return this.delete(`surgicalDetails/${id}`);
  }

  // List SurgicalDetails
  async listEntity(params: any) {
    return KapiCrud.list('surgicalDetails', params);

    // Sample HTTP GET request.
    // return this.get('surgicalDetails', params);
  }

  // Get SurgicalDetails
  async getEntity(id: string) {
    return KapiCrud.get('surgicalDetails', id);

    // Sample HTTP GET request.
    // return this.get(`surgicalDetails/${id}`);
  }

  // Update SurgicalDetails
  async updateEntity(entity) {
    return KapiCrud.update('surgicalDetails', entity);

    // Sample HTTP PATCH request.
    // return this.patch(surgicalDetails, entity);
  }

  // Auto complete for SurgicalDetails
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('surgicalDetails');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.surgicalDetails }));
  }
}
