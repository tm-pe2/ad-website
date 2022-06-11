
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planning, WorkerlistItem, WorkerlistMeter } from 'src/app/interfaces/worker-interfaces';
import { User } from '../interfaces/User';
import { Address } from '../interfaces/customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  eid : number = 5;
  workerRouteList: Array<WorkerlistItem> = [];
  selectedCustomer: number =  0;

  // Temporary storage stuff
  planningIDs: Array<number> = [];
  contractIDs: Array<number> = [];
  statuses: Array<number> = [];

  // Constructor 
  constructor(private http: HttpClient)
  { }


  private getPlanning(): Observable<Planning>
  { return this.http.get<Planning>(environment.apiUrl + '/plannings/employee/' + this.eid); }

  private getCustomerById(custmomerID: number): Observable<User>
  { return this.http.get<User>(environment.apiUrl + '/customers/' + custmomerID); }

}
