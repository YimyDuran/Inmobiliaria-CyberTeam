import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Estado, EstadoRelations, Asesor} from '../models';
import {AsesorRepository} from './asesor.repository';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype._id,
  EstadoRelations
> {

  public readonly asesor: HasOneRepositoryFactory<Asesor, typeof Estado.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Estado, dataSource);
    this.asesor = this.createHasOneRepositoryFactoryFor('asesor', asesorRepositoryGetter);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
  }
}
