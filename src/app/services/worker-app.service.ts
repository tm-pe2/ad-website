
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cust } from 'src/app/Cust';
import { environment } from 'src/environments/environment';
import { Planning, WorkerlistItem, WorkerlistMeter } from 'src/app/interfaces/worker-interfaces';
import { User } from '../interfaces/User';


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

  // Temporary storage stuff
  planningIDs: Array<number> = [];
  contractIDs: Array<number> = [];
  statuses: Array<number> = [];
  nameList: Array<String> = [];
  

  //dummer data
  dmcusmet1 : WorkerlistMeter = {meter_id: 69420, meter_type: "gaas" , physical_id: 1231310 , lastValue: 690}
  dmcusmet2 : WorkerlistMeter = {meter_id: 69421, meter_type: "elek" , physical_id: 1231311 , lastValue: 691}
  dmcusmet3 : WorkerlistMeter = {meter_id: 69422, meter_type: "elega" , physical_id: 1231312 , lastValue: 692}
  dumcus : WorkerlistItem = {planningID: 0, planningStatus: 0, customerName: "Ronny Flex", address: "sheeshbaan 69 helewijd", meters: [this.dmcusmet1, this.dmcusmet2, this.dmcusmet3]};

  // Constructor
  constructor(private http: HttpClient)
  { 
    this.customerList.push(this.dumcus);
  }

  /*
  getPlanning(): Promise<void>
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Planning>(environment.apiUrl + '/planning/employees/' + this.eid)
      .subscribe(
        {
          next: (res: Planning) =>
          {
            // if (res.Date == new Date())
            this.planningIDs.push(res.PlanningID);
            this.contractIDs.push(res.CustomerID);
            this.statuses.push(res.Status);
            resolve();

          }, error: (err) => 
          {
            reject(err);

          }

        })

    });

  }

  getCustomerID(contractID: number): Promise<void>
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Planning>(environment.apiUrl + '/planning/employees/' + this.eid)
      .subscribe(
        {
          next: (res: Planning) =>
          {
            // if (res.Date == new Date())
            this.planningIDs.push(res.PlanningID);
            this.contractIDs.push(res.CustomerID);
            this.statuses.push(res.Status);
            resolve();

          }, error: (err) => 
          {
            reject(err);

          }

        })

    });

  }

  getCustomerInfo(userID: number): Promise<void>
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<User>(environment.apiUrl + '/users/' + userID)
      .subscribe(
        {
          next: (res: User) =>
          {
            // if (res.Date == new Date())

            resolve();

          }, error: (err) => 
          {
            reject(err);

          }

        })

    });

  }
  */

}
