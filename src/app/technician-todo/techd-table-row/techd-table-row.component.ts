import { Byte } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import {FilterParams} from '../technician-todo.component';

@Component({
  selector: 'app-techd-table', //I know the filename has row but it's actually a full on table - I will NOT fix this because random stuff will break
  templateUrl: './techd-table-row.component.html',
  styleUrls: ['./techd-table-row.component.css']
})
export class TechdTableRowComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    fetch('http://localhost:6060/techtasks')
    .then((response) => response.json())
    .then((tasks) => {
      console.table(tasks.Tasks);
      this.rows = tasks.Tasks;
    });
  }

  @Input() rows: Array<TechTasks> = [

  ];;

  RefreshData()
  {
    fetch('http://localhost:6060/techtasks')
    .then((response) => response.json())
    .then((tasks) => {
      console.table(tasks.Tasks);
      this.rows = tasks.Tasks;
    });
  }
}

interface TechTasks{
  Name: String;
  Location: String;
  WhenDate: String;
  Completed: boolean;
}