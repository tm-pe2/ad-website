import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { Address } from '../interfaces/address';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { UserdataService } from '../services/userdata.service';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';
import { Subject } from 'rxjs';


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


    this.role = this.auth.getUserRoleId()
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
    this.employeeService.showEditEmpForm = !this.employeeService.showEditEmpForm;

    this.employeeService.showEmpList = !this.employeeService.showEmpList;
    this.employeeService.showAddEmpButton = !this.employeeService.showAddEmpButton;

    console.log("hehleh",this.employeeService.current_Emp);
  }
    
  startEditEmployee(id: number){
    this.employeeService.current_Emp = this.employeeService.employees[id];
    console.log(this.employeeService.current_Emp);
    this.changeStatusEmpEditForm();
  }

  deleteEmployee(id : number){
    if(confirm("Do you want to remove " + this.employeeService.employees[id].first_name + " " + this.employeeService.employees[id].last_name )){
    //this.employeeService.deleteEmp(this.employeeService.employees[id]);
    }
  }

  showDetails(id : number){
    this.employeeService.current_Emp = this.employeeService.employees[id];
    this.employeeService.showEmpList = !this.employeeService.showEmpList;
    this.employeeService.showEmpCard = !this.employeeService.showEmpCard;
  }

}
