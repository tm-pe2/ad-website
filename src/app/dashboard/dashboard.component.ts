import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dummyUsers: User[] = [
    {
      id: 0,
      name: "Bob Johnson",
      email: "example@example.example",
      phone: "+01 23/45/67/89",
      address: "59 Golden Leaf Road",
      birthday: "19/05/1965",
      pfpsrc: "../../assets/img/dashboard/human.webp",
      type: "Employee"
    },
    {
      id: 1,
      name: "Jeef Cumbersome",
      email: "example@example.example",
      phone: "+01 23/45/67/89",
      address: "3155 Carioca Hill",
      birthday: "23/06/1980",
      pfpsrc: "../../assets/img/dashboard/tech.webp",
      type: "Technician"
    },
    {
      id: 2,
      name: "Abigail Janssens",
      email: "example@example.example",
      phone: "+01 23/45/67/89",
      address: "0287 Mayer Hill",
      birthday: "23/03/1995",
      pfpsrc: "../../assets/img/dashboard/woman.jpg",
      type: "User"
    },
  ]
  user?: User
  title: string = 'Dashboard'

  constructor(private titleService: Title, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard')
    // For dummy testing
    this.user = this.dummyUsers[Number(this.activatedRoute.snapshot.paramMap.getAll("userType"))]
    this.title = 'Dashboard ' + this.user.name
  }
}

export interface User {
  id: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  birthday: String,
  pfpsrc: String,
  type: String
}