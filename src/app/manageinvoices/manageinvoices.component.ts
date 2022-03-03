import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageinvoices',
  templateUrl: './manageinvoices.component.html',
  styleUrls: ['./manageinvoices.component.css']
})
export class ManageinvoicesComponent implements OnInit {
  
  people = [
    {"ID": 1, "FirstName": "John", "LastName": "Doe", "bills": [
      {"ID": 3, "Date": "24/02/2022", "Type": "Gas", "Supplier": "Esso", "Amount": 500, "Charge": 100},
      {"ID": 10, "Date": "03/03/2022", "Type": "Electricity", "Supplier": "Electrabel", "Amount": 4500, "Charge": 50}
    ]},
    {"ID": 2, "FirstName": "Amy", "LastName": "Spiller", "bills": [

    ]}]



  constructor() { }

  ngOnInit(): void {
  }

}
