import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css'],
})
export class TicketingComponent implements OnInit {
  //dummy data
  constructor() {
  }

  tickets?: FieldData[];
  filter: FilterData = {name: ""};
  errorField: FieldData= {name: "Something went wrong", issue: "We could not get the correct field!", description: "We are sorry, but something went wrong. Please try again later.", status: "Error"};




  ngOnInit(): void {
  fetch('http://localhost:6060/tickets')
    .then((response) => response.json())
    .then((tickets) => {
      console.table(tickets.tickets);
      this.tickets = tickets.tickets;
  });
  }
}

@Component({
  selector: 'manage-tickets',
  templateUrl: './manage-tickets.component.html',
})

export class ManageTickets {


  @ViewChild('modal', { read: ViewContainerRef }) entry?: ViewContainerRef;
  ecomponent?: ComponentRef<EditModalComponent>;
  dcomponent?: ComponentRef<DeleteModalComponent>;
  subscribtion: any;
  constructor() { }
  @Input() rows?: Array<FieldData>;
  @Input() header: Boolean = false;
  @Input() parentPage?: TicketingComponent;




  ngOnDestroy(): void {
    this.ecomponent?.destroy();
    this.dcomponent?.destroy();
  }
  createEditModal(id: number): void {
    this.entry?.clear();
    this.ecomponent = this.entry?.createComponent(EditModalComponent);
    if(!this.parentPage?.tickets) return;
    this.ecomponent!.instance.data = this.parentPage!.tickets.find(x => x.id === id) || this.parentPage!.errorField;
    this.ecomponent!.instance.parent = this;
  }
  destroyEditModal() {
    this.ecomponent?.destroy();
  }

  createDeleteModal(id: number): void {
    this.entry?.clear();
    this.dcomponent = this.entry?.createComponent(DeleteModalComponent);
    if(!this.parentPage?.tickets) return;
    this.dcomponent!.instance.data = this.parentPage!.tickets.find(x => x.id === id) || this.parentPage!.errorField;
    this.dcomponent!.instance.parent = this;

  }
  destroyDeleteModal() {
    this.dcomponent?.destroy();
  }

  filterTable(username: string) {
    this.parentPage!.filter!.name = username.toLowerCase();
    return false;
  }
}

export interface FieldData {
  name: String;
  issue: String;
  description: String;
  id?: number;
  status?: String;
}

export interface FilterData {
  name?: string;
}