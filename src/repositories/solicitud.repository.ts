import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Admin, Asesor, Inmueble, Cliente, Estado} from '../models';
import {AdminRepository} from './admin.repository';
import {AsesorRepository} from './asesor.repository';
import {InmuebleRepository} from './inmueble.repository';
import {ClienteRepository} from './cliente.repository';
import {EstadoRepository} from './estado.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype._id,
  SolicitudRelations
> {

  public readonly admin: BelongsToAccessor<Admin, typeof Solicitud.prototype._id>;

  public readonly asesor: BelongsToAccessor<Asesor, typeof Solicitud.prototype._id>;

  public readonly inmueble: HasOneRepositoryFactory<Inmueble, typeof Solicitud.prototype._id>;

  public readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype._id>;

  public readonly estado: HasOneRepositoryFactory<Estado, typeof Solicitud.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('EstadoRepository') protected estadoRepositoryGetter: Getter<EstadoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.estado = this.createHasOneRepositoryFactoryFor('estado', estadoRepositoryGetter);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.inmueble = this.createHasOneRepositoryFactoryFor('inmueble', inmuebleRepositoryGetter);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
  }
}
