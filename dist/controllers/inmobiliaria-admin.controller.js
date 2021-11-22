"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaAdminController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmobiliariaAdminController = class InmobiliariaAdminController {
    constructor(inmobiliariaRepository) {
        this.inmobiliariaRepository = inmobiliariaRepository;
    }
    async find(id, filter) {
        return this.inmobiliariaRepository.admins(id).find(filter);
    }
    async create(id, admin) {
        return this.inmobiliariaRepository.admins(id).create(admin);
    }
    async patch(id, admin, where) {
        return this.inmobiliariaRepository.admins(id).patch(admin, where);
    }
    async delete(id, where) {
        return this.inmobiliariaRepository.admins(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmobiliarias/{id}/admins', {
        responses: {
            '200': {
                description: 'Array of Inmobiliaria has many Admin',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Admin) },
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
], InmobiliariaAdminController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/inmobiliarias/{id}/admins', {
        responses: {
            '200': {
                description: 'Inmobiliaria model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Admin) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, {
                    title: 'NewAdminInInmobiliaria',
                    exclude: ['id'],
                    optional: ['inmobiliariaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaAdminController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/inmobiliarias/{id}/admins', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Admin PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Admin, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Admin))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaAdminController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/inmobiliarias/{id}/admins', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Admin DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Admin))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaAdminController.prototype, "delete", null);
InmobiliariaAdminController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.InmobiliariaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.InmobiliariaRepository])
], InmobiliariaAdminController);
exports.InmobiliariaAdminController = InmobiliariaAdminController;
//# sourceMappingURL=inmobiliaria-admin.controller.js.map