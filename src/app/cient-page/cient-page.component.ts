import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';
import { UtilService } from '../util.service';
import { DatePipe } from '@angular/common';

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

  fixedDateE: any = new Date();
  fixedDateG: any = new Date();
  isDone:boolean;

  constructor(public cData: UtilService, public datepipe: DatePipe) {
    this.name = cData.custData[cData.selectedCust].name;
    this.adr = cData.custData[cData.selectedCust].addr;
    this.mtype = cData.custData[cData.selectedCust].meterType;
    this.gMeter = 0;
    this.eMeter = 0;
    this.nDate = new Date('00/00/0000');
    this.isDone = false;
  }
  
  ngOnInit(): void {
    if(this.cData.custData[this.cData.selectedCust].status == "done") this.isDone = true;
  }

  setGas(event:any){
    this.gMeter = event.target.value;
  }
  setElek(event:any){
    this.eMeter = event.target.value;
  }
  setDate(event:any){
    this.nDate = event.target.value
  }

  replan(){
    //TODO - add days to date
    this.cData.custData[this.cData.selectedCust].status = 'done';
  }

  submit(){
    let valid = true;
    //0 = gas 1 = elek 2 = both
    if(this.nDate != 'Invalid Date'){
      this.cData.custData[this.cData.selectedCust].nextDate = this.nDate;
      console.log("Next meeting: " + this.cData.custData[this.cData.selectedCust].nextDate);
    }
    else console.log("Automatically plan next check-up (no date entered)")
    this.cData.custData[this.cData.selectedCust].nextDate = this.nDate;
    switch (this.cData.custData[this.cData.selectedCust].meterType) {
      case 0:
        if((this.eMeter >= this.cData.custData[this.cData.selectedCust].lastMetingE) && (this.eMeter != 0)){
          console.log("submitted " + this.eMeter);
          this.cData.custData[this.cData.selectedCust].newMetingE = this.eMeter;
        }
        else{
          console.log("Elec entry invalid");
          valid = false;
        } 
        break;
      case 1:
        if((this.gMeter >= this.cData.custData[this.cData.selectedCust].lastMetingG) && (this.gMeter != 0)){
          console.log("submitted " + this.gMeter);
          this.cData.custData[this.cData.selectedCust].newMetingG = this.gMeter;
        }
        else{
          console.log("Gas entry invalid");
          valid = false;
        }
        break;
      case 2:
        if((this.gMeter >= this.cData.custData[this.cData.selectedCust].lastMetingG) && (this.gMeter != 0)){
          console.log("submitted " + "elek: " + this.eMeter + " gas: " + this.gMeter);
          this.cData.custData[this.cData.selectedCust].newMetingG = this.gMeter;
        }
        else if((this.eMeter >= this.cData.custData[this.cData.selectedCust].lastMetingE) && (this.eMeter != 0)){
          console.log("submitted " + "elek: " + this.eMeter + " gas: " + this.gMeter);
          this.cData.custData[this.cData.selectedCust].newMetingE = this.eMeter;
        }
        else{
          console.log("Entries invalid")
          valid = false;
        }
        break;
      default:
        console.log("broken");
        break;
    }
    if(valid){
      this.cData.custData[this.cData.selectedCust].status = 'done';
      console.log("success");
    }
    else console.log("failed");
  }
}

