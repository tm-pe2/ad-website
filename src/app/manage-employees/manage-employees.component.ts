import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from './employee';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { Address } from '../interfaces/address';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from './services/employee.service';


@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
  providers: [EmployeeService],
})

export class ManageEmployeesComponent implements OnInit{
  
  constructor(private auth : AuthService,public employeeService: EmployeeService ) { }


  /*showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;*/
  role ?: string | null;


  ngOnInit(){

    //this.role = this.auth.getUserRole()
    this.role = 'employeeManager'
    if(this.role != 'employeeManager'){
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
    console.log(id);
  }

  showDetails(id : number){
    this.employeeService.current_Emp = this.employeeService.employees[id-1];
    this.employeeService.showEmpList = !this.employeeService.showEmpList;
    this.employeeService.showEmpCard = !this.employeeService.showEmpCard;
  }
}
