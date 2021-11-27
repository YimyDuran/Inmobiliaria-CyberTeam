import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Admin} from './admin.model';
import {Asesor} from './asesor.model';
import {Inmueble} from './inmueble.model';
import {Cliente} from './cliente.model';
import {Estado} from './estado.model';

@model({settings: {strict: false}})
export class Solicitud extends Entity {
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
  tipo_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_inmueble: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @belongsTo(() => Admin)
  adminId: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @hasOne(() => Inmueble)
  inmueble: Inmueble;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasOne(() => Estado)
  estado: Estado;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
