import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Estado } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudEstadoController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Estado>): Promise<Estado>;
    create(id: typeof Solicitud.prototype.id, estado: Omit<Estado, 'id'>): Promise<Estado>;
    patch(id: string, estado: Partial<Estado>, where?: Where<Estado>): Promise<Count>;
    delete(id: string, where?: Where<Estado>): Promise<Count>;
}
