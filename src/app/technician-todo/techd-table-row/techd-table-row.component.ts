import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techd-table-row',
  templateUrl: './techd-table-row.component.html',
  styleUrls: ['./techd-table-row.component.css']
})
export class TechdTableRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() fields!: Array<String>;
  @Input() header: Boolean = false;
  @Input() Completed : Boolean = false;
}
