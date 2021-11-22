"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorEstadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorEstadoController = class AsesorEstadoController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async find(id, filter) {
        return this.asesorRepository.estados(id).find(filter);
    }
    async create(id, estado) {
        return this.asesorRepository.estados(id).create(estado);
    }
    async patch(id, estado, where) {
        return this.asesorRepository.estados(id).patch(estado, where);
    }
    async delete(id, where) {
        return this.asesorRepository.estados(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/{id}/estados', {
        responses: {
            '200': {
                description: 'Array of Asesor has many Estado',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Estado) },
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
], AsesorEstadoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/asesors/{id}/estados', {
        responses: {
            '200': {
                description: 'Asesor model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estado) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estado, {
                    title: 'NewEstadoInAsesor',
                    exclude: ['id'],
                    optional: ['asesorId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorEstadoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesors/{id}/estados', {
        responses: {
            '200': {
                description: 'Asesor.Estado PATCH success count',
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
], AsesorEstadoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/asesors/{id}/estados', {
        responses: {
            '200': {
                description: 'Asesor.Estado DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Estado))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorEstadoController.prototype, "delete", null);
AsesorEstadoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorEstadoController);
exports.AsesorEstadoController = AsesorEstadoController;
//# sourceMappingURL=asesor-estado.controller.js.map