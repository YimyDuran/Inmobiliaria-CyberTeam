"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminController = class AdminController {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async create(admin) {
        return this.adminRepository.create(admin);
    }
    async count(where) {
        return this.adminRepository.count(where);
    }
    async find(filter) {
        return this.adminRepository.find(filter);
    }
    async updateAll(admin, where) {
        return this.adminRepository.updateAll(admin, where);
    }
    async findById(id, filter) {
        return this.adminRepository.findById(id, filter);
    }
    async updateById(id, admin) {
        await this.adminRepository.updateById(id, admin);
    }
    async replaceById(id, admin) {
        await this.adminRepository.replaceById(id, admin);
    }
    async deleteById(id) {
        await this.adminRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/admins'),
    (0, rest_1.response)(200, {
        description: 'Admin model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Admin) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, {
                    title: 'NewAdmin',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins/count'),
    (0, rest_1.response)(200, {
        description: 'Admin model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Admin)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins'),
    (0, rest_1.response)(200, {
        description: 'Array of Admin model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Admin, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Admin)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/admins'),
    (0, rest_1.response)(200, {
        description: 'Admin PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Admin)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Admin, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins/{id}'),
    (0, rest_1.response)(200, {
        description: 'Admin model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Admin, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/admins/{id}'),
    (0, rest_1.response)(204, {
        description: 'Admin PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Admin]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/admins/{id}'),
    (0, rest_1.response)(204, {
        description: 'Admin PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Admin]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/admins/{id}'),
    (0, rest_1.response)(204, {
        description: 'Admin DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminController.prototype, "deleteById", null);
AdminController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AdminRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AdminRepository])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map