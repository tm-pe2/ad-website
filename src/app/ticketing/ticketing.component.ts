import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



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


export interface TicketUser{
  id: number;
  name: string;
  permissions: number;
}