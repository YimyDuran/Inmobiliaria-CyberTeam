"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudEstadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudEstadoController = class SolicitudEstadoController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async get(id, filter) {
        return this.solicitudRepository.estado(id).get(filter);
    }
    async create(id, estado) {
        return this.solicitudRepository.estado(id).create(estado);
    }
    async patch(id, estado, where) {
        return this.solicitudRepository.estado(id).patch(estado, where);
    }
    async delete(id, where) {
        return this.solicitudRepository.estado(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/{id}/estado', {
        responses: {
            '200': {
                description: 'Solicitud has one Estado',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Estado),
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
], SolicitudEstadoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicituds/{id}/estado', {
        responses: {
            '200': {
                description: 'Solicitud model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estado) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, {
                    title: 'NewEstadoInSolicitud',
                    exclude: ['id'],
                    optional: ['solicitudId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudEstadoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicituds/{id}/estado', {
        responses: {
            '200': {
                description: 'Solicitud.Estado PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Estado))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudEstadoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicituds/{id}/estado', {
        responses: {
            '200': {
                description: 'Solicitud.Estado DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Estado))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudEstadoController.prototype, "delete", null);
SolicitudEstadoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudEstadoController);
exports.SolicitudEstadoController = SolicitudEstadoController;
//# sourceMappingURL=solicitud-estado.controller.js.map