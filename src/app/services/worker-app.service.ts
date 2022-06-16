import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planning } from '../interfaces/planning';
import { Consumption, ConsumptionPost, ConsumptionUser } from '../interfaces/consumption';
import { Meter } from '../interfaces/meter'
import { Contract } from '../interfaces/contract';
import { environment } from '../../environments/environment';
import { MeterAppForm } from '../interfaces/form';


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
            res.forEach(plan => {
              //check if they have smart meter or not here
              this.planningList.push(plan);
            });

            console.log('bloop');
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

            this.meters.splice(0);
            for (let i = 0; i < consumptions.length; i++)
            { this.meters.push(consumptions[i].meter); }

            resolve();
          
          }, error: (err) => { reject(err); }

        });

    });
  }
  
  public postNewConsumtions(meters: MeterAppForm)
  {
    return new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/consumptions/', meters).subscribe({
          next: (res: any) => { resolve(res); console.log('YAY'); },
          error: (err) => { reject(err); console.log('NAY'); }
        });
    });

  }

  


}