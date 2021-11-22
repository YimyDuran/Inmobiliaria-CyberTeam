import { Entity } from '@loopback/repository';
import { Solicitud } from './solicitud.model';
export declare class Cliente extends Entity {
    id?: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    edad: string;
    correo: string;
    telefono: string;
    direccion: string;
    inmobiliariaId: string;
    asesorId: string;
    solicituds: Solicitud[];
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
