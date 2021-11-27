import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Admin, Asesor, Solicitud} from '../models';
import {AdminRepository} from './admin.repository';
import {AsesorRepository} from './asesor.repository';
import {SolicitudRepository} from './solicitud.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype._id,
  InmuebleRelations
> {

  public readonly admin: BelongsToAccessor<Admin, typeof Inmueble.prototype._id>;

  public readonly asesor: HasOneRepositoryFactory<Asesor, typeof Inmueble.prototype._id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Inmueble.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Inmueble, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.asesor = this.createHasOneRepositoryFactoryFor('asesor', asesorRepositoryGetter);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
  }
}
