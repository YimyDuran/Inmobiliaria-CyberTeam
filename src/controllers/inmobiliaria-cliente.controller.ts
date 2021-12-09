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
  Cliente, Inmobiliaria
} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaClienteController {
  constructor(
    @repository(InmobiliariaRepository) protected inmobiliariaRepository: InmobiliariaRepository,
  ) { }

  @get('/inmobiliarias/{id}/clientes', {
    responses: {
      '200': {
        description: 'Array of Inmobiliaria has many Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.inmobiliariaRepository.clientes(id).find(filter);
  }

  @post('/inmobiliarias/{id}/clientes', {
    responses: {
      '200': {
        description: 'Inmobiliaria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmobiliaria.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewClienteInInmobiliaria',
            exclude: ['_id'],
            optional: ['inmobiliariaId']
          }),
        },
      },
    }) cliente: Omit<Cliente, '_id'>,
  ): Promise<Cliente> {
    return this.inmobiliariaRepository.clientes(id).create(cliente);
  }

  @patch('/inmobiliarias/{id}/clientes', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Partial<Cliente>,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.clientes(id).patch(cliente, where);
  }

  @del('/inmobiliarias/{id}/clientes', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Cliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.clientes(id).delete(where);
  }
}
