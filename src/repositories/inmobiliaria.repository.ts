import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Admin, Asesor, Cliente, Inmobiliaria, InmobiliariaRelations} from '../models';
import {AdminRepository} from './admin.repository';
import {AsesorRepository} from './asesor.repository';
import {ClienteRepository} from './cliente.repository';

export class InmobiliariaRepository extends DefaultCrudRepository<
  Inmobiliaria,
  typeof Inmobiliaria.prototype._id,
  InmobiliariaRelations
> {

  public readonly admins: HasManyRepositoryFactory<Admin, typeof Inmobiliaria.prototype._id>;

  public readonly asesors: HasManyRepositoryFactory<Asesor, typeof Inmobiliaria.prototype._id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Inmobiliaria.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Inmobiliaria, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.asesors = this.createHasManyRepositoryFactoryFor('asesors', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesors', this.asesors.inclusionResolver);
    this.admins = this.createHasManyRepositoryFactoryFor('admins', adminRepositoryGetter,);
    this.registerInclusionResolver('admins', this.admins.inclusionResolver);
  }
}
