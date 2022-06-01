import { CustomerType } from "./customer";
import { Meter } from "./meter";

export interface RegisterForm {
    first_name?: string,
    last_name?: string,
    email?: string,
    phone_number?: string,
    password?: string,
    confirmPassword?: string,
    city?: number,
    national_registry_number?: string,
    birth_date?: Date,
    street?: string,
    house_number?: string,
    type?: CustomerType
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