import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeForm } from 'src/app/interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { 
  }
  employees: EmployeeForm[] = []; 

  
  
  current_Emp ?: EmployeeForm;
  
  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;
  showEmpCard : boolean = false;

  loadEmp(){
    this.http.get<EmployeeForm[]>(environment.apiUrl + "/employees").subscribe(
      {
        next:(res: EmployeeForm[]) => {
          this.employees = res;
          console.log(res);
        },
        error: (err) =>{
          console.log("error loading employees: ",err);
        }
      }
    )
  }

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

  editEmp(employee : EmployeeForm): Promise<void>{
    const promise = new Promise<void>((resolve,reject) => 
    this.http.put(environment.apiUrl + '/employees',employee).subscribe(
      {
        next:(res : any) => {

          console.log("Emp edited", res);
        },
        error:(err) => {
          console.log("error:", err);
        }
      }
    )
    )
    return promise;
  }


  deleteEmp(emp : EmployeeForm){
    emp.active = false;
    console.log(emp);
    this.http.put(environment.apiUrl + '/employees',emp).subscribe(
      {
        next:(res : any) => {
          console.log("Emp gone", res);
        },
        error:(err) => {
          console.log("error test:", err);
        }
      }
    );
  }


}

