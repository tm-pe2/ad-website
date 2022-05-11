import { ChangeDetectorRef, Component, ComponentRef, Input, NgZone, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css'],
})
export class TicketingComponent implements OnInit {
    
  user?: TicketUser;

  //dummy data
  constructor(private activatedRoute:ActivatedRoute) {
  }



  ngOnInit(): void {
    fetch('http://localhost:6060/tickets/user/' + Number(this.activatedRoute.snapshot.paramMap.getAll("userType")))
    .then((res) => res.json())
    .then((user: TicketUser) => {
      this.user = user;
      console.log(this.user)
    })


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
export interface TicketUser{
  id: number;
  name: string;
  permissions: number;
}