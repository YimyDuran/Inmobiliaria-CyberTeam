"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminInmuebleController = class AdminInmuebleController {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async find(id, filter) {
        return this.adminRepository.inmuebles(id).find(filter);
    }
    async create(id, inmueble) {
        return this.adminRepository.inmuebles(id).create(inmueble);
    }
    async patch(id, inmueble, where) {
        return this.adminRepository.inmuebles(id).patch(inmueble, where);
    }
    async delete(id, where) {
        return this.adminRepository.inmuebles(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Array of Admin has many Inmueble',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminInmuebleController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/admins/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Admin model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmuebleInAdmin',
                    exclude: ['id'],
                    optional: ['adminId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminInmuebleController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/admins/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Admin.Inmueble PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminInmuebleController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/admins/{id}/inmuebles', {
        responses: {
            '200': {
                description: 'Admin.Inmueble DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminInmuebleController.prototype, "delete", null);
AdminInmuebleController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AdminRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AdminRepository])
], AdminInmuebleController);
exports.AdminInmuebleController = AdminInmuebleController;
//# sourceMappingURL=admin-inmueble.controller.js.map