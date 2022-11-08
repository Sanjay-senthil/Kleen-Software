import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiServices extends RESTDataSource {
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

  // Add Services
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('services', entity);

    // Sample HTTP POST request.
    // return this.post('services', entity);
  }

  // Delete Services
  async deleteEntity(id: string) {
    return KapiCrud.delete('services', id);

    // Sample HTTP DELETE request.
    // return this.delete(`services/${id}`);
  }

  // List Services
  async listEntity(params: any) {
    return KapiCrud.list('services', params);

    // Sample HTTP GET request.
    // return this.get('services', params);
  }

  // Get Services
  async getEntity(id: string) {
    return KapiCrud.get('services', id);

    // Sample HTTP GET request.
    // return this.get(`services/${id}`);
  }

  // Update Services
  async updateEntity(entity) {
    return KapiCrud.update('services', entity);

    // Sample HTTP PATCH request.
    // return this.patch(services, entity);
  }

  // Auto complete for Services
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('services');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.services }));
  }

  // Customize action for Services
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for Services
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for Services
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
