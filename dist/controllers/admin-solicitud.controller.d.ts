import { Count, Filter, Where } from '@loopback/repository';
import { Admin, Solicitud } from '../models';
import { AdminRepository } from '../repositories';
export declare class AdminSolicitudController {
    protected adminRepository: AdminRepository;
    constructor(adminRepository: AdminRepository);
    find(id: string, filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    create(id: typeof Admin.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
