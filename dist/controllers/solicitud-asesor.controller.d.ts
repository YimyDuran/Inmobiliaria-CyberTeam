import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Asesor } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudAsesorController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Asesor>): Promise<Asesor>;
    create(id: typeof Solicitud.prototype.id, asesor: Omit<Asesor, 'id'>): Promise<Asesor>;
    patch(id: string, asesor: Partial<Asesor>, where?: Where<Asesor>): Promise<Count>;
    delete(id: string, where?: Where<Asesor>): Promise<Count>;
}
