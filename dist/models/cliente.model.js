"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const inmobiliaria_model_1 = require("./inmobiliaria.model");
const asesor_model_1 = require("./asesor.model");
const solicitud_model_1 = require("./solicitud.model");
let Cliente = class Cliente extends repository_1.Entity {
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
], Cliente.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "cedula", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "edad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "direccion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => inmobiliaria_model_1.Inmobiliaria),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "inmobiliariaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "asesorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => solicitud_model_1.Solicitud),
    (0, tslib_1.__metadata)("design:type", Array)
], Cliente.prototype, "solicituds", void 0);
Cliente = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map