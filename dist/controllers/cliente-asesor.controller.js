"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteAsesorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteAsesorController = class ClienteAsesorController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async getAsesor(id) {
        return this.clienteRepository.asesor(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}/asesor', {
        responses: {
            '200': {
                description: 'Asesor belonging to Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Asesor) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteAsesorController.prototype, "getAsesor", null);
ClienteAsesorController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteAsesorController);
exports.ClienteAsesorController = ClienteAsesorController;
//# sourceMappingURL=cliente-asesor.controller.js.map