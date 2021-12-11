import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesor, Cliente, ClienteRelations, Inmobiliaria, Solicitud} from '../models';
import {AsesorRepository} from './asesor.repository';
import {InmobiliariaRepository} from './inmobiliaria.repository';
import {SolicitudRepository} from './solicitud.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype._id,
  ClienteRelations
> {

  public readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Cliente.prototype._id>;

  public readonly asesor: BelongsToAccessor<Asesor, typeof Cliente.prototype._id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Cliente, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
  }
}
