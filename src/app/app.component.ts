import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
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
  constructor (public service: LoginService, authService: AuthService) {
    authService.login('example', 'nohash')
    .then(()=>console.log('Login succeeded'))
    .catch(()=>console.error('Login failed'));
  }

}
