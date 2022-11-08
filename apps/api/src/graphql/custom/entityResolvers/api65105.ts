import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBoatHouse extends RESTDataSource {
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

  // Add BoatHouse
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('boatHouse', entity);

    // Sample HTTP POST request.
    // return this.post('boatHouse', entity);
  }

  // Delete BoatHouse
  async deleteEntity(id: string) {
    return KapiCrud.delete('boatHouse', id);

    // Sample HTTP DELETE request.
    // return this.delete(`boatHouse/${id}`);
  }

  // List BoatHouse
  async listEntity(params: any) {
    return KapiCrud.list('boatHouse', params);

    // Sample HTTP GET request.
    // return this.get('boatHouse', params);
  }

  // Get BoatHouse
  async getEntity(id: string) {
    return KapiCrud.get('boatHouse', id);

    // Sample HTTP GET request.
    // return this.get(`boatHouse/${id}`);
  }

  // Update BoatHouse
  async updateEntity(entity) {
    return KapiCrud.update('boatHouse', entity);

    // Sample HTTP PATCH request.
    // return this.patch(boatHouse, entity);
  }

  // Auto complete for BoatHouse
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('boatHouse');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.boatHouse }));
  }

  // Allocate action for BoatHouse
  async customAction_allocate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Evaluate action for BoatHouse
  async customAction_evaluate(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Modify action for BoatHouse
  async customAction_modify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Notify action for BoatHouse
  async customAction_notify(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for BoatHouse
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
