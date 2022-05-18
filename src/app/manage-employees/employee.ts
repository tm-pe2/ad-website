
export class Employee{
    constructor(
        public employee_id: number,
        public first_name: string,
        public last_name: string,
        public birth_date: string,
        public email: string,
        public phone_number: string,
        public password: string,
        public national_registry_number: string,
        public city:string,
        public street: string,
        public house_number:string,
        public postal_code:string,
        public country:string,
        public department: string,
        public permissions: number,
        public role_id: number,
        public hire_date: string,
        public gender: number,
        public salary: number,
        ){}
}