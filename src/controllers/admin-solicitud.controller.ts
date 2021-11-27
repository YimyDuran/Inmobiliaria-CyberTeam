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
  Admin,
  Solicitud,
} from '../models';
import {AdminRepository} from '../repositories';

export class AdminSolicitudController {
  constructor(
    @repository(AdminRepository) protected adminRepository: AdminRepository,
  ) { }

  @get('/admins/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of Admin has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.adminRepository.solicituds(id).find(filter);
  }

  @post('/admins/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Admin.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInAdmin',
            exclude: ['_id'],
            optional: ['adminId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, '_id'>,
  ): Promise<Solicitud> {
    return this.adminRepository.solicituds(id).create(solicitud);
  }

  @patch('/admins/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Admin.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.adminRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/admins/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Admin.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.adminRepository.solicituds(id).delete(where);
  }
}
