"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let InmuebleRepository = class InmuebleRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, asesorRepositoryGetter, adminRepositoryGetter, solicitudRepositoryGetter) {
        super(models_1.Inmueble, dataSource);
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.adminRepositoryGetter = adminRepositoryGetter;
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
        this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter);
        this.registerInclusionResolver('admin', this.admin.inclusionResolver);
        this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter);
        this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    }
};
InmuebleRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AdminRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('SolicitudRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function])
], InmuebleRepository);
exports.InmuebleRepository = InmuebleRepository;
//# sourceMappingURL=inmueble.repository.js.map