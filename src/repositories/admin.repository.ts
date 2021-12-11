import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Admin, AdminRelations, Asesor, Inmobiliaria, Inmueble, Solicitud} from '../models';
import {AsesorRepository} from './asesor.repository';
import {InmobiliariaRepository} from './inmobiliaria.repository';
import {InmuebleRepository} from './inmueble.repository';
import {SolicitudRepository} from './solicitud.repository';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype._id,
  AdminRelations
> {

  public readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Admin.prototype._id>;

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Admin.prototype._id>;

  public readonly asesors: HasManyRepositoryFactory<Asesor, typeof Admin.prototype._id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Admin.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Admin, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.asesors = this.createHasManyRepositoryFactoryFor('asesors', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesors', this.asesors.inclusionResolver);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
    this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
  }
}
