import { Component, OnInit } from '@angular/core';
import { Employee } from '../add-employee-form/AddEmployeeForm';

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
    console.log(this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender);
  }

  ngOnInit(): void {
  }

}




