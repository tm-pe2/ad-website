import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from './employee';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { Address } from '../interfaces/address';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from './services/employee.service';
import { UserdataService } from '../services/userdata.service';


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

    //this.userdataService.loadUser();
    this.role = this.auth.getUserRoleId()

    if(this.role != 6){
      this.employeeService.showAddEmpButton = false;
    }
    
  }
    
    onAddButtonClick(){
    this.employeeService.showAddEmpForm = true;
    this.employeeService.showAddEmpButton = false;
    this.employeeService.showEmpList = false;

  }
  
  changeStatusEmpAddForm(){
    this.employeeService.showAddEmpForm = !this.employeeService.showAddEmpForm;
    this.employeeService.showAddEmpButton = !this.employeeService.showAddEmpButton;
    this.employeeService.showEmpList = !this.employeeService.showEmpList;
    
  }

  changeStatusEmpEditForm(){
    this.employeeService.showEmpList = !this.employeeService.showEmpList;

    this.employeeService.showEditEmpForm = !this.employeeService.showEditEmpForm;
    this.employeeService.showAddEmpButton = !this.employeeService.showAddEmpButton;
  }
    
  startEditEmployee(id: number){
    console.log("id",id);
    this.employeeService.current_Emp = this.employeeService.employees[id];
    console.log(this.employeeService.current_Emp);
    this.changeStatusEmpEditForm();
    console.log(this.employeeService.current_Emp);
  }

  deleteEmployee(id : number){
    this.employeeService.deleteEmp(this.employeeService.employees[id]);
    console.log(id);
  }

  showDetails(id : number){
    this.employeeService.current_Emp = this.employeeService.employees[id];
    this.employeeService.showEmpList = !this.employeeService.showEmpList;
    this.employeeService.showEmpCard = !this.employeeService.showEmpCard;
  }
}
