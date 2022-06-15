import { Component, OnInit, Input} from '@angular/core';

import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeForm } from 'src/app/interfaces/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css'],
  providers:[EmployeeService]
})

export class AddEmployeeFormComponent{ 
  
  
  constructor(public employeeService : EmployeeService,private router:Router) {}

  onAddFormSubmit(form : EmployeeForm) {
    this.employeeService.addEmployee(form);
    this.router.navigate(['manage-employees']);
  }
  onCancelAddEmp(){
    this.router.navigate(['manage-employees']);
  }

}

