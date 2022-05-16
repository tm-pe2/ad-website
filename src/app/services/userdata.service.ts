// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

// Interfaces
import { User } from '../interfaces/User';
import { LoginData } from '../interfaces/loginData';
import { RegistrationData } from '../interfaces/registrationData';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserdataService
{
  user: User =
  { 
    id: 0,
    name: "John Doe",
    mail: "johndoe@mail.com", 
    password: "test123",
    phone: "0123/45 67 89",
    type: "private",
    city: "Mechelen",
    zipcode: 2800,
    street: "Koningin Astridlaan",
    house: "10"
  }

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
    this.loadUser();
  }

  loadUser(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.authService.isAuthenticated()) {
        this.http.get<User>(environment.apiUrl + '/user/' + this.authService.getUserId())
        .subscribe({
          next: (res: User) => {
            this.user = res;
            resolve();
          },
          error: (err) => {
            reject(err);
          }
        })
      }
      else { reject(); }
    });
  }

  registerUser(regDate: RegistrationData): Promise<void> 
  {
    const promise = new Promise<void>((resolve, reject) =>
    {
      this.http.post(environment.apiUrl + '/users', regDate)
      .subscribe(
        {
          next: (res: any) => 
          {
            // What needs to go here?
            // I just put a resolve here atm but idk if I need this
            resolve(res);

          },
          error: (err) =>
          {
            reject(err);

          }

        });

    });

    return promise;

  }

}