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
  @Input() planning!: Planning;
  @Input() index!: number;

  constructor(public service: WorkerAppService)
  { }

  ngOnInit(): void
  { }

  displayStatus(): string
  { return PlanningStatus[this.planning.status]; }

  displayName(): string
  { return this.planning.user.first_name + ' ' + this.planning.user.last_name; }

  displayAddress(): string
  { return (this.planning.user.address.street + ' ' + this.planning.user.address.house_number + ', ' + this.planning.user.address.postal_code + ' ' + this.planning.user.address.city_name + ', ' + this.planning.user.address.country); }

  selectCustomer(): void
  {
    this.service.meters = [];
    this.service.planningItem = this.planning;
    this.service.getConsumtions(this.planning.user.id);
    this.service.selectedUser = this.planning.user.id;
    this.service.planningID = this.planning.id;
  
  }

}
