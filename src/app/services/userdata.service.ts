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
  // Mockusers
  // Will use API to get user info later on
  private readonly user: User =
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

  // API connection
  readonly ROOT_URL = 'http://localhost:6060';
  customers!: Observable<any>;

  // Variables
  authenticated = false;

  // Constructor
  constructor(private router: Router, private http: HttpClient) { }

  setAuthenticated(bool: boolean) {this.authenticated = bool}
  getAuthenticated() {return this.authenticated}

  getUser() {return this.user}
  setUser() {
    // Set user data after login
  }

  // Check if mail and password are correct using private functions for each
  private checkCredentials(loginData: LoginData): boolean
  { return this.checkMail(loginData.mail) && this.checkPassword(loginData.password); }

  // Check mail and password from the mockuser
  private checkMail(mail: string): boolean
  { return mail === this.user.mail; }

  private checkPassword(password: string): boolean
  { return password === this.user.password; }

}