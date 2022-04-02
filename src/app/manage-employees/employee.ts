import { Address } from './interfaces/address';

export class Employee{
    constructor(
        public EmployeesID: number ,
        public FirstName: string,
        public LastName: string,
        public BirthDate: string,
        public Email: string,
        public PhoneNumber: string,
        public Address: Address,
        public HireDate: string,
        public Department: string,
        public Gender: string
        ){}
}