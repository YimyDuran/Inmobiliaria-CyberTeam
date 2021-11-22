"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmobiliariaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let InmobiliariaRepository = class InmobiliariaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, adminRepositoryGetter, asesorRepositoryGetter, clienteRepositoryGetter) {
        super(models_1.Inmobiliaria, dataSource);
        this.adminRepositoryGetter = adminRepositoryGetter;
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
        this.asesors = this.createHasManyRepositoryFactoryFor('asesors', asesorRepositoryGetter);
        this.registerInclusionResolver('asesors', this.asesors.inclusionResolver);
        this.admins = this.createHasManyRepositoryFactoryFor('admins', adminRepositoryGetter);
        this.registerInclusionResolver('admins', this.admins.inclusionResolver);
    }
};
InmobiliariaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('AdminRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function])
], InmobiliariaRepository);
exports.InmobiliariaRepository = InmobiliariaRepository;
//# sourceMappingURL=inmobiliaria.repository.js.map