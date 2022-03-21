import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'manage-tickets',
  templateUrl: './manage-tickets.component.html',
})

export class ManageTickets implements OnInit{


  @ViewChild('modal', { read: ViewContainerRef }) entry?: ViewContainerRef;
  ecomponent?: ComponentRef<EditModalComponent>;
  dcomponent?: ComponentRef<DeleteModalComponent>;

  subscribtion: any;
  constructor() { }  
  tickets?: FieldData[];
  filter: FilterData = {name: ""};
  errorField: FieldData= {name: "Something went wrong", issue: "We could not get the correct field!", description: "We are sorry, but something went wrong. Please try again later.", status: "Error"};


  ngOnInit(): void {
    fetch('http://localhost:6060/tickets')
    .then((response) => response.json())
    .then((tickets) => {
      console.table(tickets);
      this.tickets = tickets;
  }); 

  }

  ngOnDestroy(): void {
    this.ecomponent?.destroy();
    this.dcomponent?.destroy();
  }
  createEditModal(id: number): void {
    this.entry?.clear();
    this.ecomponent = this.entry?.createComponent(EditModalComponent);
    if(!this.tickets) return;
    this.ecomponent!.instance.data = this.tickets.find(x => x.id === id) || this.errorField;
    this.ecomponent!.instance.parent = this;
  }
  destroyEditModal() {
    this.ecomponent?.destroy();
  }

  createDeleteModal(id: number): void {
    this.entry?.clear();
    this.dcomponent = this.entry?.createComponent(DeleteModalComponent);
    if(!this.tickets) return;
    this.dcomponent!.instance.data = this.tickets.find(x => x.id === id) || this.errorField;
    this.dcomponent!.instance.parent = this;

  }
  destroyDeleteModal() {
    this.dcomponent?.destroy();
  }

  filterTable(username: string) {
    this.filter.name = username.toLowerCase();
    return false;
  }
}

export interface FilterData {
  name?: string;
}

export interface FieldData {
  name: String;
  issue: String;
  description: String;
  id?: number;
  status?: String;
}