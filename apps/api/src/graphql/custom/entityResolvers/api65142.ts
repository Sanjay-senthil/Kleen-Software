import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiNormalTreatment extends RESTDataSource {
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

  // Add NormalTreatment
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('normalTreatment', entity);

    // Sample HTTP POST request.
    // return this.post('normalTreatment', entity);
  }

  // Delete NormalTreatment
  async deleteEntity(id: string) {
    return KapiCrud.delete('normalTreatment', id);

    // Sample HTTP DELETE request.
    // return this.delete(`normalTreatment/${id}`);
  }

  // List NormalTreatment
  async listEntity(params: any) {
    return KapiCrud.list('normalTreatment', params);

    // Sample HTTP GET request.
    // return this.get('normalTreatment', params);
  }

  // Get NormalTreatment
  async getEntity(id: string) {
    return KapiCrud.get('normalTreatment', id);

    // Sample HTTP GET request.
    // return this.get(`normalTreatment/${id}`);
  }

  // Update NormalTreatment
  async updateEntity(entity) {
    return KapiCrud.update('normalTreatment', entity);

    // Sample HTTP PATCH request.
    // return this.patch(normalTreatment, entity);
  }

  // Auto complete for NormalTreatment
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('normalTreatment');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.normalTreatment }));
  }
}
