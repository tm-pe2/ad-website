import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterParams } from '../technician-todo/technician-todo.component';

@Component({
  selector: 'app-tech-filter-buttons',
  templateUrl: './tech-filter-buttons.component.html',
  styleUrls: ['./tech-filter-buttons.component.css']
})
export class TechFilterButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filter()
  {
    this.DoFilter.emit(this.CurParams);
  }

  CurParams: FilterParams = new FilterParams();
  @Output() DoFilter = new EventEmitter<FilterParams>();
}
