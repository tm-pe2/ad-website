
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
  

  //dummer data
  dmcusmet1 : WorkerlistMeter = {meter_id: 69420, meter_type: "gaas" , physical_id: 1231310 , lastValue: 690}
  dmcusmet2 : WorkerlistMeter = {meter_id: 69421, meter_type: "elek" , physical_id: 1231311 , lastValue: 691}
  dmcusmet3 : WorkerlistMeter = {meter_id: 69422, meter_type: "elega" , physical_id: 1231312 , lastValue: 692}
  dumcus : WorkerlistItem = {planningID: 0, contractID: 0, planningStatus: 0, customerName: "Ronny Flex", address: "sheeshbaan 69 helewijd", meters: [this.dmcusmet1, this.dmcusmet2, this.dmcusmet3]};

  // Constructor
  constructor(private http: HttpClient)
  { 
    this.customerList.push(this.dumcus);
  }

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
