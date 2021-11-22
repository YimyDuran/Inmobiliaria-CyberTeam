"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AdminRepository = class AdminRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, inmobiliariaRepositoryGetter, asesorRepositoryGetter, inmuebleRepositoryGetter, solicitudRepositoryGetter) {
        super(models_1.Admin, dataSource);
        this.inmobiliariaRepositoryGetter = inmobiliariaRepositoryGetter;
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.inmuebleRepositoryGetter = inmuebleRepositoryGetter;
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
        this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter);
        this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
        this.asesors = this.createHasManyRepositoryFactoryFor('asesors', asesorRepositoryGetter);
        this.registerInclusionResolver('asesors', this.asesors.inclusionResolver);
        this.inmobiliaria_admin = this.createBelongsToAccessorFor('inmobiliaria_admin', inmobiliariaRepositoryGetter);
        this.registerInclusionResolver('inmobiliaria_admin', this.inmobiliaria_admin.inclusionResolver);
    }
};
AdminRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('InmobiliariaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('InmuebleRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('SolicitudRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function, Function])
], AdminRepository);
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=admin.repository.js.map