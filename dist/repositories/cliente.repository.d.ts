import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Cliente, ClienteRelations, Inmobiliaria, Asesor, Solicitud } from '../models';
import { InmobiliariaRepository } from './inmobiliaria.repository';
import { AsesorRepository } from './asesor.repository';
import { SolicitudRepository } from './solicitud.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>;
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Cliente.prototype.id>;
    readonly asesor: BelongsToAccessor<Asesor, typeof Cliente.prototype.id>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;
    constructor(dataSource: MongodbDataSource, inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, asesorRepositoryGetter: Getter<AsesorRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
