import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Admin } from '../models';
import { AdminRepository } from '../repositories';
export declare class AdminController {
    adminRepository: AdminRepository;
    constructor(adminRepository: AdminRepository);
    create(admin: Omit<Admin, 'id'>): Promise<Admin>;
    count(where?: Where<Admin>): Promise<Count>;
    find(filter?: Filter<Admin>): Promise<Admin[]>;
    updateAll(admin: Admin, where?: Where<Admin>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Admin>): Promise<Admin>;
    updateById(id: string, admin: Admin): Promise<void>;
    replaceById(id: string, admin: Admin): Promise<void>;
    deleteById(id: string): Promise<void>;
}
