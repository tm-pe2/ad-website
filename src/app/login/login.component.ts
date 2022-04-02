import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
// on my own device it is supposed to be LoginData
import { LoginData } from '../interfaces/loginData';

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
  constructor(private userData: UserdataService) { }

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
    const loginData: LoginData = { mail: loginForm.value.loginMail, password: loginForm.value.loginPassword }
    if (!this.userData.authenticate(loginData))
    {
      this.invalidForm = false;
      this.invalidCreds = true;
    
    }

  }

}
