import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageinvoices',
  templateUrl: './manageinvoices.component.html',
  styleUrls: ['./manageinvoices.component.css']
})
export class ManageinvoicesComponent implements OnInit {

  customers= [{customerName: "John"}];
  
  bill = [{"ID": 3, "Customer": "John", "Type": "Gas", "Supplier": "GasSupplierName", "Amount": 500, "Charge": 100},
  {"ID": 10, "Customer": "Doe", "Type": "Electricity", "Supplier": "ElecSupplierName", "Amount": 4500, "Charge": 50}];



  constructor() { }

  ngOnInit(): void {
  }

}
