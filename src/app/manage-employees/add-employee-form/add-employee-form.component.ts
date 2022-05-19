import { Component, OnInit, Input,Output,EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { Address } from '../../interfaces/address';
import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../services/employee.service';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css'],
  providers:[EmployeeService]
})

export class AddEmployeeFormComponent implements OnInit{ 
  
  
  @Input() parent?: ManageEmployeesComponent;
  constructor(public employeeService : EmployeeService) {}
    
  // Some variables
  
  gender = "X";
  department = "HR";
  submitted = false;
  FormCheck = true;
  statusAddButton = false;


  
  
  onAddFormSubmit(form : NgForm) {
    
    // get all the data and making a new object 
    let id = 1;
    let gender;

    this.parent?.changeStatusEmpAddForm();

    if(form.value.gender== 'M'){
      gender = 0;
    }
    else if(form.value.gender == 'V'){
      gender = 1;
    }
    else{
      gender = 2;
    }
    

    var newEmployee = new Employee(id,form.value.Fname,form.value.Lname,form.value.birthDate,form.value.email,form.value.phoneNR,form.value.password,form.value.national_registry_number,form.value.city,form.value.street,form.value.housNumber,form.value.postalcode,form.value.country,form.value.department,0,form.value.role,form.value.hiredate,gender,form.value.salary);
    this.employeeService.addEmp(newEmployee);
  }



  

  onCancelAddEmp(){
    this.parent?.changeStatusEmpAddForm();
  }

  ngOnInit(): void {
  }
}

