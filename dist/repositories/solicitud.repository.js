"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SolicitudRepository = class SolicitudRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, inmuebleRepositoryGetter, asesorRepositoryGetter, adminRepositoryGetter, estadoRepositoryGetter) {
        super(models_1.Solicitud, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.inmuebleRepositoryGetter = inmuebleRepositoryGetter;
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.adminRepositoryGetter = adminRepositoryGetter;
        this.estadoRepositoryGetter = estadoRepositoryGetter;
        this.estado = this.createHasOneRepositoryFactoryFor('estado', estadoRepositoryGetter);
        this.registerInclusionResolver('estado', this.estado.inclusionResolver);
        this.admin = this.createHasOneRepositoryFactoryFor('admin', adminRepositoryGetter);
        this.registerInclusionResolver('admin', this.admin.inclusionResolver);
        this.asesor = this.createHasOneRepositoryFactoryFor('asesor', asesorRepositoryGetter);
        this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
        this.inmueble = this.createHasOneRepositoryFactoryFor('inmueble', inmuebleRepositoryGetter);
        this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
        this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    }
};
SolicitudRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InmuebleRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AdminRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('EstadoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function, Function, Function])
], SolicitudRepository);
exports.SolicitudRepository = SolicitudRepository;
//# sourceMappingURL=solicitud.repository.js.map