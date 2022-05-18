import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { UtilService } from 'src/app/util.service';
import { Cust } from 'src/app/Cust';

import { WorkerAppService } from 'src/app/services/worker-app.service';
import { Planning, WorkerlistItem } from 'src/app/interfaces/worker-interfaces';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  custArr : Array<WorkerlistItem> = [];
  /*
  constructor(private cData: UtilService) {
    this.custArr = cData.custData;
  }
  */
  constructor(private cData: UtilService, private service: WorkerAppService) 
  { }
  ngOnInit(): void
  {
    this.custArr = this.service.customerList;
  }
}
