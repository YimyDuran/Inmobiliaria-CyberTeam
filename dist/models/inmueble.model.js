"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inmueble = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const asesor_model_1 = require("./asesor.model");
const admin_model_1 = require("./admin.model");
const solicitud_model_1 = require("./solicitud.model");
let Inmueble = class Inmueble extends repository_1.Entity {
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
], Inmueble.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "descripcion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "costo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "tipoInmueble", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "tipoOferta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "fotografias", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "video", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "ubicacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "asesorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => admin_model_1.Admin),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "adminId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inmueble.prototype, "solicitudId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    (0, tslib_1.__metadata)("design:type", Array)
], Inmueble.prototype, "solicituds", void 0);
Inmueble = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Inmueble);
exports.Inmueble = Inmueble;
//# sourceMappingURL=inmueble.model.js.map