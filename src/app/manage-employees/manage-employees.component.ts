import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})

export class ManageEmployeesComponent implements OnInit {

  constructor() { }
  
  showAddEmpForm : boolean = false;
  showEmpList : boolean = true;
  

  //@Input() AddFormCommited : boolean;

  ngOnInit(): void {
  }

//once added the layout must change again
  onAddButtonClick(){
    this.showAddEmpForm = true;
    this.showEmpList = false;
  }

  onEmpAdded(){
    this.showAddEmpForm = false;
    this.showEmpList = true;
  }
}
