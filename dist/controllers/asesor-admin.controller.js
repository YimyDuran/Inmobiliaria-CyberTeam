"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorAdminController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorAdminController = class AsesorAdminController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async getAdmin(id) {
        return this.asesorRepository.admin(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/{id}/admin', {
        responses: {
            '200': {
                description: 'Admin belonging to Asesor',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Admin) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorAdminController.prototype, "getAdmin", null);
AsesorAdminController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorAdminController);
exports.AsesorAdminController = AsesorAdminController;
//# sourceMappingURL=asesor-admin.controller.js.map