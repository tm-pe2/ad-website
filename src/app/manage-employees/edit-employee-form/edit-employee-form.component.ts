import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../../interfaces/address';
import { Form, NgForm } from '@angular/forms';
import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css'],
  providers: [EmployeeService]
})
export class EditEmployeeFormComponent {
  

  @Input() parent?: ManageEmployeesComponent;
  constructor(public employeeService: EmployeeService) {}

  
  
  //current_Emp = this.employeeService.getEmp();
  
  onSubmit(f : NgForm) {
   console.log(f.value);
  }
  
  onCancelEditEmp(){
    this.parent?.changeStatusEmpEditForm();
  }
  
  
  ngOnInit(): void {
  }
  
}



