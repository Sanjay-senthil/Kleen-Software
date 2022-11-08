import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVehicle extends RESTDataSource {
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

  // Add Vehicle
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vehicle', entity);

    // Sample HTTP POST request.
    // return this.post('vehicle', entity);
  }

  // Delete Vehicle
  async deleteEntity(id: string) {
    return KapiCrud.delete('vehicle', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vehicle/${id}`);
  }

  // List Vehicle
  async listEntity(params: any) {
    return KapiCrud.list('vehicle', params);

    // Sample HTTP GET request.
    // return this.get('vehicle', params);
  }

  // Get Vehicle
  async getEntity(id: string) {
    return KapiCrud.get('vehicle', id);

    // Sample HTTP GET request.
    // return this.get(`vehicle/${id}`);
  }

  // Update Vehicle
  async updateEntity(entity) {
    return KapiCrud.update('vehicle', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vehicle, entity);
  }

  // Auto complete for Vehicle
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vehicle');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.vehicle }));
  }
}
