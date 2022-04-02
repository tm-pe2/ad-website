import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../interfaces/address';
import { NgForm } from '@angular/forms';
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
  

  
<<<<<<< HEAD
  onSubmit() {

    //edit the data in de db;
=======
  submitted = false;
  
  onSubmit(form: form) {;
    console.log(this.emp.FirstName,this.emp.LastName,this.emp.BirthDate,this.emp.Email,this.emp.PhoneNumber,this.emp.Address,this.emp.HireDate,this.emp.Department,this.emp.Gender);
>>>>>>> 00585af (git push)
  }
  current_Emp = this.parent?.getEmp();
  
  onCancelEditEmp(){
    this.parent?.changeStatusEmpEditForm();
    console.log("het")
  }
  
  
  ngOnInit(): void {
  }
  
}



