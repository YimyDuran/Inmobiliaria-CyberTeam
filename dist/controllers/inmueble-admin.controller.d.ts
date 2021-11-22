import { Inmueble, Admin } from '../models';
import { InmuebleRepository } from '../repositories';
export declare class InmuebleAdminController {
    inmuebleRepository: InmuebleRepository;
    constructor(inmuebleRepository: InmuebleRepository);
    getAdmin(id: typeof Inmueble.prototype.id): Promise<Admin>;
}
