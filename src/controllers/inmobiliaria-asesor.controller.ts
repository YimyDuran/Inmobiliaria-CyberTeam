import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Inmobiliaria,
  Asesor,
} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaAsesorController {
  constructor(
    @repository(InmobiliariaRepository) protected inmobiliariaRepository: InmobiliariaRepository,
  ) { }

  @get('/inmobiliarias/{id}/asesors', {
    responses: {
      '200': {
        description: 'Array of Inmobiliaria has many Asesor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asesor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Asesor>,
  ): Promise<Asesor[]> {
    return this.inmobiliariaRepository.as(id).find(filter);
  }

  @post('/inmobiliarias/{id}/asesors', {
    responses: {
      '200': {
        description: 'Inmobiliaria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmobiliaria.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesorInInmobiliaria',
            exclude: ['id'],
            optional: ['inmobiliariaId']
          }),
        },
      },
    }) asesor: Omit<Asesor, 'id'>,
  ): Promise<Asesor> {
    return this.inmobiliariaRepository.as(id).create(asesor);
  }

  @patch('/inmobiliarias/{id}/asesors', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Asesor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Partial<Asesor>,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.as(id).patch(asesor, where);
  }

  @del('/inmobiliarias/{id}/asesors', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Asesor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.as(id).delete(where);
  }
}
