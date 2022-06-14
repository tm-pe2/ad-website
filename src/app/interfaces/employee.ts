import { Address } from "./address";
import { UserRole } from "./User";

export interface Employee {
    id?: number,
    first_name: string,
    last_name: string,
    birth_date: Date,
    email: string,
    phone_number: string,
    national_registry_number: string,
    roles?: UserRole[],
    addresses?: Address[],
    password?: string,
    hire_date: Date,
    salary: number,
}

export interface Role{
    id: UserRole,
    name: string,
}

