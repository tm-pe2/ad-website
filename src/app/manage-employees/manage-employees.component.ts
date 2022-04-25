import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee';
import { Address } from './interfaces/address';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
})

export class ManageEmployeesComponent{
  
  constructor() { }
  
  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;

  // dummy data
    id = 1;
    FirstName = "xander";
    LastName = "aerts";
    BirthDate= "test";
    Email = "bbb";
    PhoneNumber = "bbb";
    Address:Address = {adressID:1,city:"bonheiden",postalcode:2820,street:"denayer",housNumber:111,country:"belgium"}
    HireDate ="hey";
    Department = "dkqdjf";
    Gender="X";
    
    
    emp = new Employee(1,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender);
    emp2 = new Employee(2,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender)
    
    
    current_Emp?: Employee;
    employees: Employee[] = [this.emp,this.emp2]; //this array is the one where all the emp have to get in

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
    this.changeStatusEmpEditForm();
    this.current_Emp = this.employees[id-1];
    console.log(this.current_Emp.FirstName);
  }
  
  getEmp(): any{
    if(this.current_Emp){
      return this.current_Emp;
    }

  }


  deleteEmployee(id : number){
    console.log(id);
  }

  showDetails(id : number){
    console.log("test");
  }

  ngOnInit(): void {
    }
}
