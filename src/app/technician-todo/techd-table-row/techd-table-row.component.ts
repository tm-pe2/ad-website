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
    this.QueriedShow(new FilterParams());
  }

  @Input() rows: Array<TableRow> = [
    new TableRow(['A', 'B', 'C', 'D'], false),
    new TableRow(['A', 'C', 'C', 'D'], true),
    new TableRow(['F', 'B', 'C', 'D'], false),
    new TableRow(['F', 'C', 'C', 'D'], true),
    new TableRow(['G', 'B', 'C', 'D'], false),
    new TableRow(['G', 'C', 'C', 'D'], true),
    new TableRow(['H', 'B', 'C', 'D'], false),
    new TableRow(['H', 'C', 'C', 'D'], true),
  ];;

  @Input() QueryState: number = 0x01

  @Input() LinesToShow: Array<TableRow> = new Array<TableRow>();

  QueriedShow(FP: FilterParams)
  {
    /*let LinesToShow: Array<TableRow>;
    LinesToShow = new Array<TableRow>();*/
    /*this.LinesToShow = new Array<TableRow>();
    if(this.QueryState == 0x01)
    {
      this.LinesToShow = this.rows;
      return;
    }
    if(this.QueryState == 0x02)
    {
      this.rows.forEach((value) =>
      {
        if(!value.Completed)
        {
          this.LinesToShow.push(value);
        }
      })
    }*/

    this.LinesToShow = Object.assign([], this.rows);
    if(FP.CompletedOnly)
    {
      let pos = 0;
      let buf = new Array<TableRow>();
      this.LinesToShow.forEach((value) =>
      {
        if(value.Completed)
        {
          buf.push(value);
        }
      })
      this.LinesToShow = Object.assign([], buf);
    }

    return;
  }

  UpdateTableItem(ID: number, CheckedMode: boolean)
  {
    this.LinesToShow[ID].Completed = CheckedMode;
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