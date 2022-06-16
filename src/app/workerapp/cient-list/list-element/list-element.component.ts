import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list.component';
import { WorkerAppService } from 'src/app/services/worker-app.service';
import { Planning, PlanningStatus } from 'src/app/interfaces/planning';
import { Address } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  @Input() address!: Address;
  @Input() status!: number;
  @Input() contractID!: number;
  @Input() index!: number;

  constructor(public service: WorkerAppService)
  { }

  ngOnInit(): void
  { this.getUserID(this.contractID, this.index); }

  displayStatus(status: number): string
  { return PlanningStatus[status]; }

  displayAddress(address: Address): string
  { return (address.street + ' ' + address.house_number + ', ' + address.postal_code + ' ' + address.city + ', ' + address.country); }

  getUserID(contractID: number, index: number)
  { this.service.getUserIds(contractID, index); }

  selectCustomer(i : number): void
  {
    this.service.planningItem = this.service.planningList[i];
    this.service.getConsumtions(this.service.userIDs[i]);
    console.log(this.service.planningItem);
  
  }

}
