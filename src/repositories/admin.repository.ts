import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Admin, AdminRelations, Inmobiliaria} from '../models';
import {InmobiliariaRepository} from './inmobiliaria.repository';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.id ,
  AdminRelations
> {

  public readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Admin.prototype.InmobiliariaId>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>,
  ) {
    super(Admin, dataSource);
    this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
  }
}
