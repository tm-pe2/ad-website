import { Injectable, Output } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  id = 1;
  FirstName = "test";
  LastName = "test";
  BirthDate= "test";
  Email = "bbb";
  PhoneNumber = "bbb";
  Address:Address = {adressID:1,city:"skw",postalcode:1234,street:"denayer",housNumber:111,country:"belgium"}
  HireDate ="hey";
  Department = "dkqdjf";
  Gender="X";
  Salary=2000
    
  emp = new Employee(1,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender,this.Salary);
  emp2 = new Employee(2,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender,this.Salary);
  
  current_Emp : Employee = this.emp;
  
 // current_Emp?: Employee;
  employees: Employee[] = [this.emp,this.emp2]; //this array is the one where all the emp have to get in

}
