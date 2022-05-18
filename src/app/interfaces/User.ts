// This interface makes it easy to make a new user variable somewhere when needed
export interface User
{
    user_id: number,
    role_id: UserRole,
    first_name: string,
    last_name: string,
    birth_date: Date,
    address_id: number,
    email: string,
    phone_number: string,
    password: string,
    national_registry_number: string
}

/** Role defining permission level of a user
 * These need to match up with the names in the database.
*/
export enum UserRole {
    CUSTOMER = 1,
    ADMIN = 3,
    SUPPLIER = 4,
    TECHNICIAN = 5,
    HR_MANAGER = 6,
    EMPLOYEE = 7,
    ACCOUNTANT = 8,
    SUPPORT = 9,
    MANAGER = 10,
}
