import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../Employee';
import { ManageEmployeesComponent } from '../manage-employees.component';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent{

  @Input() parent?: ManageEmployeesComponent
  constructor() {}
  
  //DepartmentOptions = ['mangers','idk','the guys from it'];



  error = "";
  showError = false;

  // Some variables
  id = 1;
  FirstName = "";
  LastName = "";
  BirthDate= "";
  Email = "";
  PhoneNumber = "";
  Address ="";
  HireDate ="";
  Department = "";
  Gender="";
  submitted = false;
  FormCheck = true;
  statusAddButton = false;
  
  onAddFormSubmit() {
    var emp = new Employee(this.id,this.FirstName,this.LastName,this.BirthDate,this.Email,this.PhoneNumber,this.Address,this.HireDate,this.Department,this.Gender);

    if(this.FirstName.length > 5){
      this.error = "The firstname is too long";
      this.showError = true;
      return false;
    }
    if(this.LastName.length > 50){
      this.error = "The lastname is to long";
      this.showError = true;
      return false;
    }    

    this.parent?.onEmpAdded();
    return true;

  }
 
  ngOnInit(): void {
  }
}



