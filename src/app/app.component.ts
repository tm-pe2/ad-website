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
  constructor (public service: UserdataService, authService: AuthService) {
    authService.login({ mail: "email", password: "azerty"})
    .then(()=> {
      console.log('Login succeeded')
      authService.logout().then(()=>console.log('logged out')).catch((err)=>console.error(err));
    })
    .catch(()=>console.error('Login failed'));
  }

}
