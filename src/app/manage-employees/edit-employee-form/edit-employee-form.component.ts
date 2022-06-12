import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { ManageEmployeesComponent } from '../manage-employees.component';
import { EmployeeService } from '../../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeForm } from 'src/app/interfaces/form';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css'],
  providers: [EmployeeService]
})
export class EditEmployeeFormComponent {
  

  @Input() parent?: ManageEmployeesComponent;
  employee?: EmployeeForm;

  constructor(public employeeService: EmployeeService,private router:Router,private route:ActivatedRoute) {    
  }

  onSubmit(employee : EmployeeForm) {
    let emp:EmployeeForm = employee;
    emp.id = this.route.snapshot.params['id'] as number;
    
    this.employeeService.editEmp(emp);
    this.router.navigate(['manage-employees']);
  }
  
  onCancelEditEmp(){
    this.router.navigate(['manage-employees']);
  }
  
  
  ngOnInit(): void {
    
    this.employeeService.getEmployeeById(this.route.snapshot.params['id'] as number).subscribe(
      {
        next:(res: EmployeeForm) => {
          this.employee = res;
        }
      });
   
  }
  
}



