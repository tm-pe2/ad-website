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
    // authService.login('example', 'nohash')
    // .then(()=> {
    //   console.log('Login succeeded');
    //   // authService.logout().then(()=>console.log('logged out')).catch((err)=>console.error(err));
    // })
    // .catch(()=>console.error('Login failed'));
    this.http.get('http://localhost:6060/test').subscribe(
      {
        next: () => {
          console.log('success');
        },
        error: (err) => {
          console.error(err)
        }
      }          
    )
  }


}
