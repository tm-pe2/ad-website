import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './loginData';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  // Mockuser 
  private readonly mockUser = new LoginData("johndoe@mail.com", "test123");

  // Variables
  authenticated = false;

  // Constructor
  constructor(private router: Router) {}

  // Functions
  // Public
  authenticate(loginData: LoginData): boolean
  {
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

  // Private
  private checkCredentials(loginData: LoginData): boolean { return this.checkMail(loginData.mail) && this.checkPassword(loginData.password); }

  // Check mail and password using get functions in loginData.ts
  private checkMail(mail: string): boolean { return mail === this.mockUser.mail; }

  private checkPassword(password: string): boolean { return password === this.mockUser.password; }

}
