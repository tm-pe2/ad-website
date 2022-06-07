import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css'],
  providers: [EmployeeService]
})
export class EditEmployeeFormComponent {
  

  @Input() parent?: ManageEmployeesComponent;

  constructor(public employeeService: EmployeeService) {    
  }

  onSubmit(f : NgForm) {
    var id =0;
    this.parent?.changeStatusEmpEditForm();
  }
  
  onCancelEditEmp(){
    this.parent?.changeStatusEmpEditForm();
  }
  
  
  ngOnInit(): void {
   
  }
  
}



