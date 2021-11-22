import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Asesor, AsesorRelations, Inmobiliaria, Inmueble, Admin, Cliente, Solicitud, Estado } from '../models';
import { InmobiliariaRepository } from './inmobiliaria.repository';
import { InmuebleRepository } from './inmueble.repository';
import { AdminRepository } from './admin.repository';
import { ClienteRepository } from './cliente.repository';
import { SolicitudRepository } from './solicitud.repository';
import { EstadoRepository } from './estado.repository';
export declare class AsesorRepository extends DefaultCrudRepository<Asesor, typeof Asesor.prototype.id, AsesorRelations> {
    protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    protected adminRepositoryGetter: Getter<AdminRepository>;
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>;
    protected estadoRepositoryGetter: Getter<EstadoRepository>;
    readonly inmobiliaria_asesor: BelongsToAccessor<Inmobiliaria, typeof Asesor.prototype.id>;
    readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Asesor.prototype.id>;
    readonly admin: BelongsToAccessor<Admin, typeof Asesor.prototype.id>;
    readonly clientes: HasManyRepositoryFactory<Cliente, typeof Asesor.prototype.id>;
    readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Asesor.prototype.id>;
    readonly estados: HasManyRepositoryFactory<Estado, typeof Asesor.prototype.id>;
    constructor(dataSource: MongodbDataSource, inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>, adminRepositoryGetter: Getter<AdminRepository>, clienteRepositoryGetter: Getter<ClienteRepository>, solicitudRepositoryGetter: Getter<SolicitudRepository>, estadoRepositoryGetter: Getter<EstadoRepository>);
}
