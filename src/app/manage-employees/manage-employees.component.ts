import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { Address } from '../interfaces/address';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { UserdataService } from '../services/userdata.service';
import { EmployeeForm } from 'src/app/interfaces/form';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
  providers: [EmployeeService], 
})


export class ManageEmployeesComponent implements OnInit{
  
  constructor(private auth : AuthService,public employeeService: EmployeeService,public userdataService: UserdataService) {
  }
  
  role ?: number | null;

  ngOnInit(){
    this.employeeService.loadEmp();
    this.role = this.auth.getUserRoleId();
    this.role = 7;
    console.log("role",this.role);
  }
    
  deleteEmployee(emp : EmployeeForm){
    if(confirm("Do you want to remove " + emp.first_name + " " + emp.last_name )){
    }
    this.employeeService.deleteEmp(emp);
  }

}
