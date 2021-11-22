import { Cliente, Inmobiliaria } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteInmobiliariaController {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getInmobiliaria(id: typeof Cliente.prototype.id): Promise<Inmobiliaria>;
}
