import { Entity } from '@loopback/repository';
export declare class Estado extends Entity {
    estado: string;
    id?: string;
    comentarios?: string;
    solicitudId?: string;
    asesorId?: string;
    constructor(data?: Partial<Estado>);
}
export interface EstadoRelations {
}
export declare type EstadoWithRelations = Estado & EstadoRelations;
