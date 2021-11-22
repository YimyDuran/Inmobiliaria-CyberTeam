import { Entity } from '@loopback/repository';
import { Asesor } from './asesor.model';
import { Inmueble } from './inmueble.model';
import { Solicitud } from './solicitud.model';
export declare class Admin extends Entity {
    id?: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    edad: string;
    correo: string;
    telefono: string;
    codigoEmpresa: string;
    inmobiliariaId: string;
    asesors: Asesor[];
    inmuebles: Inmueble[];
    solicitudId?: string;
    solicituds: Solicitud[];
    constructor(data?: Partial<Admin>);
}
export interface AdminRelations {
}
export declare type AdminWithRelations = Admin & AdminRelations;
