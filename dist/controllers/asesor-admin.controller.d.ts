import { Asesor, Admin } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorAdminController {
    asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    getAdmin(id: typeof Asesor.prototype.id): Promise<Admin>;
}
