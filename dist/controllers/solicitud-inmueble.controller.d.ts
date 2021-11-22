import { Count, Filter, Where } from '@loopback/repository';
import { Solicitud, Inmueble } from '../models';
import { SolicitudRepository } from '../repositories';
export declare class SolicitudInmuebleController {
    protected solicitudRepository: SolicitudRepository;
    constructor(solicitudRepository: SolicitudRepository);
    get(id: string, filter?: Filter<Inmueble>): Promise<Inmueble>;
    create(id: typeof Solicitud.prototype.id, inmueble: Omit<Inmueble, 'id'>): Promise<Inmueble>;
    patch(id: string, inmueble: Partial<Inmueble>, where?: Where<Inmueble>): Promise<Count>;
    delete(id: string, where?: Where<Inmueble>): Promise<Count>;
}
