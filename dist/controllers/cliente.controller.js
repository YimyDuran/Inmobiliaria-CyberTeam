"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteController = class ClienteController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(cliente) {
        return this.clienteRepository.create(cliente);
    }
    async count(where) {
        return this.clienteRepository.count(where);
    }
    async find(filter) {
        return this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id, filter) {
        return this.clienteRepository.findById(id, filter);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewCliente',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/count'),
    (0, rest_1.response)(200, {
        description: 'Cliente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Cliente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Cliente, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Cliente, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Cliente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Cliente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "deleteById", null);
ClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map