import { Injectable, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../../interfaces/address';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  Address:Address = {adressID:1,city:"Sint-Katelijne-Waver",postalcode:123,street:"deNayer",housNumber:111,country:"Belgie"};  
  emp = new Employee(1,"fname","lname","1/1/1","test","test",this.Address,"test","test","test",123);  
  current_Emp : Employee = this.emp;
  
  employees: Employee[] = [this.emp]; //this array is the one where all the emp have to get in


  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;
  showEmpCard : boolean = false;

  
  constructor(private http:HttpClient) { 
    this.http.get(environment.apiUrl + '/employees').subscribe(
      {
        next: (res: any) => {
          this.employees = res;
        },
      }
    );
  }
}

