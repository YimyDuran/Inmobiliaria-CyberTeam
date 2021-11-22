"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleAdminController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InmuebleAdminController = class InmuebleAdminController {
    constructor(inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }
    async getAdmin(id) {
        return this.inmuebleRepository.admin(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/inmuebles/{id}/admin', {
        responses: {
            '200': {
                description: 'Admin belonging to Inmueble',
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
], InmuebleAdminController.prototype, "getAdmin", null);
InmuebleAdminController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.InmuebleRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.InmuebleRepository])
], InmuebleAdminController);
exports.InmuebleAdminController = InmuebleAdminController;
//# sourceMappingURL=inmueble-admin.controller.js.map