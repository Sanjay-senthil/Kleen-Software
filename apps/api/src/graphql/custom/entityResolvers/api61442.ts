import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVehicleBrand extends RESTDataSource {
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

  // Add VehicleBrand
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vehicleBrand', entity);

    // Sample HTTP POST request.
    // return this.post('vehicleBrand', entity);
  }

  // Delete VehicleBrand
  async deleteEntity(id: string) {
    return KapiCrud.delete('vehicleBrand', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vehicleBrand/${id}`);
  }

  // List VehicleBrand
  async listEntity(params: any) {
    return KapiCrud.list('vehicleBrand', params);

    // Sample HTTP GET request.
    // return this.get('vehicleBrand', params);
  }

  // Get VehicleBrand
  async getEntity(id: string) {
    return KapiCrud.get('vehicleBrand', id);

    // Sample HTTP GET request.
    // return this.get(`vehicleBrand/${id}`);
  }

  // Update VehicleBrand
  async updateEntity(entity) {
    return KapiCrud.update('vehicleBrand', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vehicleBrand, entity);
  }

  // Auto complete for VehicleBrand
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vehicleBrand');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.vehicleBrand }));
  }
}
