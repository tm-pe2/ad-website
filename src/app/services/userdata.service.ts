// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { User } from '../interfaces/User';
import { LoginData } from '../interfaces/LoginData';

@Injectable({
  providedIn: 'root'
})
export class UserdataService
{
  // Mockusers
  // Will use API to get user info later on
  private readonly mockUser: User =
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

  // Variables
  authenticated = false;

  // Constructor
  constructor(private router: Router) { }

  // Functions
  // Login functions
  authenticate(loginData: LoginData): boolean
  {
    // If the user has the correct login data he/she will be send to the home page
    // authenticed variable is set to true so logged in user can access new parts of site
    // (check app.component.ts & app.component.html for inmplementation)
    if (this.checkCredentials(loginData))
    {
      this.authenticated = true;
      this.router.navigate(['']);
      return this.authenticated;

    } else
    {
      this.authenticated = false;
      return this.authenticated;

    }

  }

  // Check if mail and password are correct using private functions for each
  private checkCredentials(loginData: LoginData): boolean
  { return this.checkMail(loginData.mail) && this.checkPassword(loginData.password); }

  // Check mail and password from the mockuser
  private checkMail(mail: string): boolean
  { return mail === this.mockUser.mail; }

  private checkPassword(password: string): boolean
  { return password === this.mockUser.password; }

  // Registration functions
  // Nothing yet...

}