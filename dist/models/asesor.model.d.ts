import { Entity } from '@loopback/repository';
import { Inmueble } from './inmueble.model';
import { Cliente } from './cliente.model';
import { Solicitud } from './solicitud.model';
import { Estado } from './estado.model';
export declare class Asesor extends Entity {
    id?: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    edad: string;
    correo: string;
    telefono: string;
    codigoEmpresa: string;
    inmobiliariaId: string;
    inmuebles: Inmueble[];
    adminId: string;
    clientes: Cliente[];
    solicitudId?: string;
    solicituds: Solicitud[];
    estados: Estado[];
    constructor(data?: Partial<Asesor>);
}
export interface AsesorRelations {
}
export declare type AsesorWithRelations = Asesor & AsesorRelations;
