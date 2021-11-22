import { Entity } from '@loopback/repository';
import { Admin } from './admin.model';
import { Asesor } from './asesor.model';
import { Cliente } from './cliente.model';
export declare class Inmobiliaria extends Entity {
    _id?: string;
    nombre: string;
    descripcion: string;
    admins: Admin[];
    asesors: Asesor[];
    clientes: Cliente[];
    constructor(data?: Partial<Inmobiliaria>);
}
export interface InmobiliariaRelations {
}
export declare type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
