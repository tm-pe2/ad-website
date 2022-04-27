import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../interfaces/address';
import { Form, NgForm } from '@angular/forms';
import { ManageEmployeesComponent } from '../manage-employees.component';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css'],
})
export class EditEmployeeFormComponent {
  
  @Input() parent?: ManageEmployeesComponent;
  constructor() {}  

  //some dummy data
  
  //get data out of the db and put it in the emp user
  
  //Address:Address = {adressID:1,city:"bonheiden",postalcode:2820,street:"denayer",housNumber:111,country:"belgium"}
  
  //current_Emp = new Employee(1,"FirstNameJos","Van den Berg","1/1/1","josvandenberg@bedrijf.com","0412312312",this.Address,"1/1/2","managers","X"); 
  
  //current_Emp = this.parent?.getEmp();
  

  
  onSubmit(f : Form) {

    //edit the data in de db;
  }
  current_Emp = this.parent?.getEmp();
  
  onCancelEditEmp(){
    this.parent?.changeStatusEmpEditForm();
    console.log("het")
  }
  
  
  ngOnInit(): void {
  }
  
}



