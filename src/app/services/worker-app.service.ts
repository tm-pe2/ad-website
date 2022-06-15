
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planning } from '../models/planning';
import { Consumption, ConsumptionPost } from '../interfaces/consumtion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


// Class
export class WorkerAppService {
  // Variables
  eid : number = 5;
  selectedUser : number = 0; //user selected in app, index for planningList
  planningList: Array<Planning> = [];

  // Constructor 
  constructor(private http: HttpClient)
  {
    this.getPlanning();

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
