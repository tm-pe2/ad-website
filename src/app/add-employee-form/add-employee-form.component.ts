import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  constructor() {}
  
  Department = ['mangers','idk','the guys from it'];

  submitted = false;

  onSubmit() {this.submitted = true;}
  
  ngOnInit(): void {
  }

}
