import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Inmobiliaria} from './inmobiliaria.model';

@model()
export class Admin extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  CodigoEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Edad: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;
  @property({
    type: 'string',
    required: true,
  })
  InmobiliariaId: string;

  @belongsTo(() => Inmobiliaria)
  inmobiliaria: string;

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
