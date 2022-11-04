import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGeneralTreatment extends RESTDataSource {
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

  // Add GeneralTreatment
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('generalTreatment', entity);

    // Sample HTTP POST request.
    // return this.post('generalTreatment', entity);
  }

  // Delete GeneralTreatment
  async deleteEntity(id: string) {
    return KapiCrud.delete('generalTreatment', id);

    // Sample HTTP DELETE request.
    // return this.delete(`generalTreatment/${id}`);
  }

  // List GeneralTreatment
  async listEntity(params: any) {
    return KapiCrud.list('generalTreatment', params);

    // Sample HTTP GET request.
    // return this.get('generalTreatment', params);
  }

  // Get GeneralTreatment
  async getEntity(id: string) {
    return KapiCrud.get('generalTreatment', id);

    // Sample HTTP GET request.
    // return this.get(`generalTreatment/${id}`);
  }

  // Update GeneralTreatment
  async updateEntity(entity) {
    return KapiCrud.update('generalTreatment', entity);

    // Sample HTTP PATCH request.
    // return this.patch(generalTreatment, entity);
  }

  // Auto complete for GeneralTreatment
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('generalTreatment');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.generalTreatment }));
  }
}
