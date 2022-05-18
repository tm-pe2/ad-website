import {  Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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