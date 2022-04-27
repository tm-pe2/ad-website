import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';
import { UtilService } from '../util.service';
import { Cust } from '../Cust';
import { throws } from 'assert';
import { timeStamp } from 'console';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})

export class CientPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent;

  name : string; 
  adr : string;
  mtype : number;

  gMeter : number;
  eMeter : number;
  nDate : any;

  constructor(public cData: UtilService) {
    this.name = cData.custData[cData.selectedCust].name;
    this.adr = cData.custData[cData.selectedCust].addr;
    this.mtype = cData.custData[cData.selectedCust].meterType;
    this.gMeter = 0;
    this.eMeter = 0;
    this.nDate = new Date('00/00/0000');
  }
  
  ngOnInit(): void {

  }

  setGas(event:any){
    console.log("Set gas to: " + event.target.value);
    this.gMeter = event.target.value;
  }
  setElek(event:any){
    console.log("Set elek to: " + event.target.value)
    this.eMeter = event.target.value;
  }
  setDate(event:any){
    console.log("Date set to:" + event.target.value);
    this.nDate = event.target.value
  }

  submit(){
    let valid = false;
    //0 = gas 1 = elek 2 = both
    switch (this.cData.custData[this.cData.selectedCust].meterType) {
      case 0:
        if((this.eMeter >= this.cData.custData[this.cData.selectedCust].lastMetingE) && (this.eMeter != 0)){
          console.log("submitted " + this.eMeter);
          //this.cData.custData[this.cData.selectedCust].newMetingE = this.eMeter;
        }
        else console.log("invalid");
        break;
      case 1:
        if((this.gMeter >= this.cData.custData[this.cData.selectedCust].lastMetingG) && (this.gMeter != 0)){
          console.log("submitted " + this.gMeter);
          //this.cData.custData[this.cData.selectedCust].newMetingG = this.gMeter;
        }
        else console.log("not nice");
        break;
      case 2:
        break;
      default:
        break;
    }
  }
}

