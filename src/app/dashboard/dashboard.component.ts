import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?: User
  title: string = 'Dashboard'

  constructor(private titleService: Title, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');

    // For dummy testing
    fetch('http://localhost:6060/dashboard/user/' + Number(this.activatedRoute.snapshot.paramMap.getAll("userType")))
      .then((res) => res.json())
      .then((user: User) => {
        console.debug(user);
        this.user = user;
        this.title = `Welcome, ${this.user.name}`
      })
      .catch((err) => {
        this.title = 'Error retrieving user'
        console.error('Error retrieving user', err);
      });
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