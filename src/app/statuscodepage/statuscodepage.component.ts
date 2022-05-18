import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-statuscodepage',
  templateUrl: './statuscodepage.component.html',
  styleUrls: ['./statuscodepage.component.css']
})
export class StatuscodepageComponent implements OnInit {
  statusCode: string = '';

  constructor(private titleService: Title, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.statusCode = this.activatedRoute.snapshot.paramMap.getAll("statusCode")[0];
    this.titleService.setTitle(`Status Code: ${this.statusCode}`);
  }
}
