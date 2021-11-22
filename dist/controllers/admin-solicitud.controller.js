"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminSolicitudController = class AdminSolicitudController {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async find(id, filter) {
        return this.adminRepository.solicituds(id).find(filter);
    }
    async create(id, solicitud) {
        return this.adminRepository.solicituds(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.adminRepository.solicituds(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.adminRepository.solicituds(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Array of Admin has many Solicitud',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) },
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
], AdminSolicitudController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/admins/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Admin model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInAdmin',
                    exclude: ['id'],
                    optional: ['adminId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminSolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/admins/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Admin.Solicitud PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminSolicitudController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/admins/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Admin.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminSolicitudController.prototype, "delete", null);
AdminSolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AdminRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AdminRepository])
], AdminSolicitudController);
exports.AdminSolicitudController = AdminSolicitudController;
//# sourceMappingURL=admin-solicitud.controller.js.map