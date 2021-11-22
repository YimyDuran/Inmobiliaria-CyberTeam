import { Count, Filter, Where } from '@loopback/repository';
import { Asesor, Cliente } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorClienteController {
    protected asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    find(id: string, filter?: Filter<Cliente>): Promise<Cliente[]>;
    create(id: typeof Asesor.prototype.id, cliente: Omit<Cliente, 'id'>): Promise<Cliente>;
    patch(id: string, cliente: Partial<Cliente>, where?: Where<Cliente>): Promise<Count>;
    delete(id: string, where?: Where<Cliente>): Promise<Count>;
}
