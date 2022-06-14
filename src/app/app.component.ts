import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ad-frontend';

  // For login test
  // Adds login service so you can access the authenticated variable
  constructor (public service: UserdataService, authService: AuthService, private http: HttpClient) {
    console.log(authService.getUserRoleId())
  }


}
