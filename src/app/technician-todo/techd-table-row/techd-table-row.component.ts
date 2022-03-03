import { Byte } from '@angular/compiler/src/util';
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

  @Input() QueryState: number = 0x01

  

  QueriedShow()
  {
    let LinesToShow: Array<TableRow>;
    LinesToShow = new Array<TableRow>();
    if(this.QueryState == 0x01)
    {
      return this.rows;
    }
    if(this.QueryState == 0x02)
    {
      this.rows.forEach(function(value)
      {
        if(!value.Completed)
        {
          LinesToShow.push(value);
        }
      })
      return LinesToShow;
    }

    return this.rows; //something went wrong HELP
  }
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