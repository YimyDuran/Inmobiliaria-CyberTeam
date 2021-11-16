import {Entity, hasMany, model, property} from '@loopback/repository';
import {Asesor} from '.';
import {Admin} from './admin.model';

@model()
export class Inmobiliaria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

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
  Nit: string;



  @hasMany(() => Admin)
  admins: Admin[];

  @hasMany(() => Asesor)
  asesors: Asesor[];
  constructor(data?: Partial<Inmobiliaria>) {
    super(data);
  }
}

export interface InmobiliariaRelations {
  // describe navigational properties here
}

export type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
