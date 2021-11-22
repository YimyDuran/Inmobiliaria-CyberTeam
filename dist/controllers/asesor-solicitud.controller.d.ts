import { Count, Filter, Where } from '@loopback/repository';
import { Asesor, Solicitud } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorSolicitudController {
    protected asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    find(id: string, filter?: Filter<Solicitud>): Promise<Solicitud[]>;
    create(id: typeof Asesor.prototype.id, solicitud: Omit<Solicitud, 'id'>): Promise<Solicitud>;
    patch(id: string, solicitud: Partial<Solicitud>, where?: Where<Solicitud>): Promise<Count>;
    delete(id: string, where?: Where<Solicitud>): Promise<Count>;
}
