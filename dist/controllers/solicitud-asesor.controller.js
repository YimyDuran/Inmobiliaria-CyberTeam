"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudAsesorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudAsesorController = class SolicitudAsesorController {
    constructor(solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }
    async get(id, filter) {
        return this.solicitudRepository.asesor(id).get(filter);
    }
    async create(id, asesor) {
        return this.solicitudRepository.asesor(id).create(asesor);
    }
    async patch(id, asesor, where) {
        return this.solicitudRepository.asesor(id).patch(asesor, where);
    }
    async delete(id, where) {
        return this.solicitudRepository.asesor(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicituds/{id}/asesor', {
        responses: {
            '200': {
                description: 'Solicitud has one Asesor',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor),
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
], SolicitudAsesorController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicituds/{id}/asesor', {
        responses: {
            '200': {
                description: 'Solicitud model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, {
                    title: 'NewAsesorInSolicitud',
                    exclude: ['id'],
                    optional: ['solicitudId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudAsesorController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicituds/{id}/asesor', {
        responses: {
            '200': {
                description: 'Solicitud.Asesor PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Asesor))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudAsesorController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicituds/{id}/asesor', {
        responses: {
            '200': {
                description: 'Solicitud.Asesor DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Asesor))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudAsesorController.prototype, "delete", null);
SolicitudAsesorController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudRepository])
], SolicitudAsesorController);
exports.SolicitudAsesorController = SolicitudAsesorController;
//# sourceMappingURL=solicitud-asesor.controller.js.map