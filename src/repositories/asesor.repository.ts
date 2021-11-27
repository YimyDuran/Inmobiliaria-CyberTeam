import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesor, AsesorRelations, Inmobiliaria, Admin, Solicitud, Cliente, Inmueble} from '../models';
import {InmobiliariaRepository} from './inmobiliaria.repository';
import {AdminRepository} from './admin.repository';
import {SolicitudRepository} from './solicitud.repository';
import {ClienteRepository} from './cliente.repository';
import {InmuebleRepository} from './inmueble.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype._id,
  AsesorRelations
> {

  public readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Asesor.prototype._id>;

  public readonly admin: BelongsToAccessor<Admin, typeof Asesor.prototype._id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Asesor.prototype._id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Asesor.prototype._id>;

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Asesor.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Asesor, dataSource);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
    this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
  }
}
