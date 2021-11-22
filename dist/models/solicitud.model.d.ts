import { Entity } from '@loopback/repository';
import { Inmueble } from './inmueble.model';
import { Asesor } from './asesor.model';
import { Admin } from './admin.model';
import { Estado } from './estado.model';
export declare class Solicitud extends Entity {
    nombre: string;
    id?: string;
    descripcion: string;
    tipo_solicitud: string;
    tipo_inmueble: string;
    fecha_solicitud: string;
    codigo: string;
    clienteId: string;
    inmueble: Inmueble;
    inmuebleId?: string;
    asesors: Asesor[];
    asesorId?: string;
    asesor: Asesor;
    admin: Admin;
    adminId?: string;
    estado: Estado;
    constructor(data?: Partial<Solicitud>);
}
export interface SolicitudRelations {
}
export declare type SolicitudWithRelations = Solicitud & SolicitudRelations;
