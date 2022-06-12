import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeForm } from 'src/app/interfaces/form';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { 
  }
  employees: Employee[] = []; 
  
  current_Emp ?: Employee;
  
  


  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;
  showEmpCard : boolean = false;



  addEmployee(employee: EmployeeForm): Promise<void>{
    const promise = new Promise<void>((resolve, reject) => 
    this.http.post(environment.apiUrl + '/employees',employee).subscribe(
      {
        next:(res: any) => {
          resolve();
        },
        error:(err) => {
          reject(err);
        }
      }
    ));
    return promise;
  }

}

