// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { User } from '../interfaces/User';
import { LoginData } from '../interfaces/loginData';
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
    id: 28,
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

  // Variables
  authenticated = false;

  // Constructor
  constructor(private router: Router) { }

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