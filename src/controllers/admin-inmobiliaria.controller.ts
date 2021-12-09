import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Admin,
  Inmobiliaria
} from '../models';
import {AdminRepository} from '../repositories';

export class AdminInmobiliariaController {
  constructor(
    @repository(AdminRepository)
    public adminRepository: AdminRepository,
  ) { }

  @get('/admins/{id}/inmobiliaria', {
    responses: {
      '200': {
        description: 'Inmobiliaria belonging to Admin',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmobiliaria)},
          },
        },
      },
    },
  })
  async getInmobiliaria(
    @param.path.string('id') id: typeof Admin.prototype._id,
  ): Promise<Inmobiliaria> {
    return this.adminRepository.inmobiliaria(id);
  }
}
