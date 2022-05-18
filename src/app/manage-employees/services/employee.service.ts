import { Injectable, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { Address } from '../../interfaces/address';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { 
  }
  employees: Employee[] = []; 
  
  emp = new Employee(0,"test","","","","","","","","","","","","",0,0,"",0,0); 
  current_Emp : Employee = this.emp;
  
  


  showEmpList : boolean = true;
  showAddEmpForm : boolean = false;
  showAddEmpButton : boolean = true;
  showEditEmpForm : boolean = false;
  showEmpCard : boolean = false;


  loadEmp(){
    this.http.get<Employee[]>(environment.apiUrl + '/employees').subscribe(
      {
        next: (res: Employee[]) => {

          var i = 0;
          for (var resEmp of res){ 
            var newEmp = new Employee(resEmp.employee_id,resEmp.first_name,resEmp.last_name,resEmp.birth_date,resEmp.email,resEmp.phone_number,resEmp.password,resEmp.national_registry_number,resEmp.city,resEmp.street,resEmp.house_number,resEmp.postal_code,resEmp.country,resEmp.department,resEmp.permissions,resEmp.role_id,resEmp.hire_date,resEmp.gender,resEmp.salary);
            this.employees.push(newEmp);
          }
          
        },
      }
    );
  }

  addEmp(emp: Employee){
    this.http.post<Employee>(environment.apiUrl + '/employees',emp).subscribe(
      {
        next:(res:Employee) => {
          console.log("employee added",res);
        }
      }
    );
  }

  editEmp(emp: Employee){
    this.http.put<Employee>(environment.apiUrl + '/employees' + emp.employee_id,emp).subscribe(
      {
        next:(res: Employee) =>{
          console.log("employee edited",res);
        }
      }
    )
  }

  deleteEmp(emp : Employee){

    this.http.delete<Employee>(environment.apiUrl + '/employees/' + emp.employee_id).subscribe(
      {
        next:(res: Employee) => {
          console.log("employee deleted",res);
        }
      }
    )
  }

}

