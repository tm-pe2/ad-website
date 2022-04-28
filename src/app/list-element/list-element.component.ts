import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import { UtilService } from '../util.service';
import { Cust } from '../Cust';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  custArr : Array<Cust> = [];
  constructor(private cData: UtilService) { 
    this.custArr = cData.custData;
  }
  ngOnInit(): void {

  }
  selectCustomer(i : number): void{
    this.cData.selectedCust = i;
    if(this.cData.custData[i].status != "done")this.cData.custData[i].status = "in progress"
    for (let i = 0; i < this.cData.custData.length; i++) {
      if(this.cData.custData[i] != this.cData.custData[this.cData.selectedCust]){
        if(this.cData.custData[i].status != "done") this.cData.custData[i].status = "not done";
      }
    }
  }

}
