import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesor, AsesorRelations, Inmobiliaria} from '../models';
import {InmobiliariaRepository} from './inmobiliaria.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype.id,
  AsesorRelations
> {

  public readonly inmobiliaria: BelongsToAccessor<Inmobiliaria, typeof Asesor.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('InmobiliariaRepository') protected inmobiliariaRepositoryGetter: Getter<InmobiliariaRepository>,
  ) {
    super(Asesor, dataSource);
    this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter,);
    this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
  }
}
