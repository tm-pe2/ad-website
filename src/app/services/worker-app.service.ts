
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cust } from 'src/app/Cust';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkerlistItem, WorkerlistMeter } from 'src/app/interfaces/worker-interfaces';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  nCust : number = 10;
  clientList : Array<Cust> = [];
  eid : number = 5;
  customerList: Array<WorkerlistItem> = [];
  selectedCustomer: number =  0;

  // Constructor
  constructor(private http: HttpClient)
  { }

  getPlanning(): Promise<void>
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<WorkerlistItem>(environment.apiUrl + '/planning/employees/' + this.eid)
      .subscribe(
        {
          next: (res: WorkerlistItem) =>
          {
            this.customerList.push(res);
            resolve();

          }, error: (err) => 
          {
            reject(err);

          }

        })

    });

  }

/*
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
  */
}
