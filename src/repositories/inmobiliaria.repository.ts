import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmobiliaria, InmobiliariaRelations, Admin, Asesor} from '../models';
import {AdminRepository} from './admin.repository';
import {AsesorRepository} from './asesor.repository';

export class InmobiliariaRepository extends DefaultCrudRepository<
  Inmobiliaria,
  typeof Inmobiliaria.prototype.id,
  InmobiliariaRelations
> {

  public readonly admins: HasManyRepositoryFactory<Admin, typeof Inmobiliaria.prototype.id>;

  public readonly asesors: HasManyRepositoryFactory<Asesor, typeof Inmobiliaria.prototype.id>;

  public readonly as: HasManyRepositoryFactory<Asesor, typeof Inmobiliaria.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Inmobiliaria, dataSource);
    this.as = this.createHasManyRepositoryFactoryFor('as', asesorRepositoryGetter,);
    this.registerInclusionResolver('as', this.as.inclusionResolver);
    this.asesors = this.createHasManyRepositoryFactoryFor('asesors', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesors', this.asesors.inclusionResolver);
    this.admins = this.createHasManyRepositoryFactoryFor('admins', adminRepositoryGetter,);
    this.registerInclusionResolver('admins', this.admins.inclusionResolver);
  }
}
