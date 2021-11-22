"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inmobiliaria = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const admin_model_1 = require("./admin.model");
const asesor_model_1 = require("./asesor.model");
const cliente_model_1 = require("./cliente.model");
let Inmobiliaria = class Inmobiliaria extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmobiliaria.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmobiliaria.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmobiliaria.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => admin_model_1.Admin),
    (0, tslib_1.__metadata)("design:type", Array)
], Inmobiliaria.prototype, "admins", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", Array)
], Inmobiliaria.prototype, "asesors", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => cliente_model_1.Cliente),
    (0, tslib_1.__metadata)("design:type", Array)
], Inmobiliaria.prototype, "clientes", void 0);
Inmobiliaria = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Inmobiliaria);
exports.Inmobiliaria = Inmobiliaria;
//# sourceMappingURL=inmobiliaria.model.js.map