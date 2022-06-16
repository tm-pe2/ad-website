import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { UserdataService } from '../services/userdata.service';
import { EmployeeForm } from 'src/app/interfaces/form';
import { UserRole } from '../interfaces/User';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
  providers: [EmployeeService], 
})


export class ManageEmployeesComponent implements OnInit{
  
  constructor(private auth : AuthService,public employeeService: EmployeeService,public userdataService: UserdataService) {
  }
  
  role ?:UserRole[] | null;
  user_id ?: number | null;
  elevated: UserRole[] = [UserRole.ADMIN, UserRole.HR_MANAGER, UserRole.MANAGER];
  employeeRoles: UserRole[] = [UserRole.ACCOUNTANT,UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.HR_MANAGER, UserRole.MANAGER, UserRole.SUPPORT, UserRole.TECHNICIAN];
  elevatedAllowed = this.auth.getUserRoleId()?.some(r => this.elevated.includes(r))!;
  employeeAllowed = this.auth.getUserRoleId()?.some(r => this.employeeRoles.includes(r))!;


  ngOnInit(){
    this.employeeService.loadEmp();
    this.role = this.auth.getUserRoleId();
    this.user_id = this.auth.getUserId();
    console.log("role",this.role);
  }
    
  deleteEmployee(emp : EmployeeForm){
    if(confirm("Do you want to remove " + emp.first_name + " " + emp.last_name )){
    }
    this.employeeService.deleteEmp(emp);
  }

}
