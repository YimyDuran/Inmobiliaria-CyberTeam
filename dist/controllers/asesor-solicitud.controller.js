"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorSolicitudController = class AsesorSolicitudController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async find(id, filter) {
        return this.asesorRepository.solicituds(id).find(filter);
    }
    async create(id, solicitud) {
        return this.asesorRepository.solicituds(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.asesorRepository.solicituds(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.asesorRepository.solicituds(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Array of Asesor has many Solicitud',
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
], AsesorSolicitudController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/asesors/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Asesor model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInAsesor',
                    exclude: ['id'],
                    optional: ['asesorId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorSolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesors/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Asesor.Solicitud PATCH success count',
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
], AsesorSolicitudController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/asesors/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Asesor.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorSolicitudController.prototype, "delete", null);
AsesorSolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorSolicitudController);
exports.AsesorSolicitudController = AsesorSolicitudController;
//# sourceMappingURL=asesor-solicitud.controller.js.map