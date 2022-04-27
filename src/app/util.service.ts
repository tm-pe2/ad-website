import { Injectable } from '@angular/core';
import { Cust } from './Cust';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  nCust : number = 10;
  custData : Array<Cust> = [];
  eid : number = 5;
  selectedCust : number = 0;
  generatedElements : number = 0;

  constructor() {
    for (let i = 0; i < this.nCust; i++) {
      this.custData.push(new Cust(i, this.eid));
    }
    this.custData[0].meterType = 0;
    this.custData[1].meterType = 0;
    this.custData[2].meterType = 0;
    this.custData[3].meterType = 1;
    this.custData[4].meterType = 1;
    this.custData[5].meterType = 1;
    this.custData[6].meterType = 2;
    this.custData[7].meterType = 2;
    this.custData[8].meterType = 2;
  }
}