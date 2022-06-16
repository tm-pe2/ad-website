import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planning } from '../interfaces/planning';
import { Consumption, ConsumptionPost, ConsumptionUser } from '../interfaces/consumption';
import { Meter } from '../interfaces/meter'
import { Contract } from '../interfaces/contract';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  planningItem?: Planning;
  planningList: Array<Planning> = [];
  userIDs: Array<number> = [];
  consumption: Array<Consumption> = [];
  customer?: ConsumptionUser;
  meters: Array<Meter> = [];

  selectedUser : number = 0;

  // Constructor 
  constructor(private http: HttpClient)
  { this.getPlanning(); }

  // Private functions
  // get from models folder
  private getPlanning(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Planning[]>(environment.apiUrl + '/plannings').subscribe(
        {
          next: (res: Planning[]) =>
          {
            this.planningList = res;
            resolve();
          },
          error: (err) =>
          { reject(err); }

        });

    });
  
  }

  // Public functions
  // Get the consumtions for e certain user
  // Call this in the component itself
  // get from consumtion interface

  public getUserIds(contractID: number, index: number): Promise<void> 
  {
    console.log("ContractID: " + contractID, ", Position: " + index);
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Contract[]>(environment.apiUrl + '/contracts').subscribe(
        {
          next: (res: Contract[]) =>
          { 
            for (let i = 0; i < res.length; i++)
            {
              if (res[i].id == contractID)
              { this.userIDs.push(res[i].user_id); }

            }

            resolve();
          
          }, error: (err) => { reject(err); }

        });

    });

  }// this.http.get<Consumption>(environment.apiUrl + '/consumptions/' + userID)

  public getConsumtions(userID: number): Promise<void> 
  {
    let consumptions: Consumption[];
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Consumption[]>(environment.apiUrl + '/consumptions/' + userID).subscribe(
        {
          next: (res: Consumption[]) =>
          {
            consumptions = res;
            console.log(consumptions);

            this.customer = consumptions[0].customer;

            //this.meters.splice(0);
            this.meters = [];
            for (let i = 0; i < consumptions.length; i++)
            { this.meters.push(consumptions[i].meter); }

            console.log(this.meters);

            resolve();
          
          }, error: (err) => { reject(err); }

        });

    });
  }
  
  public postNewConsumtions(userID: number, newConsumtion: ConsumptionPost)
  {
    return new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/consumptions/' + userID, newConsumtion).subscribe({
          next: (res: any) => { resolve(res); },
          error: (err) => { reject(err); }
        });
    });

  }

  


}