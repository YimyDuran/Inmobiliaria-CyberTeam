import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Admin, AdminRelations, Inmobiliaria, Asesor, Inmueble, Solicitud } from '../models';
import { InmobiliariaRepository } from './inmobiliaria.repository';
import { AsesorRepository } from './asesor.repository';
import { InmuebleRepository } from './inmueble.repository';
import { SolicitudRepository } from './solicitud.repository';
export declare class AdminRepository extends DefaultCrudRepository<Admin, typeof Admin.prototype.id, AdminRelations> {
    protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>;
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    readonly inmobiliaria_admin: BelongsToAccessor<Inmobiliaria, typeof Admin.prototype.id>;
    readonly asesors: HasManyRepositoryFactory<Asesor, typeof Admin.prototype.id>;
    readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Admin.prototype.id>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Admin.prototype.id>;
    constructor(dataSource: MongodbDataSource, inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, asesorRepositoryGetter: Getter<AsesorRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>);
}
