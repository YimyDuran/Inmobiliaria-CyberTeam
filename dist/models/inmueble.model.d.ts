import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Inmueble extends Entity {
    id?: string;
    nombre: string;
    descripcion: string;
    costo: string;
    tipoInmueble: string;
    tipoOferta: string;
    fotografias: string;
    video: string;
    ubicacion: string;
    asesorId: string;
    adminId: string;
    solicitudId?: string;
    solicituds: Solicitud[];
    constructor(data?: Partial<Inmueble>);
}
export interface InmuebleRelations {
}
export declare type InmuebleWithRelations = Inmueble & InmuebleRelations;
