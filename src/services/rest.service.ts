import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestServiceDataSource} from '../datasources';

export interface Rest {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class RestProvider implements Provider<Rest> {
  constructor(
    // restService must match the name property in the datasource json file
    @inject('datasources.restService')
    protected dataSource: RestServiceDataSource = new RestServiceDataSource(),
  ) {}

  value(): Promise<Rest> {
    return getService(this.dataSource);
  }
}
