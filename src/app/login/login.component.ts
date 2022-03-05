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

  constructor(private service: LoginService) { }

  ngOnInit(): void
  {
    

  }

  onSubmit(loginForm: NgForm)
  {
    // Displays data in console
    // Remove from final product
    console.log("Mail: " + loginForm.value.loginMail);
    console.log("Pass: " + Md5.hashStr(loginForm.value.loginPassword));

    // Make new data object, gets data from the form in login.component.html
    const loginData = new LoginData(loginForm.value.loginMail, Md5.hashStr(loginForm.value.loginPassword));

    // Authenticate data object via LoginService
    this.service.authenticate(loginData);
  
  }

}
