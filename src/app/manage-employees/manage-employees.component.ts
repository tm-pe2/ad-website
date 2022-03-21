import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  constructor() { }

  showAddEmpForm : boolean = false;
  showEmpList : boolean = true;

  ngOnInit(): void {
  }

//once added the layout must change again
  onAddButtonClick(){
    this.showAddEmpForm = true;
    this.showEmpList = false;
  }
}
