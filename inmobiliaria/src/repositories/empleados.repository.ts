import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InmpbiliariaBdDataSource} from '../datasources';
import {Empleados, EmpleadosRelations} from '../models';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.id,
  EmpleadosRelations
> {
  constructor(
    @inject('datasources.inmpbiliaria_bd') dataSource: InmpbiliariaBdDataSource,
  ) {
    super(Empleados, dataSource);
  }
}
