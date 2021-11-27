import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inmueble,
  Admin,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleAdminController {
  constructor(
    @repository(InmuebleRepository)
    public inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Inmueble',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.string('id') id: typeof Inmueble.prototype._id,
  ): Promise<Admin> {
    return this.inmuebleRepository.admin(id);
  }
}
