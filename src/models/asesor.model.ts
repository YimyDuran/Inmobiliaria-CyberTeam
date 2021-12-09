import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Admin} from './admin.model';
import {Cliente} from './cliente.model';
import {Inmobiliaria} from './inmobiliaria.model';
import {Inmueble} from './inmueble.model';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class Asesor extends Entity {
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

  @belongsTo(() => Admin)
  adminId: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @hasMany(() => Cliente)
  clientes: Cliente[];

  @property({
    type: 'string',
  })
  estadoId?: string;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;
