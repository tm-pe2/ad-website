import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
