import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './AddEmployeeForm';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent{

  constructor() {}
  
  //DepartmentOptions = ['mangers','idk','the guys from it'];

  //emp = new Employee();
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




