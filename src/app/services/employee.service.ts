import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeForm } from 'src/app/interfaces/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { 
  }
  employees: EmployeeForm[] = []; 


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
  getEmployeeById(id : number):  Observable<EmployeeForm> {
    return this.http.get<EmployeeForm>(environment.apiUrl + "/employees/" + id);
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
          this.loadEmp();
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
    console.log(emp);
    this.http.patch(environment.apiUrl + '/users/' + emp.id, {
      active: false
    }).subscribe(
      {
        next:(res : any) => {
          console.log("Emp gone", res);
          this.loadEmp();
        },
        error:(err) => {
          console.log("error test:", err);
        }
      }
    );
  }

  getEmp(id : number){
    this.http.get(environment.apiUrl + '/employees' + id).subscribe(
      {
        next:(res : any) => {
          return res;
        }
      }
    )
  }
}

