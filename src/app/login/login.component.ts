import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginData } from './loginData';

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
    console.log(loginForm.value);

    // Make new data object
    const loginData = new LoginData(loginForm.value.loginMail, loginForm.value.loginPassword);

    // Authenticate data object via LoginService
    this.service.authenticate(loginData);
  
  }

}
