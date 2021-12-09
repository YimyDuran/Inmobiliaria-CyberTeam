import {belongsTo, Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Admin} from './admin.model';
import {Asesor} from './asesor.model';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  costo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoInmueble: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoOferta: string;

  @property({
    type: 'string',
    required: true,
  })
  fotografias: string;

  @property({
    type: 'string',
    required: true,
  })
  video: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;

  @belongsTo(() => Admin)
  adminId: string;

  @hasOne(() => Asesor)
  asesor: Asesor;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  solicitudId?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
