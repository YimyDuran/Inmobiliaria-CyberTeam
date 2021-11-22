"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AsesorRepository = class AsesorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, inmobiliariaRepositoryGetter, inmuebleRepositoryGetter, adminRepositoryGetter, clienteRepositoryGetter, solicitudRepositoryGetter, estadoRepositoryGetter) {
        super(models_1.Asesor, dataSource);
        this.inmobiliariaRepositoryGetter = inmobiliariaRepositoryGetter;
        this.inmuebleRepositoryGetter = inmuebleRepositoryGetter;
        this.adminRepositoryGetter = adminRepositoryGetter;
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.estadoRepositoryGetter = estadoRepositoryGetter;
        this.estados = this.createHasManyRepositoryFactoryFor('estados', estadoRepositoryGetter);
        this.registerInclusionResolver('estados', this.estados.inclusionResolver);
        this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
        this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter);
        this.registerInclusionResolver('admin', this.admin.inclusionResolver);
        this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter);
        this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
        this.inmobiliaria_asesor = this.createBelongsToAccessorFor('inmobiliaria_asesor', inmobiliariaRepositoryGetter);
        this.registerInclusionResolver('inmobiliaria_asesor', this.inmobiliaria_asesor.inclusionResolver);
    }
};
AsesorRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('InmobiliariaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('InmuebleRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AdminRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__param)(5, repository_1.repository.getter('SolicitudRepository')),
    (0, tslib_1.__param)(6, repository_1.repository.getter('EstadoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function, Function, Function, Function])
], AsesorRepository);
exports.AsesorRepository = AsesorRepository;
//# sourceMappingURL=asesor.repository.js.map