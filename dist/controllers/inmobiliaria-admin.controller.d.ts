import { Count, Filter, Where } from '@loopback/repository';
import { Inmobiliaria, Admin } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaAdminController {
    protected inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    find(id: string, filter?: Filter<Admin>): Promise<Admin[]>;
    create(id: typeof Inmobiliaria.prototype._id, admin: Omit<Admin, 'id'>): Promise<Admin>;
    patch(id: string, admin: Partial<Admin>, where?: Where<Admin>): Promise<Count>;
    delete(id: string, where?: Where<Admin>): Promise<Count>;
}
