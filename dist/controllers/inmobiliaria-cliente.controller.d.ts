import { Count, Filter, Where } from '@loopback/repository';
import { Inmobiliaria, Cliente } from '../models';
import { InmobiliariaRepository } from '../repositories';
export declare class InmobiliariaClienteController {
    protected inmobiliariaRepository: InmobiliariaRepository;
    constructor(inmobiliariaRepository: InmobiliariaRepository);
    find(id: string, filter?: Filter<Cliente>): Promise<Cliente[]>;
    create(id: typeof Inmobiliaria.prototype._id, cliente: Omit<Cliente, 'id'>): Promise<Cliente>;
    patch(id: string, cliente: Partial<Cliente>, where?: Where<Cliente>): Promise<Count>;
    delete(id: string, where?: Where<Cliente>): Promise<Count>;
}
