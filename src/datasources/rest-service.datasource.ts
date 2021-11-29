import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'restService',
  connector: 'rest',
  baseURL: 'http://localhost:3000/signup',
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestServiceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'restService';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.restService', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
