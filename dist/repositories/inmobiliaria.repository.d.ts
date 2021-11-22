import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Inmobiliaria, InmobiliariaRelations, Admin, Asesor, Cliente } from '../models';
import { AdminRepository } from './admin.repository';
import { AsesorRepository } from './asesor.repository';
import { ClienteRepository } from './cliente.repository';
export declare class InmobiliariaRepository extends DefaultCrudRepository<Inmobiliaria, typeof Inmobiliaria.prototype._id, InmobiliariaRelations> {
    protected adminRepositoryGetter: Getter<AdminRepository>;
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    readonly admins: HasManyRepositoryFactory<Admin, typeof Inmobiliaria.prototype._id>;
    readonly asesors: HasManyRepositoryFactory<Asesor, typeof Inmobiliaria.prototype._id>;
    readonly clientes: HasManyRepositoryFactory<Cliente, typeof Inmobiliaria.prototype._id>;
    constructor(dataSource: MongodbDataSource, adminRepositoryGetter: Getter<AdminRepository>, asesorRepositoryGetter: Getter<AsesorRepository>, clienteRepositoryGetter: Getter<ClienteRepository>);
}
