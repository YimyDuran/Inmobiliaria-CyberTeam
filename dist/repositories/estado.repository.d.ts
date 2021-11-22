import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Estado, EstadoRelations } from '../models';
export declare class EstadoRepository extends DefaultCrudRepository<Estado, typeof Estado.prototype.id, EstadoRelations> {
    constructor(dataSource: MongodbDataSource);
}
