import {Entity, hasOne, model, property} from '@loopback/repository';
import {Asesor} from './asesor.model';

@model({settings: {strict: false}})
export class Estado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  //@property({
   // type: 'string',
   // required: true,
 // })
 // estado_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  @hasOne(() => Asesor)
  asesor: Asesor;

  @property({
    type: 'string',
  })
  solicitudId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estado>) {
    super(data);
  }
}

export interface EstadoRelations {
  // describe navigational properties here
}

export type EstadoWithRelations = Estado & EstadoRelations;
