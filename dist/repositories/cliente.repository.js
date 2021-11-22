"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClienteRepository = class ClienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, inmobiliariaRepositoryGetter, asesorRepositoryGetter, solicitudRepositoryGetter) {
        super(models_1.Cliente, dataSource);
        this.inmobiliariaRepositoryGetter = inmobiliariaRepositoryGetter;
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.solicitudRepositoryGetter = solicitudRepositoryGetter;
        this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter);
        this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
        this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter);
        this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
        this.inmobiliaria = this.createBelongsToAccessorFor('inmobiliaria', inmobiliariaRepositoryGetter);
        this.registerInclusionResolver('inmobiliaria', this.inmobiliaria.inclusionResolver);
    }
};
ClienteRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('InmobiliariaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('SolicitudRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function])
], ClienteRepository);
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente.repository.js.map