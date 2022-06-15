
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planning } from '../models/planning';
import { Consumption, ConsumptionPost } from '../interfaces/consumption';
import { Observable } from 'rxjs';
import { User } from '../interfaces/customer';
import { Contract } from '../interfaces/contract';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  planningList: Array<Planning> = [];

  // Constructor 
  constructor(private http: HttpClient)
  {
    this.getPlanning();

    for (let i = 0; i < this.planningList.length; i++)
    { this.getUserIds(this.planningList[i].contract_id, i); }

  }

  // Private functions
  // get from models folder
  private getPlanning(): Promise<void> { 
    return new Promise<void>((resolve, reject) => {
      this.http.get<Planning>(environment.apiUrl + '/plannings').subscribe(
        {
          next: (res: Planning) =>
          {
            this.planningList.push(res);
            resolve();

          },
          error: (err) =>
          { reject(err); }

        });

    });
  
  }

  private getUserIds(contractID: number, i: number): Promise<void> 
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.get<Contract>(environment.apiUrl + '/contracts').subscribe(
        {
          next: (res: Contract) =>
          { 
            if (res.id == contractID) { this.planningList[i].user_id = res.user_id; }
            resolve();
          
          }, error: (err) => { reject(err); }

        });

    });

  }

  // Public functions
  // Get the consumtions for e certain user
  // Call this in the component itself
  // get from consumtion interface
  public getConsumtions(userID: number): Observable<Consumption> { 
  return this.http.get<Consumption>(environment.apiUrl + '/consumptions/' + userID); }
  
  public postNewConsumtions(userID: number, newConsumtion: ConsumptionPost) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/consumptions/' + userID, newConsumtion).subscribe({
          next: (res: any) => { resolve(res); },
          error: (err) => { reject(err); }
        });
    });

  }

  


}
