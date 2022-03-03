import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techd-table', //I know the filename has row but it's actually a full on table - I will NOT fix this because random stuff will break
  templateUrl: './techd-table-row.component.html',
  styleUrls: ['./techd-table-row.component.css']
})
export class TechdTableRowComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

  @Input() rows: Array<TableRow> = [
    new TableRow(['A', 'B', 'C', 'D'], false),
    new TableRow(['A', 'B', 'C', 'D'], true),
  ];;

}

export interface TableRowInt {
  Fields: Array<String>;
  Completed: Boolean;
}

export class TableRow implements TableRowInt //one row for the entire table
{
  Fields: Array<String>;
  Completed: Boolean;

  constructor(fields: Array<string>, completed: boolean)
  {
    this.Fields = fields;
    this.Completed = completed;
  }
}