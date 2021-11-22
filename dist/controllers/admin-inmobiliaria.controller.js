"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInmobiliariaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminInmobiliariaController = class AdminInmobiliariaController {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async getInmobiliaria(id) {
        return this.adminRepository.inmobiliaria_admin(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/admins/{id}/inmobiliaria', {
        responses: {
            '200': {
                description: 'Inmobiliaria belonging to Admin',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Inmobiliaria) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AdminInmobiliariaController.prototype, "getInmobiliaria", null);
AdminInmobiliariaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AdminRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AdminRepository])
], AdminInmobiliariaController);
exports.AdminInmobiliariaController = AdminInmobiliariaController;
//# sourceMappingURL=admin-inmobiliaria.controller.js.map