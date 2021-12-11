import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Asesor, Inmueble
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleAsesorController {
  constructor(
    @repository(InmuebleRepository) protected inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Inmueble has one Asesor',
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
    return this.inmuebleRepository.asesor(id).get(filter);
  }

  @post('/inmuebles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Inmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmueble.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesorInInmueble',
            exclude: ['_id'],
            optional: ['inmuebleId']
          }),
        },
      },
    }) asesor: Omit<Asesor, '_id'>,
  ): Promise<Asesor> {
    return this.inmuebleRepository.asesor(id).create(asesor);
  }

  @patch('/inmuebles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Inmueble.Asesor PATCH success count',
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
    return this.inmuebleRepository.asesor(id).patch(asesor, where);
  }

  @del('/inmuebles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Inmueble.Asesor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.inmuebleRepository.asesor(id).delete(where);
  }
}
