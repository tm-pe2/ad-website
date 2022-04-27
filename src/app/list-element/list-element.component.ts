import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import { UtilService } from '../util.service';
import { Cust } from '../Cust';

import { WorkerAppService } from '../services/worker-app.service';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  @Input() index ? : number;
  custArr : Array<Cust> = [];
  constructor(private cData: UtilService) { 
    this.custArr = cData.custData;
  }

  ngOnInit(): void {

  }

  selectCustomer(i : number): void{
    this.cData.selectedCust = i;
  }

}
