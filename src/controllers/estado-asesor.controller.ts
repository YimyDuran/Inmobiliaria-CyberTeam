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
  Estado,
  Asesor,
} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadoAsesorController {
  constructor(
    @repository(EstadoRepository) protected estadoRepository: EstadoRepository,
  ) { }

  @get('/estados/{id}/asesor', {
    responses: {
      '200': {
        description: 'Estado has one Asesor',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Asesor),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Asesor>,
  ): Promise<Asesor> {
    return this.estadoRepository.asesor(id).get(filter);
  }

  @post('/estados/{id}/asesor', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Estado.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesorInEstado',
            exclude: ['_id'],
            optional: ['estadoId']
          }),
        },
      },
    }) asesor: Omit<Asesor, '_id'>,
  ): Promise<Asesor> {
    return this.estadoRepository.asesor(id).create(asesor);
  }

  @patch('/estados/{id}/asesor', {
    responses: {
      '200': {
        description: 'Estado.Asesor PATCH success count',
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
    return this.estadoRepository.asesor(id).patch(asesor, where);
  }

  @del('/estados/{id}/asesor', {
    responses: {
      '200': {
        description: 'Estado.Asesor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.estadoRepository.asesor(id).delete(where);
  }
}
