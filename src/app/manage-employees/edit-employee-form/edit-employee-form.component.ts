import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Employee } from '../employee';
import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../services/employee.service';
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
    var emp = new Employee(id,f.value.Fname,f.value.Lname,f.value.birthDate,f.value.email,f.value.phoneNR,f.value.password,f.value.national_registry_number,f.value.city,f.value.street,f.value.housNumber,f.value.postalcode,f.value.country,f.value.department,0,f.value.role,f.value.hiredate,f.value.gender,f.value.salary);
    this.employeeService.editEmp(emp);
    this.parent?.changeStatusEmpEditForm();
  }
  
  onCancelEditEmp(){
    this.parent?.changeStatusEmpEditForm();
  }
  
  
  ngOnInit(): void {
   
  }
  
}



