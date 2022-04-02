import { Component, OnInit, Input,Output,EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { Address } from '../interfaces/address';
import { ManageEmployeesComponent } from '../manage-employees.component';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})

export class AddEmployeeFormComponent implements OnInit{ 
  
  
  @Input() parent?: ManageEmployeesComponent;
  constructor() {}
    
  // Some variables
  
  gender = "X";
  department = "testdep2";
  submitted = false;
  FormCheck = true;
  statusAddButton = false;


  
  
  onAddFormSubmit(form : NgForm) {
    
    // get all the data and making a new object 
    let id = 1; // mag niet hardcoded blijven
    
    console.log(form.value.Fname);
    console.log(this.gender);
    console.log(this.department)
    this.parent?.changeStatusEmpAddForm();
    var address: Address = {adressID:1,city:form.value.city,street: form.value.street,postalcode: form.value.postalcode,housNumber: form.value.housNumber,country:form.value.country}
    var newEmployee = new Employee(id,form.value.Fname,form.value.Lname,form.value.birthDate,form.value.email,form.value.phoneNR,address,form.value.hireDate,form.value.department,form.value.gender);
  }
  

  onCancelAddEmp(){
    this.parent?.changeStatusEmpAddForm();
  }

  ngOnInit(): void {
  }
}

