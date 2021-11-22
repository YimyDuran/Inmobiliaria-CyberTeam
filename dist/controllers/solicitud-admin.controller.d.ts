import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Admin } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudAdminController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Admin>): Promise<Admin>;
    create(id: typeof Solicitud.prototype.id, admin: Omit<Admin, 'id'>): Promise<Admin>;
    patch(id: string, admin: Partial<Admin>, where?: Where<Admin>): Promise<Count>;
    delete(id: string, where?: Where<Admin>): Promise<Count>;
}
