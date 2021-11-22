import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Admin, Asesor, Cliente, Estado, Inmueble, Solicitud, SolicitudRelations } from '../models';
import { AdminRepository } from './admin.repository';
import { AsesorRepository } from './asesor.repository';
import { ClienteRepository } from './cliente.repository';
import { EstadoRepository } from './estado.repository';
import { InmuebleRepository } from './inmueble.repository';
export declare class SolicitudRepository extends DefaultCrudRepository<Solicitud, typeof Solicitud.prototype.id, SolicitudRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected inmuebleRepositoryGetter: Getter<InmuebleRepository>;
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected adminRepositoryGetter: Getter<AdminRepository>;
    protected estadoRepositoryGetter: Getter<EstadoRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype.id>;
    readonly inmueble: HasOneRepositoryFactory<Inmueble, typeof Solicitud.prototype.id>;
    readonly asesor: HasOneRepositoryFactory<Asesor, typeof Solicitud.prototype.id>;
    readonly admin: HasOneRepositoryFactory<Admin, typeof Solicitud.prototype.id>;
    readonly estado: HasOneRepositoryFactory<Estado, typeof Solicitud.prototype.id>;
    constructor(dataSource: MongodbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, inmuebleRepositoryGetter: Getter<InmuebleRepository>, asesorRepositoryGetter: Getter<AsesorRepository>, adminRepositoryGetter: Getter<AdminRepository>, estadoRepositoryGetter: Getter<EstadoRepository>);
}
