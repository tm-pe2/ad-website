import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-technician-todo',
  templateUrl: './technician-todo.component.html',
  styleUrls: ['./technician-todo.component.css']
})
export class TechnicianTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

export class FilterParams
{
  CompletedOnly: boolean = false;
}