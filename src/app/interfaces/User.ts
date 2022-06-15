import { Address } from "./address";

// This interface makes it easy to make a new user variable somewhere when needed
export interface User {
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
    active?: boolean,
}

/** Role defining permission level of a user
 * These need to match up with the names in the database.
*/
export enum UserRole {
    CUSTOMER = 1,
    SUPPLIER = 2,
    EMPLOYEE = 3,
    ACCOUNTANT = 4,
    TECHNICIAN = 5,
    SUPPORT = 6,
    MANAGER = 7,
    HR_MANAGER = 8,
    ADMIN = 9,
}
