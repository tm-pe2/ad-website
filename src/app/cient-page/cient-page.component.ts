import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})
export class CientPageComponent implements OnInit, AfterContentInit {
  @Input() parent !: WorkerappComponent;
  public name : string | undefined = this.parent?.custData[this.parent.selectedCust].getName();
  public adr : string | undefined = this.parent?.custData[this.parent.selectedCust].getAdr();
  public mtype : number | undefined = this.parent?.custData[this.parent.selectedCust].getMeterType();
  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    // 0 = elek // 1 = gas // 2 = both 
    if(this.parent?.custData[this.parent.selectedCust].meterType == 0){
      document.getElementById('gasfield')!.style.display = 'none';
      document.getElementById('elecfield')!.style.display = 'block';
    }
    else if(this.parent?.custData[this.parent.selectedCust].getMeterType() == 1){
      document.getElementById('gasfield')!.style.display = 'block';
      document.getElementById('elecfield')!.style.display = 'none';
    }
    else if (this.parent?.custData[this.parent.selectedCust].getMeterType() == 2){
      document.getElementById('gasfield')!.style.display = 'block';
      document.getElementById('elecfield')!.style.display = 'block';
    }
    else{
      document.getElementById('gasfield')!.style.display = 'none';
      document.getElementById('elecfield')!.style.display = 'none';
    }
  }

}
