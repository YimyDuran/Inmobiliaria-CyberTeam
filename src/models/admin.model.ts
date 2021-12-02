import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Inmobiliaria} from './inmobiliaria.model';
import {Inmueble} from './inmueble.model';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class Admin extends Entity {
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
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  edad: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoEmpresa: string;

  @belongsTo(() => Inmobiliaria)
  inmobiliariaId: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  @hasMany(() => Asesor)
  asesors: Asesor[];

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
