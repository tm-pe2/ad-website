import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginData } from './loginData';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variables
  invalidForm = false;
  invalidCreds = false;

  // Constructor
  constructor(private service: LoginService) { }

  // On init
  ngOnInit(): void { }

  // Functions
  // Public
  onSubmit(loginForm: NgForm)
  {
    // Check if all required inputs are filled
    if (!loginForm.valid)
    { 
      this.invalidForm = true;
      this.invalidCreds = false;
      return;
    
    }

    // Check if input fields have correct mail/password combo
    this.checkCreds(loginForm);
  
  }

  // Private
  private checkCreds(loginForm: NgForm)
  {
    const loginData = new LoginData(loginForm.value.loginMail, Md5.hashStr(loginForm.value.loginPassword));
    if (!this.service.authenticate(loginData))
    {
      this.invalidForm = false;
      this.invalidCreds = true;
    
    }

  }

}
