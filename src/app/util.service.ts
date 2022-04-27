import { Injectable } from '@angular/core';
import { Cust } from './Cust';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  nCust : number = 10;
  custData : Array<Cust> = [];
  eid : number = 5;
  selectedCust : number = 3;

  constructor() {
    for (let i = 0; i < this.nCust; i++) {
      this.custData.push(new Cust(i, this.eid));
      console.log("Added: " + this.custData[i].name);
    }
  }
}


