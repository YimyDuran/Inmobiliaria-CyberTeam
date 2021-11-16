import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Asesor,
  Inmobiliaria,
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorInmobiliariaController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/inmobiliaria', {
    responses: {
      '200': {
        description: 'Inmobiliaria belonging to Asesor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmobiliaria)},
          },
        },
      },
    },
  })
  async getInmobiliaria(
    @param.path.string('id') id: typeof Asesor.prototype.id,
  ): Promise<Inmobiliaria> {
    return this.asesorRepository.inmobiliaria(id);
  }
}
