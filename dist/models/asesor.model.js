"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const inmobiliaria_model_1 = require("./inmobiliaria.model");
const inmueble_model_1 = require("./inmueble.model");
const admin_model_1 = require("./admin.model");
const cliente_model_1 = require("./cliente.model");
const solicitud_model_1 = require("./solicitud.model");
const estado_model_1 = require("./estado.model");
let Asesor = class Asesor extends repository_1.Entity {
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
], Asesor.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "cedula", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "edad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "codigoEmpresa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => inmobiliaria_model_1.Inmobiliaria, { name: 'inmobiliaria_asesor' }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "inmobiliariaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => inmueble_model_1.Inmueble),
    (0, tslib_1.__metadata)("design:type", Array)
], Asesor.prototype, "inmuebles", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => admin_model_1.Admin),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "adminId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => cliente_model_1.Cliente),
    (0, tslib_1.__metadata)("design:type", Array)
], Asesor.prototype, "clientes", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "solicitudId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    (0, tslib_1.__metadata)("design:type", Array)
], Asesor.prototype, "solicituds", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => estado_model_1.Estado),
    (0, tslib_1.__metadata)("design:type", Array)
], Asesor.prototype, "estados", void 0);
Asesor = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Asesor);
exports.Asesor = Asesor;
//# sourceMappingURL=asesor.model.js.map