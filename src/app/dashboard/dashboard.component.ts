import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = 'Dashboard'

  constructor(private titleService: Title, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard')
    this.title = 'Dashboard ' + this.activatedRoute.snapshot.paramMap.getAll("userType").join(' ')
  }
}
