import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manageinvoices',
  templateUrl: './manageinvoices.component.html',
  styleUrls: ['./manageinvoices.component.css']
})
export class ManageinvoicesComponent implements OnInit {

  public bills = 
  [{"id":1,"ClientID":1,"SupplierID":1,"Date":"3/23/2021","Type":"Gas","Amount":820,"Price":577,"Tax":13},
  {"id":2,"ClientID":2,"SupplierID":2,"Date":"3/18/2021","Type":"Electricity","Amount":685,"Price":444,"Tax":13},
  {"id":3,"ClientID":1,"SupplierID":2,"Date":"12/6/2021","Type":"Electricity","Amount":763,"Price":167,"Tax":5}];
  public people = 
  [{"ClientID":1,"FirstName":"Chrisse","LastName":"Sulter","email":"csulter0@imageshack.us"},
  {"ClientID":2,"FirstName":"Boone","LastName":"Bodle","email":"bbodle1@umich.edu"},
  {"ClientID":3,"FirstName":"Wilie","LastName":"Renison","email":"wrenison2@last.fm"}];
  public contracts = 
  [{"ContractID":1,"ClientID":1,"ClientType":"Company"},
  {"ContractID":2,"ClientID":1,"ClientType":"Individual"},
  {"ContractID":3,"ClientID":2,"ClientType":"Individual"}];
  
  constructor() { }

  ngOnInit(): void {
  }
}
