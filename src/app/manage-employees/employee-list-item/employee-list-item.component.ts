import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {

  constructor() { }

  emp = new Employee(1,"Xander","Aerts","1/1/1","test@test.be","01234455","thuis","1/1/1","boekhouding","X");

  ngOnInit(): void {
  }

}
