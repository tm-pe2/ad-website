import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list.component';
import { WorkerlistItem } from 'src/app/interfaces/worker-interfaces';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  custArr: Array<WorkerlistItem> = [];
  constructor(private service: WorkerAppService) { 
    this.custArr = service.customerList;
  }
  ngOnInit(): void {

  }

  selectCustomer(i : number): void{
    this.service.selectedCustomer = i;
    if(this.service.customerList[i].planningStatus != 2)this.service.customerList[i].planningStatus = 1
    for (let j = 0; j < this.service.customerList.length; j++) {
      if(this.service.customerList[j] != this.service.customerList[i]){
        if(this.service.customerList[j].planningStatus != 2) this.service.customerList[j].planningStatus = 0;
      }
    }
  }

}
