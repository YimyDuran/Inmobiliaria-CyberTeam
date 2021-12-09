import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Admin, Solicitud
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudAdminController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.string('id') id: typeof Solicitud.prototype._id,
  ): Promise<Admin> {
    return this.solicitudRepository.admin(id);
  }
}
