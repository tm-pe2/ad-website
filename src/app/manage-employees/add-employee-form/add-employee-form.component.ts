import { Component, OnInit, Input} from '@angular/core';

import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeForm } from 'src/app/interfaces/form';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css'],
  providers:[EmployeeService]
})

export class AddEmployeeFormComponent implements OnInit{ 
  
  
  @Input() parent?: ManageEmployeesComponent;
  constructor(public employeeService : EmployeeService) {}



  
  
  onAddFormSubmit(form : EmployeeForm) {
    this.employeeService.addEmployee(form).then(() => this.parent?.changeStatusEmpAddForm())
  }



  

  onCancelAddEmp(){
    this.parent?.changeStatusEmpAddForm();
  }

  ngOnInit(): void {
  }
}

