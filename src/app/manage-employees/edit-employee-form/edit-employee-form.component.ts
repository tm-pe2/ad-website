import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css']
})
export class EditEmployeeFormComponent {
  
  constructor() {}
  
  //DepartmentOptions = ['mangers','idk','the guys from it'];
  
  emp = new Employee(1,"Jos","Van den Berg","1/1/1","josvandenberg@bedrijf.com","0412312312","thuis","1/1/2","managers","X"); 

  FirstName = "";
  LastName = "";
  BirthDate= "";
  Email = "";
  PhoneNumber = "";
  Address ="";
  HireDate ="";
  Department = "";
  Gender="";

  
  submitted = false;
  
  onSubmit() {;
    console.log(this.emp.FirstName,this.emp.LastName,this.emp.BirthDate,this.emp.Email,this.emp.PhoneNumber,this.emp.Address,this.emp.HireDate,this.emp.Department,this.emp.Gender);
  }
  
  ngOnInit(): void {
  }
  
}




