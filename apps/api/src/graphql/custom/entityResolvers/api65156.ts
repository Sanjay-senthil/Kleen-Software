import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVehicleLoan extends RESTDataSource {
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

  // Add VehicleLoan
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vehicleLoan', entity);

    // Sample HTTP POST request.
    // return this.post('vehicleLoan', entity);
  }

  // Delete VehicleLoan
  async deleteEntity(id: string) {
    return KapiCrud.delete('vehicleLoan', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vehicleLoan/${id}`);
  }

  // List VehicleLoan
  async listEntity(params: any) {
    return KapiCrud.list('vehicleLoan', params);

    // Sample HTTP GET request.
    // return this.get('vehicleLoan', params);
  }

  // Get VehicleLoan
  async getEntity(id: string) {
    return KapiCrud.get('vehicleLoan', id);

    // Sample HTTP GET request.
    // return this.get(`vehicleLoan/${id}`);
  }

  // Update VehicleLoan
  async updateEntity(entity) {
    return KapiCrud.update('vehicleLoan', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vehicleLoan, entity);
  }

  // Auto complete for VehicleLoan
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vehicleLoan');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.vehicleLoan }));
  }
}
