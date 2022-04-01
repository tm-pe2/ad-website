import { Component, OnInit, Input,Output,EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { ManageEmployeesComponent } from '../manage-employees.component';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})

export class AddEmployeeFormComponent implements OnInit{ 
  
  
  @Input() parent?: ManageEmployeesComponent;
  constructor() {}
    

  
  error = "";
  showError = false;
  Gender = 'X';
  
  // Some variables
  id = 1;
  
  submitted = false;
  FormCheck = true;
  statusAddButton = false;

  department = "testdep2";

  
  
  onAddFormSubmit(form : NgForm) {
    
    // get all the data and making a new object 
    
    console.log(form.value.Fname);
    console.log(this.Gender);
    this.parent?.onEmpAdded();    
    // var newEmployee = new Employee(this.id,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.genders[1]);
  }
  
  ngOnInit(): void {
  }
}

