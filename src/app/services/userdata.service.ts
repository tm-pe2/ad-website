// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

// Interfaces
import { User, UserRole } from '../interfaces/User';
import { LoginData } from '../interfaces/loginData';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { RegisterForm } from '../interfaces/form';


@Injectable({
  providedIn: 'root'
})

export class UserdataService
{
  user: User =
  { 
    user_id: 0,
    role_id: UserRole.CUSTOMER,
    first_name: '',
    last_name: '',
    birth_date: new Date(),
    address_id: 0,
    email: '',
    phone_number: '',
    password: 'WhyAreWeSendingTheHashedPasswords?',
    national_registry_number: ''
  }

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
    this.loadUser().then(() => {
      console.log(this.user)
    })
    .catch((err) => console.log(err))
  }

  loadUser(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.authService.isAuthenticated()) {
        this.http.get<User>(environment.apiUrl + '/users/self')
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

  registerUser(registerData: RegisterForm): Promise<void> 
  {
    const promise = new Promise<void>((resolve, reject) =>
    {
      this.http.post(environment.apiUrl + '/customers', registerData)
      .subscribe(
        {
          next: (res: any) => 
          {
            resolve();

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