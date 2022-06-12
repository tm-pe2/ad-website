
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';
import { Planning, PlanningStatus } from '../models/planning';
import { WorkerClient } from '../models/worker-client';
import { CustomerContract } from '../interfaces/customer';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  eid : number = 5;
  workerRouteList: Array<WorkerClient> = [];
  selectedCustomer: number =  0;
  adressIDs: Array<number> = [];
  planningIDs: Array<number> = [];
  contractIDs: Array<number> = [];
  userIDs: Array<number> = [];
  firstName: string = "";
  lastName: string = "";
  phone: string = "";


  // Constructor 
  constructor(private http: HttpClient)
  {
    /*
      something tells me this won't work

      but it gets the planning stuff first
      then the customerIDs (& address IDs)
      then it gets the customers

      idk Get-help :')

    */

    this.getPlanning();

    for (let i = 0; i < this.contractIDs.length; i++)
    { this.getCustomerIds(this.contractIDs[i]); }

    for (let i = 0; i < this.userIDs.length; i++) 
    {
      this.getCustomerById(this.userIDs[i]);
      let workerItem: WorkerClient = 
      { 
        planningID: this.planningIDs[i], 
        contractID: this.contractIDs[i],
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
      
      };

      this.workerRouteList.push(workerItem);

    };

  }


  private getPlanning(): Promise<void>
  { 
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Planning>(environment.apiUrl + '/plannings/employee/' + this.eid).subscribe(
        {
          next: (res: Planning) =>
          {
            this.planningIDs.push(res.id);
            this.contractIDs.push(res.contract_id);
            resolve();

          },
          error: (err) =>
          { reject(err); }

        });

    });
  
  }

  private getCustomerIds(contractId: number): Promise<void>
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<CustomerContract>(environment.apiUrl + '/contracts/').subscribe(
        {
          next: (res: CustomerContract) =>
          {
            if (contractId == res.ContractID)
            {
              this.userIDs.push(res.customer_id);
            
            }

          }, 
          error: (err) =>
          { reject(err); }

        });

    });

  }

  private getCustomerById(custmomerID: number): Promise<void>
  { return new Promise<void>((resolve, reject) => 
    {
      this.http.get<User>(environment.apiUrl + '/customers/' + custmomerID).subscribe(
        {
          next: (res: User) =>
          {
            this.firstName = res.first_name;
            this.lastName = res.last_name;
            this.phone = res.phone_number;

          },
          error: (err) =>
          { reject(err); }

        });
    
    });
  }

}
