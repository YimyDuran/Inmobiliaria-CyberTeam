import { Asesor, Inmobiliaria } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorInmobiliariaController {
    asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    getInmobiliaria(id: typeof Asesor.prototype.id): Promise<Inmobiliaria>;
}
