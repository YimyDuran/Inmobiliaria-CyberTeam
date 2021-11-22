import { Count, Filter, Where } from '@loopback/repository';
import { Admin, Asesor } from '../models';
import { AdminRepository } from '../repositories';
export declare class AdminAsesorController {
    protected adminRepository: AdminRepository;
    constructor(adminRepository: AdminRepository);
    find(id: string, filter?: Filter<Asesor>): Promise<Asesor[]>;
    create(id: typeof Admin.prototype.id, asesor: Omit<Asesor, 'id'>): Promise<Asesor>;
    patch(id: string, asesor: Partial<Asesor>, where?: Where<Asesor>): Promise<Count>;
    delete(id: string, where?: Where<Asesor>): Promise<Count>;
}
