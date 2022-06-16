import { Address } from "./address";
import { UserRole } from "./User";
import { CustomerType } from "./customer";

export interface Consumption{
    id: number,
    consumed_value: number,
    calculate_date: Date,
    customer: ConsumptionUser,
    address: Address,
    meter: Meter

    
}

export interface ConsumptionPost {
    read_date: Date,
    meters: Meter[],
}

export interface Meter{
    id: number,
    meter_type: string,
    physical_id: number,
    index_value: number,
}

export interface ConsumptionUser {
    id: number,
    first_name: string,
    last_name: string,
    birth_date: Date,
    email: string,
    phone_number: string,
    national_registry_number: string,
    customer_type: CustomerType,
    active: boolean,
    roles: UserRole[],
}