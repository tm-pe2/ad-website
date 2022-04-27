import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';
import { Cust } from '../Cust';
import { WorkerAppService } from '../services/worker-app.service';

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

  constructor(private cData: WorkerAppService) {
    this.name = cData.custData[cData.selectedCust].name;
    this.adr = cData.custData[cData.selectedCust].addr;
    this.mtype = cData.custData[cData.selectedCust].meterType;
  }

  ngOnInit(): void {

  }

}

