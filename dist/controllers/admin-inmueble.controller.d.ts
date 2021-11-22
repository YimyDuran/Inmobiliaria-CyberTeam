import { Count, Filter, Where } from '@loopback/repository';
import { Admin, Inmueble } from '../models';
import { AdminRepository } from '../repositories';
export declare class AdminInmuebleController {
    protected adminRepository: AdminRepository;
    constructor(adminRepository: AdminRepository);
    find(id: string, filter?: Filter<Inmueble>): Promise<Inmueble[]>;
    create(id: typeof Admin.prototype.id, inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    patch(id: string, inmueble: Partial<Inmueble>, where?: Where<Inmueble>): Promise<Count>;
    delete(id: string, where?: Where<Inmueble>): Promise<Count>;
}
