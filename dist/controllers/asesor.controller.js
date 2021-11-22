"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorController = class AsesorController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async create(asesor) {
        return this.asesorRepository.create(asesor);
    }
    async count(where) {
        return this.asesorRepository.count(where);
    }
    async find(filter) {
        return this.asesorRepository.find(filter);
    }
    async updateAll(asesor, where) {
        return this.asesorRepository.updateAll(asesor, where);
    }
    async findById(id, filter) {
        return this.asesorRepository.findById(id, filter);
    }
    async updateById(id, asesor) {
        await this.asesorRepository.updateById(id, asesor);
    }
    async replaceById(id, asesor) {
        await this.asesorRepository.replaceById(id, asesor);
    }
    async deleteById(id) {
        await this.asesorRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/asesors'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, {
                    title: 'NewAsesor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/count'),
    (0, rest_1.response)(200, {
        description: 'Asesor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors'),
    (0, rest_1.response)(200, {
        description: 'Array of Asesor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesors'),
    (0, rest_1.response)(200, {
        description: 'Asesor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Asesor, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Asesor, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Asesor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/asesors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Asesor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/asesors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "deleteById", null);
AsesorController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorController);
exports.AsesorController = AsesorController;
//# sourceMappingURL=asesor.controller.js.map