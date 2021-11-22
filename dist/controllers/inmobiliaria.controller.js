"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmobiliariaController = class InmobiliariaController {
    constructor(inmobiliariaRepository) {
        this.inmobiliariaRepository = inmobiliariaRepository;
    }
    async create(inmobiliaria) {
        return this.inmobiliariaRepository.create(inmobiliaria);
    }
    async count(where) {
        return this.inmobiliariaRepository.count(where);
    }
    async find(filter) {
        return this.inmobiliariaRepository.find(filter);
    }
    async updateAll(inmobiliaria, where) {
        return this.inmobiliariaRepository.updateAll(inmobiliaria, where);
    }
    async findById(id, filter) {
        return this.inmobiliariaRepository.findById(id, filter);
    }
    async updateById(id, inmobiliaria) {
        await this.inmobiliariaRepository.updateById(id, inmobiliaria);
    }
    async replaceById(id, inmobiliaria) {
        await this.inmobiliariaRepository.replaceById(id, inmobiliaria);
    }
    async deleteById(id) {
        await this.inmobiliariaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/inmobiliarias'),
    (0, rest_1.response)(200, {
        description: 'Inmobiliaria model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, {
                    title: 'NewInmobiliaria',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmobiliarias/count'),
    (0, rest_1.response)(200, {
        description: 'Inmobiliaria model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Inmobiliaria)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmobiliarias'),
    (0, rest_1.response)(200, {
        description: 'Array of Inmobiliaria model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Inmobiliaria)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/inmobiliarias'),
    (0, rest_1.response)(200, {
        description: 'Inmobiliaria PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Inmobiliaria)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Inmobiliaria, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmobiliarias/{id}'),
    (0, rest_1.response)(200, {
        description: 'Inmobiliaria model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Inmobiliaria, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/inmobiliarias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmobiliaria PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Inmobiliaria]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/inmobiliarias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmobiliaria PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Inmobiliaria]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/inmobiliarias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inmobiliaria DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InmobiliariaController.prototype, "deleteById", null);
InmobiliariaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.InmobiliariaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.InmobiliariaRepository])
], InmobiliariaController);
exports.InmobiliariaController = InmobiliariaController;
//# sourceMappingURL=inmobiliaria.controller.js.map