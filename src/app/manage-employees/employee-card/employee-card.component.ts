import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
  providers: [EmployeeService]
})
export class EmployeeCardComponent implements OnInit {

  constructor(public employeeService :EmployeeService) { }

  ngOnInit(): void {
  }


}
