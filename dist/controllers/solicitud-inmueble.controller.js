"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudInmuebleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudInmuebleController = class SolicitudInmuebleController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async get(id, filter) {
        return this.solicitudRepository.inmueble(id).get(filter);
    }
    async create(id, inmueble) {
        return this.solicitudRepository.inmueble(id).create(inmueble);
    }
    async patch(id, inmueble, where) {
        return this.solicitudRepository.inmueble(id).patch(inmueble, where);
    }
    async delete(id, where) {
        return this.solicitudRepository.inmueble(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/{id}/inmueble', {
        responses: {
            '200': {
                description: 'Solicitud has one Inmueble',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble),
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
], SolicitudInmuebleController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicituds/{id}/inmueble', {
        responses: {
            '200': {
                description: 'Solicitud model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmueble, {
                    title: 'NewInmuebleInSolicitud',
                    exclude: ['id'],
                    optional: ['solicitudId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudInmuebleController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicituds/{id}/inmueble', {
        responses: {
            '200': {
                description: 'Solicitud.Inmueble PATCH success count',
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
], SolicitudInmuebleController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicituds/{id}/inmueble', {
        responses: {
            '200': {
                description: 'Solicitud.Inmueble DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Inmueble))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudInmuebleController.prototype, "delete", null);
SolicitudInmuebleController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudInmuebleController);
exports.SolicitudInmuebleController = SolicitudInmuebleController;
//# sourceMappingURL=solicitud-inmueble.controller.js.map