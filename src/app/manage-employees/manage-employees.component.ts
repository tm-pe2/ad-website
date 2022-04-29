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


  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;
  employees : Employee[] = [];
  role ?: string | null;


  ngOnInit(){

    this.role = this.auth.getUserRole()
    console.log("yo")
    if(this.role != 'employeeManager'){
      this.showAddEmpButton = false;
      console.log("hello")
    }
  }
  // dummy data
    
    onAddButtonClick(){
    this.showAddEmpForm = true;
    this.showAddEmpButton = false;
    this.showEmpList = false;

  }
  
  changeStatusEmpAddForm(){
    this.showAddEmpForm = !this.showAddEmpForm;
    this.showAddEmpButton = !this.showAddEmpButton;
    this.showEmpList = !this.showEmpList;
    
  }

  changeStatusEmpEditForm(){
    this.showEmpList = !this.showEmpList;
    console.log(this.showEmpList,"test");

    this.showEditEmpForm = !this.showEditEmpForm;
    this.showAddEmpButton = !this.showAddEmpButton;
  }
    
  startEditEmployee(id: number){
    //var emps =  this.employeeService.getEmployees();
    //this.employeeService.pushEmp(emps[id-1]); 

    this.employeeService.current_Emp = this.employeeService.employees[id-1];
    this.changeStatusEmpEditForm();
  }

  deleteEmployee(id : number){
    console.log(id);
  }

  showDetails(id : number){
    console.log("test");
  }
}
