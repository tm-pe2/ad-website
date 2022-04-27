import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee = {
    name: '',
    description: '',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&usqp=CAU',
    department: '',
  };
  constructor() { }

  ngOnInit(): void {
  }


}
