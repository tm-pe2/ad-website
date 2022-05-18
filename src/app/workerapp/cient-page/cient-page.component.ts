import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { UtilService } from 'src/app/util.service';
import { Details, WorkerlistItem } from 'src/app/interfaces/worker-interfaces';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})

export class CientPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent;
  // New veriables
  customer: WorkerlistItem;
  selectedCustomer: number;

  // Old variables
  name : string; 
  adr : string;
  mtype : number;




  gMeter : number;
  eMeter : number;
  nDate : any;

  fixedDateE: any = new Date();
  fixedDateG: any = new Date();
  isDone: number;
  meterid : number[];
  lastmeting : number[];

  constructor(public cData: UtilService, private service: WorkerAppService) {
    this.selectedCustomer = service.selectedCustomer;
    this.customer = service.customerList[this.selectedCustomer];
    this.name = this.service.customerList[this.service.selectedCustomer].customerName
    this.adr = this.service.customerList[this.service.selectedCustomer].address
    this.isDone = this.service.customerList[this.service.selectedCustomer].planningStatus
    this.meterid = [];
    this.lastmeting = [];
    this.service.customerList[this.selectedCustomer].meters.forEach(meter => {
      this.lastmeting.push(meter.lastValue);
      this.meterid.push(meter.meter_id);
    });

    this.mtype = cData.custData[cData.selectedCust].meterType;
    this.gMeter = 0;
    this.eMeter = 0;

  }
  
  ngOnInit(): void {
    if(this.service.customerList[this.selectedCustomer].planningStatus == 1) this.isDone = 1;
  }

  // Old functions
  setGas(event:any){
    this.gMeter = event.target.value;
  }

  setElek(event:any){
    this.eMeter = event.target.value;
  }

  setDate(event:any){
    this.nDate = event.target.value
  }

  // This function I updated already
  replan(){
    //TODO - add days to date
    this.service.customerList[this.selectedCustomer].planningStatus = 1;
  }

  submit(){
    let valid = true;
    //0 = gas 1 = elek 2 = both
    if(this.nDate != 'Invalid Date'){
      this.cData.custData[this.cData.selectedCust].nextDate = this.nDate;
      console.log("Next meeting: " + this.cData.custData[this.cData.selectedCust].nextDate);
    }
    else console.log("Automatically plan next check-up")
    this.cData.custData[this.cData.selectedCust].nextDate = this.nDate;
    switch (this.cData.custData[this.cData.selectedCust].meterType) {
      case 0:
        if((this.eMeter >= this.cData.custData[this.cData.selectedCust].lastMetingE) && (this.eMeter != 0)){
          console.log("submitted " + this.eMeter);
          this.cData.custData[this.cData.selectedCust].newMetingE = this.eMeter;
        }
        else{
          console.log("no valid data");
          valid = false;
        } 
        break;
      case 1:
        if((this.gMeter >= this.cData.custData[this.cData.selectedCust].lastMetingG) && (this.gMeter != 0)){
          console.log("submitted " + this.gMeter);
          this.cData.custData[this.cData.selectedCust].newMetingG = this.gMeter;
        }
        else{
          console.log("no valid data");
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
          console.log("no valid data")
          valid = false;
        }
        break;
      default:
        console.log("broken");
        break;
    }
    if(valid){
      this.cData.custData[this.cData.selectedCust].status = 'done';
    };
  }
}

