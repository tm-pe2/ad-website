import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeForm } from 'src/app/interfaces/form';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
  providers: [EmployeeService]
})
export class EmployeeCardComponent implements OnInit {

  constructor(public employeeService :EmployeeService,private router:Router,private route:ActivatedRoute,private http: HttpClient) { }

  current_Emp?: EmployeeForm;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.http.get(environment.apiUrl + '/employees/' + id).subscribe(
      {
        next:(res : any) => {
          this.current_Emp = res;
          console.log(res);
        }
      }
    );
  }


}
