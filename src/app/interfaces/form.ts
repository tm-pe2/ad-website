import { Meter } from "./meter";

export interface RegisterForm {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    password?: string,
    confirmPassword?: string,
    city?: number,
    registryId?: string,
    birthDate?: Date,
    street?: string,
}

export interface SuppliersForm {
    name?: string,
    goods?: string,
    city?: number,
    street?: string,
}

export interface MeterAppForm {
    meters: Meter[]
}