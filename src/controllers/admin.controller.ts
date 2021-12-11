// ---------- ADD IMPORTS -------------
import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {basicAuthorization} from '../middlewares/auth.midd';
import {Admin} from '../models';
import {AdminRepository} from '../repositories';
// ------------------------------------
//@authenticate('jwt') // <---- Apply the @authenticate decorator at the class level


export class AdminController {
  constructor(
    @repository(AdminRepository)
    public adminRepository : AdminRepository,
  ) {}

  @post('/admins')
  @response(200, {
    description: 'Admin model instance',
    content: {'application/json': {schema: getModelSchemaRef(Admin)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {
            title: 'NewAdmin',
            exclude: ['_id'],
          }),
        },
      },
    })
    admin: Omit<Admin, '_id'>,
  ): Promise<Admin> {
    return this.adminRepository.create(admin);
  }

  @get('/admins/count')
  @response(200, {
    description: 'Admin model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.count(where);
  }

  @get('/admins')
  @response(200, {
    description: 'Array of Admin model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Admin, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Admin) filter?: Filter<Admin>,
  ): Promise<Admin[]> {
    return this.adminRepository.find(filter);
  }

  @patch('/admins')
  @response(200, {
    description: 'Admin PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.updateAll(admin, where);
  }
 @authenticate('jwt')
  @authorize({
    allowedRoles: ['Admin'],
    voters: [basicAuthorization],
  })
  @get('/admins/{id}')
  @response(200, {
    description: 'Admin model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Admin, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Admin, {exclude: 'where'}) filter?: FilterExcludingWhere<Admin>
  ): Promise<Admin> {
    return this.adminRepository.findById(id, filter);
  }

  @patch('/admins/{id}')
  @response(204, {
    description: 'Admin PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
  ): Promise<void> {
    await this.adminRepository.updateById(id, admin);
  }

  @put('/admins/{id}')
  @response(204, {
    description: 'Admin PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() admin: Admin,
  ): Promise<void> {
    await this.adminRepository.replaceById(id, admin);
  }

  @del('/admins/{id}')
  @response(204, {
    description: 'Admin DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adminRepository.deleteById(id);
  }
}
