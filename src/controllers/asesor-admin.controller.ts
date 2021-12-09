import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Admin, Asesor
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorAdminController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Asesor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.string('id') id: typeof Asesor.prototype._id,
  ): Promise<Admin> {
    return this.asesorRepository.admin(id);
  }
}
