import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Cliente,
  Inmobiliaria
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteInmobiliariaController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/inmobiliaria', {
    responses: {
      '200': {
        description: 'Inmobiliaria belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmobiliaria)},
          },
        },
      },
    },
  })
  async getInmobiliaria(
    @param.path.string('id') id: typeof Cliente.prototype._id,
  ): Promise<Inmobiliaria> {
    return this.clienteRepository.inmobiliaria(id);
  }
}
