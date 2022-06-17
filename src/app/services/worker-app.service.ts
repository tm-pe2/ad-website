import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planning, PlanningStatus } from '../interfaces/planning';
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
  planningID: number = 0;

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
            this.planningList.splice(0);
            res.forEach(plan => {
              let unique = true;
              if (plan.status == 1){ 
                //check if this entry is already in the list or not
                for (let i = 0; i < this.planningList.length; i++) {
                  if(plan.user.id == this.planningList[i].user.id){
                    unique = false;
                  }
                }
                
                if(unique) 
                {
                  console.log(plan); 
                  this.planningList.push(plan); 

                } 
                
              }
              
            });

            console.log(this.planningList);

            resolve();
          },
          error: (err) =>
          { reject(err); }

        });

    });
  
  }

  // Public functions  
  public postNewConsumtions(meters: MeterAppForm): Promise<void>
  {
    return new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/consumptions/', meters, {responseType: 'text'}).subscribe({
          next: (res: any) =>
            { 
              console.log('post');
              this.patchPlanning();
              resolve(res);
              
            },
          error: (err) => { reject(err); console.log('NAY'); }
        });
    });

  }

  public patchPlanning()
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.patch(environment.apiUrl + '/plannings/' + this.planningID, {status: PlanningStatus.DONE}, {responseType: 'text'}).subscribe(
        {
          next: (res: any) => { console.log('patch'); resolve(res); },
          error: (err) => { reject(err); }
          
        });
    });

  }

}