import { Address } from "./address";
import { CustomerType } from "./customer";
import { Meter } from "./meter";
import { UserRole } from "./User";

export interface RegisterForm {
    id?: number,
    first_name?: string,
    last_name?: string,
    email?: string,
    phone_number?: string,
    password?: string,
    confirmPassword?: string,
    national_registry_number?: string,
    birth_date?: Date,
    type_id?: CustomerType,
    addresses?: Address[]
}

export interface SuppliersForm {
    name?: string,
    goods?: string,
    city?: number,
    street?: string,
    house_number?: string,
}

export interface MeterAppForm {
    meters: Meter[]
}
export interface EmployeeForm extends RegisterForm{
    hire_date: Date,
    salary: number,
    roles: UserRole[],
    active?: Boolean,
}