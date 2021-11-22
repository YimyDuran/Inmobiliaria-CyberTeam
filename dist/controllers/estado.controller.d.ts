import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Estado } from '../models';
import { EstadoRepository } from '../repositories';
export declare class EstadoController {
    estadoRepository: EstadoRepository;
    constructor(estadoRepository: EstadoRepository);
    create(estado: Omit<Estado, 'id'>): Promise<Estado>;
    count(where?: Where<Estado>): Promise<Count>;
    find(filter?: Filter<Estado>): Promise<Estado[]>;
    updateAll(estado: Estado, where?: Where<Estado>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Estado>): Promise<Estado>;
    updateById(id: string, estado: Estado): Promise<void>;
    replaceById(id: string, estado: Estado): Promise<void>;
    deleteById(id: string): Promise<void>;
}
