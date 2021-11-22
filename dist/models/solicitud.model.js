"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const inmueble_model_1 = require("./inmueble.model");
const asesor_model_1 = require("./asesor.model");
const admin_model_1 = require("./admin.model");
const estado_model_1 = require("./estado.model");
let Solicitud = class Solicitud extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "tipo_solicitud", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "tipo_inmueble", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "fecha_solicitud", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "codigo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "clienteId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => inmueble_model_1.Inmueble),
    (0, tslib_1.__metadata)("design:type", inmueble_model_1.Inmueble)
], Solicitud.prototype, "inmueble", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "inmuebleId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", Array)
], Solicitud.prototype, "asesors", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "asesorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", asesor_model_1.Asesor)
], Solicitud.prototype, "asesor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => admin_model_1.Admin),
    (0, tslib_1.__metadata)("design:type", admin_model_1.Admin)
], Solicitud.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Solicitud.prototype, "adminId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => estado_model_1.Estado),
    (0, tslib_1.__metadata)("design:type", estado_model_1.Estado)
], Solicitud.prototype, "estado", void 0);
Solicitud = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.model.js.map