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
  @Input() index!: number;

  planningList: Array<Planning> = [];

  constructor(public service: WorkerAppService)
  { }

  ngOnInit(): void
  { console.log("List-Element comp. OnInit"); }

  displayStatus(status: number): string
  { return PlanningStatus[status]; }

  displayAddress(address: Address): string
  { console.log(address); return (address.street + ' ' + address.house_number + ', ' + address.postal_code + ' ' + address.city + ', ' + address.country); }

  selectCustomer(i : number): void
  { this.service.selectedUser = i; }

}
