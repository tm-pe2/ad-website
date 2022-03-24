import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css'],
})
export class TicketingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



}

@Component({
  selector: 'table-row',
  templateUrl: './tablerow.component.html',
})

export class TableRow {
  constructor() {}
  @Input() fields!: Array<String>;
  @Input() header: Boolean = false;
}