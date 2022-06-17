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
  submitted: boolean = false;
  posted: boolean = false;
  error: boolean = false;

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
                  if(plan.id == this.planningList[i].id /*&& plan.date == this.planningList[i].date*/){
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
          error: (err) => { reject(err); console.log('NAY'); this.submitted = false; this.error = false; }
        });
    });

  }

  public patchPlanning()
  {
    return new Promise<void>((resolve, reject) => 
    {
      this.http.patch(environment.apiUrl + '/plannings/' + this.planningID, {status: PlanningStatus.DONE}, {responseType: 'text'}).subscribe(
        {
          next: (res: any) =>
            { 
              for (let i = 0; i < this.planningList.length; i++)
              {
                if (this.planningList[i].id == this.planningID)
                { this.planningList.splice(i, 1); }

              }
              console.log('patch');
              
              this.submitted = false;
              this.posted = true;

              resolve(res);
            
            },
          error: (err) => { reject(err); this.submitted = false; this.error = false; }
          
        });
    });

  }

}