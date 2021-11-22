"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmobiliariaClienteController = class InmobiliariaClienteController {
    constructor(inmobiliariaRepository) {
        this.inmobiliariaRepository = inmobiliariaRepository;
    }
    async find(id, filter) {
        return this.inmobiliariaRepository.clientes(id).find(filter);
    }
    async create(id, cliente) {
        return this.inmobiliariaRepository.clientes(id).create(cliente);
    }
    async patch(id, cliente, where) {
        return this.inmobiliariaRepository.clientes(id).patch(cliente, where);
    }
    async delete(id, where) {
        return this.inmobiliariaRepository.clientes(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmobiliarias/{id}/clientes', {
        responses: {
            '200': {
                description: 'Array of Inmobiliaria has many Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
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
], InmobiliariaClienteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/inmobiliarias/{id}/clientes', {
        responses: {
            '200': {
                description: 'Inmobiliaria model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewClienteInInmobiliaria',
                    exclude: ['id'],
                    optional: ['inmobiliariaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaClienteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/inmobiliarias/{id}/clientes', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaClienteController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/inmobiliarias/{id}/clientes', {
        responses: {
            '200': {
                description: 'Inmobiliaria.Cliente DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaClienteController.prototype, "delete", null);
InmobiliariaClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.InmobiliariaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.InmobiliariaRepository])
], InmobiliariaClienteController);
exports.InmobiliariaClienteController = InmobiliariaClienteController;
//# sourceMappingURL=inmobiliaria-cliente.controller.js.map