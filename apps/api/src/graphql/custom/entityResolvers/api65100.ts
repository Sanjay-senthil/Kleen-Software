import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiRoomServices extends RESTDataSource {
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

  // Add RoomServices
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('roomServices', entity);

    // Sample HTTP POST request.
    // return this.post('roomServices', entity);
  }

  // Delete RoomServices
  async deleteEntity(id: string) {
    return KapiCrud.delete('roomServices', id);

    // Sample HTTP DELETE request.
    // return this.delete(`roomServices/${id}`);
  }

  // List RoomServices
  async listEntity(params: any) {
    return KapiCrud.list('roomServices', params);

    // Sample HTTP GET request.
    // return this.get('roomServices', params);
  }

  // Get RoomServices
  async getEntity(id: string) {
    return KapiCrud.get('roomServices', id);

    // Sample HTTP GET request.
    // return this.get(`roomServices/${id}`);
  }

  // Update RoomServices
  async updateEntity(entity) {
    return KapiCrud.update('roomServices', entity);

    // Sample HTTP PATCH request.
    // return this.patch(roomServices, entity);
  }

  // Auto complete for RoomServices
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('roomServices');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.roomServices }));
  }

  // Customize action for RoomServices
  async customAction_customize(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Rating action for RoomServices
  async customAction_rating(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Report action for RoomServices
  async customAction_report(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // Update Report action for RoomServices
  async customAction_updateReport(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
