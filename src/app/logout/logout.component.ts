import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private titleService: Title, private auth: AuthService) {
    this.titleService.setTitle('Logging out...');
    this.auth.logout();
  }

  ngOnInit(): void {
  }

}
