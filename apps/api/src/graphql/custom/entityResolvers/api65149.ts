import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiVehicleInsurance extends RESTDataSource {
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

  // Add VehicleInsurance
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('vehicleInsurance', entity);

    // Sample HTTP POST request.
    // return this.post('vehicleInsurance', entity);
  }

  // Delete VehicleInsurance
  async deleteEntity(id: string) {
    return KapiCrud.delete('vehicleInsurance', id);

    // Sample HTTP DELETE request.
    // return this.delete(`vehicleInsurance/${id}`);
  }

  // List VehicleInsurance
  async listEntity(params: any) {
    return KapiCrud.list('vehicleInsurance', params);

    // Sample HTTP GET request.
    // return this.get('vehicleInsurance', params);
  }

  // Get VehicleInsurance
  async getEntity(id: string) {
    return KapiCrud.get('vehicleInsurance', id);

    // Sample HTTP GET request.
    // return this.get(`vehicleInsurance/${id}`);
  }

  // Update VehicleInsurance
  async updateEntity(entity) {
    return KapiCrud.update('vehicleInsurance', entity);

    // Sample HTTP PATCH request.
    // return this.patch(vehicleInsurance, entity);
  }

  // Auto complete for VehicleInsurance
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('vehicleInsurance');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.vehicleInsurance }));
  }
}
