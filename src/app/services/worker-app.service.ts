import { Injectable } from '@angular/core';
import { Cust } from '../Cust';

@Injectable({
  providedIn: 'root'
})
export class WorkerAppService {
  nCust : number = 10;
  custData : Array<Cust> = [];
  eid : number = 5;

  constructor()
  { 
    for (let i = 0; i < this.nCust; i++) {
      this.custData.push(new Cust(i, this.eid));
    }

  }
}
