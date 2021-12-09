import {Entity, hasMany, model, property} from '@loopback/repository';
import {Admin} from './admin.model';
import {Asesor} from './asesor.model';
import {Cliente} from './cliente.model';

@model({settings: {strict: false}})
export class Inmobiliaria extends Entity {
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
  nit: string;

  @hasMany(() => Admin)
  admins: Admin[];

  @hasMany(() => Asesor)
  asesors: Asesor[];

  @hasMany(() => Cliente)
  clientes: Cliente[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inmobiliaria>) {
    super(data);
  }
}

export interface InmobiliariaRelations {
  // describe navigational properties here
}

export type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
