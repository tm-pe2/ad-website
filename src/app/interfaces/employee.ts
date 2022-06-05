import { UserRole } from "./User";

export interface Employee {
    name: string;
    description: string;
    imageUrl: string;
    department: string;
}

export interface Role{
    id: UserRole,
    name: string,
}

export interface EmployeeForm{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone_number: string;
    birth_date: Date;
    national_registry_number: string;
    hire_date: Date;
    salary: number;
    department: string;
    city: number;
    street: string;
    house_number: string;
    role_id: UserRole;
}