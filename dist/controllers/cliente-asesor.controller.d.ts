import { Cliente, Asesor } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteAsesorController {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getAsesor(id: typeof Cliente.prototype.id): Promise<Asesor>;
}
