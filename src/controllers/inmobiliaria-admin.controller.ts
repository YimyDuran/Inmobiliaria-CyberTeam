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
  Admin, Inmobiliaria
} from '../models';
import {InmobiliariaRepository} from '../repositories';

export class InmobiliariaAdminController {
  constructor(
    @repository(InmobiliariaRepository) protected inmobiliariaRepository: InmobiliariaRepository,
  ) { }

  @get('/inmobiliarias/{id}/admins', {
    responses: {
      '200': {
        description: 'Array of Inmobiliaria has many Admin',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Admin>,
  ): Promise<Admin[]> {
    return this.inmobiliariaRepository.admins(id).find(filter);
  }

  @post('/inmobiliarias/{id}/admins', {
    responses: {
      '200': {
        description: 'Inmobiliaria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Admin)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmobiliaria.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {
            title: 'NewAdminInInmobiliaria',
            exclude: ['_id'],
            optional: ['inmobiliariaId']
          }),
        },
      },
    }) admin: Omit<Admin, '_id'>,
  ): Promise<Admin> {
    return this.inmobiliariaRepository.admins(id).create(admin);
  }

  @patch('/inmobiliarias/{id}/admins', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Admin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Partial<Admin>,
    @param.query.object('where', getWhereSchemaFor(Admin)) where?: Where<Admin>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.admins(id).patch(admin, where);
  }

  @del('/inmobiliarias/{id}/admins', {
    responses: {
      '200': {
        description: 'Inmobiliaria.Admin DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Admin)) where?: Where<Admin>,
  ): Promise<Count> {
    return this.inmobiliariaRepository.admins(id).delete(where);
  }
}
