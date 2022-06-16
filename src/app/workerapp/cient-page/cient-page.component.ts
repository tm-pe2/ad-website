import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})

export class CientPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent;


  constructor(public service: WorkerAppService) {
    /*
    this.service.customerList[this.selectedCustomer].meters.forEach(meter => {
      this.lastmeting.push(meter.lastValue);
      this.meterid.push(meter.meter_id);
      this.newvalues.push(0);
    });
    
    this.mtype = cData.custData[cData.selectedCust].meterType;
    this.gMeter = 0;
    this.eMeter = 0;
    */
  }
  
  ngOnInit(): void {
    console.log("test");
    console.log(this.service.consumption);
  }

  displayAddress(): string
  { return (this.service.planningItem?.address.street + ' ' + this.service.planningItem?.address.house_number + ', ' + this.service.planningItem?.address.postal_code + ' ' + this.service.planningItem?.address.city + ', ' + this.service.planningItem?.address.country); }

  displayName(): string
  { return (this.service.consumption?.customer.first_name + ' ' + this.service.consumption?.customer.last_name); }

  // This function I updated already
  /*
  replan(){
    //TODO - add days to date
    this.service.customerList[this.selectedCustomer].planningStatus = 1;
  }
  */

  submit(): void{
    /*
    for (let i = 0; i < this.newvalues.length; i++) {
      this.lastmeting[i] = this.newvalues[i];
    }
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

    */
  }
}

