import { Count, Filter, Where } from '@loopback/repository';
import { Asesor, Estado } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorEstadoController {
    protected asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    find(id: string, filter?: Filter<Estado>): Promise<Estado[]>;
    create(id: typeof Asesor.prototype.id, estado: Omit<Estado, 'id'>): Promise<Estado>;
    patch(id: string, estado: Partial<Estado>, where?: Where<Estado>): Promise<Count>;
    delete(id: string, where?: Where<Estado>): Promise<Count>;
}
