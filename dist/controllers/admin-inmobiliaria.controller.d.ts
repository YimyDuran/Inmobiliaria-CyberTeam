import { Admin, Inmobiliaria } from '../models';
import { AdminRepository } from '../repositories';
export declare class AdminInmobiliariaController {
    adminRepository: AdminRepository;
    constructor(adminRepository: AdminRepository);
    getInmobiliaria(id: typeof Admin.prototype.id): Promise<Inmobiliaria>;
}
