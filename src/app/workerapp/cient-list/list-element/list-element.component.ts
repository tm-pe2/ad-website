import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list.component';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  constructor(private service: WorkerAppService) { 

  }
  ngOnInit(): void {

  }

  selectCustomer(i : number): void{
    this.service.selectedUser = i;
    /*
    if(this.service.planningList[i].status != )this.service.customerList[i].planningStatus = 1
    for (let j = 0; j < this.service.customerList.length; j++) {
      if(this.service.customerList[j] != this.service.customerList[i]){
        if(this.service.customerList[j].planningStatus != 2) this.service.customerList[j].planningStatus = 0;
      }
    }
    */
  }

}
