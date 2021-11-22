import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Inmueble, InmuebleRelations, Asesor, Admin, Solicitud } from '../models';
import { AsesorRepository } from './asesor.repository';
import { AdminRepository } from './admin.repository';
import { SolicitudRepository } from './solicitud.repository';
export declare class InmuebleRepository extends DefaultCrudRepository<Inmueble, typeof Inmueble.prototype.id, InmuebleRelations> {
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected adminRepositoryGetter: Getter<AdminRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly asesor: BelongsToAccessor<Asesor, typeof Inmueble.prototype.id>;
    readonly admin: BelongsToAccessor<Admin, typeof Inmueble.prototype.id>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Inmueble.prototype.id>;
    constructor(dataSource: MongodbDataSource, asesorRepositoryGetter: Getter<AsesorRepository>, adminRepositoryGetter: Getter<AdminRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
