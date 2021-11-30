import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'inmpbiliaria_bd',
  connector: 'mysql',
  //url: 'www.db4free.net/phpMyAdmin/index.php?route=/database/structure&server=1&db=inmobiliaria_bd',
  host:'localhost', //'db4free.net',//'localhost',
  port: 3306,
  user: 'root',//'equipo2misiontic',//root
  password: '',//equipo2-MT31
  database: 'inmobiliaria_bd'
};
//equipo2-MT31
//equipo2misiontic
//inmobiliaria_bd
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class InmpbiliariaBdDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'inmpbiliaria_bd';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.inmpbiliaria_bd', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
