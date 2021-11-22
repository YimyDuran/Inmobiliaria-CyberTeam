"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const inmobiliaria_model_1 = require("./inmobiliaria.model");
const asesor_model_1 = require("./asesor.model");
const inmueble_model_1 = require("./inmueble.model");
const solicitud_model_1 = require("./solicitud.model");
let Admin = class Admin extends repository_1.Entity {
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
], Admin.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "cedula", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "edad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "codigoEmpresa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => inmobiliaria_model_1.Inmobiliaria, { name: 'inmobiliaria_admin' }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "inmobiliariaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", Array)
], Admin.prototype, "asesors", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => inmueble_model_1.Inmueble),
    (0, tslib_1.__metadata)("design:type", Array)
], Admin.prototype, "inmuebles", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Admin.prototype, "solicitudId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    (0, tslib_1.__metadata)("design:type", Array)
], Admin.prototype, "solicituds", void 0);
Admin = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Admin);
exports.Admin = Admin;
//# sourceMappingURL=admin.model.js.map