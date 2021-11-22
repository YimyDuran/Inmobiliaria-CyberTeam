import { Count, Filter, Where } from '@loopback/repository';
import { Inmobiliaria, Asesor } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaAsesorController {
    protected inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    find(id: string, filter?: Filter<Asesor>): Promise<Asesor[]>;
    create(id: typeof Inmobiliaria.prototype._id, asesor: Omit<Asesor, 'id'>): Promise<Asesor>;
    patch(id: string, asesor: Partial<Asesor>, where?: Where<Asesor>): Promise<Count>;
    delete(id: string, where?: Where<Asesor>): Promise<Count>;
}
