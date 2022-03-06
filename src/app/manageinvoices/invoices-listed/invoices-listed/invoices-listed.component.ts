import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-listed',
  templateUrl: './invoices-listed.component.html',
  styleUrls: ['./invoices-listed.component.css']
})
export class InvoicesListedComponent implements OnInit {

  @Input() person: any;
  @Input() bill: any;

  constructor() { }

  ngOnInit(): void {
  }

}
