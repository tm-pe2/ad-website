import { Component, Input, OnInit } from '@angular/core';

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
  @Input() fields?: Array<String>;
  @Input() header: Boolean = false;

  showModal() {
    document.getElementById("my-modal")!.style.display = "block";
  }
}