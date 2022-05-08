
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cust } from '../Cust';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planning, Customer, Address, Invoice } from '../interfaces/worker-interfaces';

/*
@Injectable({
  providedIn: 'root'
})
*/

// Class
export class WorkerAppService {
  // Variables
  nCust : number = 10;
  clientList : Array<Cust> = [];
  eid : number = 5;
  planningList: Planning[] = [];

  // Constructor
  constructor(private http: HttpClient)
  { }


  
  // Functions
  // Get planning
  // |-> get employee ids, status & date
  getPlanning(): Observable<Planning[]> 
  { return this.http.get<Planning[]>(environment.apiUrl + '/plannings/employee/' + this.eid); }

  // Get customer data
  // |-> name, addressID, gasType, electricityType
  // I have no idea if that's how the routes work tho, gotsta ask it to someone who does
  getCustomer(customerID: Number): Observable<Customer> 
  { return this.http.get<Customer>(environment.apiUrl + '/customer/:' + customerID); }

  // Get address
  // |-> get the address with an addressID
  // |-> use the address values to make it a string
  // I have no idea if that's how the routes work tho, gotsta ask it to someone who does
  getAddress(adresID: Number): Observable<Address>
  { return this.http.get<Address>(environment.apiUrl + '/addresses/:' + adresID); }
  
  // Get data from invoice (sort on highest ID?)
  getInvoices(): Observable<Invoice[]>
  { return this.http.get<Invoice[]>(environment.apiUrl + '/invoices'); }
  
}
