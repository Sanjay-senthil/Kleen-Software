import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCampFire extends RESTDataSource {
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

  // Add CampFire
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('campFire', entity);

    // Sample HTTP POST request.
    // return this.post('campFire', entity);
  }

  // Delete CampFire
  async deleteEntity(id: string) {
    return KapiCrud.delete('campFire', id);

    // Sample HTTP DELETE request.
    // return this.delete(`campFire/${id}`);
  }

  // List CampFire
  async listEntity(params: any) {
    return KapiCrud.list('campFire', params);

    // Sample HTTP GET request.
    // return this.get('campFire', params);
  }

  // Get CampFire
  async getEntity(id: string) {
    return KapiCrud.get('campFire', id);

    // Sample HTTP GET request.
    // return this.get(`campFire/${id}`);
  }

  // Update CampFire
  async updateEntity(entity) {
    return KapiCrud.update('campFire', entity);

    // Sample HTTP PATCH request.
    // return this.patch(campFire, entity);
  }

  // Auto complete for CampFire
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('campFire');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.campFire }));
  }

  // Alerts action for CampFire
  async customAction_alerts(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Allocate action for CampFire
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Emergency action for CampFire
  async customAction_emergency(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for CampFire
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for CampFire
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
