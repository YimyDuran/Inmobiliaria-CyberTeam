"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSolicitudController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteSolicitudController = class ClienteSolicitudController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.solicituds(id).find(filter);
    }
    async create(id, solicitud) {
        return this.clienteRepository.solicituds(id).create(solicitud);
    }
    async patch(id, solicitud, where) {
        return this.clienteRepository.solicituds(id).patch(solicitud, where);
    }
    async delete(id, where) {
        return this.clienteRepository.solicituds(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Array of Cliente has many Solicitud',
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
], ClienteSolicitudController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/clientes/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Solicitud, {
                    title: 'NewSolicitudInCliente',
                    exclude: ['id'],
                    optional: ['clienteId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteSolicitudController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Cliente.Solicitud PATCH success count',
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
], ClienteSolicitudController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/clientes/{id}/solicituds', {
        responses: {
            '200': {
                description: 'Cliente.Solicitud DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Solicitud))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteSolicitudController.prototype, "delete", null);
ClienteSolicitudController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteSolicitudController);
exports.ClienteSolicitudController = ClienteSolicitudController;
//# sourceMappingURL=cliente-solicitud.controller.js.map