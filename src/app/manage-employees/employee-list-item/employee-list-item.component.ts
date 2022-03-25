import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ManageEmployeesComponent } from '../manage-employees.component';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {

  constructor() { }

  //emp = new Employee(1,"Xander","Aerts","1/1/1","test@test.be","01234455","thuis","1/1/1","boekhouding","X");

  // Some variables
   id = 1;
   FirstName = "xander";
   LastName = "aerts";
   BirthDate= "test";
   Email = "bbb";
   PhoneNumber = "bbb";
   Address ="bbb";
   HireDate ="hey";
   Department = "dqjfdfj";
   Gender="X";
 
   emp = new Employee(1,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender);
   emp2 = new Employee(2,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender)
   employees: Employee[] = [this.emp,this.emp2];


   
   

  ngOnInit(): void {
  }


  deleteEmployee(id : number){
    console.log(id);
  }

}
