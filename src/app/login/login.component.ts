import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
// on my own device it is supposed to be LoginData
import { LoginData } from '../interfaces/loginData';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  invalidForm = false;
  invalidCreds = false;

  constructor(private titleService: Title, private userData: UserdataService, private authService: AuthService, private router: Router) {
    this.titleService.setTitle('Login');
  }

  ngOnInit(): void { }

  onSubmit(loginForm: NgForm)
  {
    if (!loginForm.valid)
    { 
      this.invalidForm = true;
      this.invalidCreds = false;
      return;
    
    }
    this.checkCreds(loginForm);
  }

  private checkCreds(loginForm: NgForm)
  {
    const loginData: LoginData = { mail: loginForm.value.loginMail, password: loginForm.value.loginPassword }

    this.authService.login(loginData)
    .then(()=>{
      this.router.navigate(['']);
    })
    .catch((err) => {
      console.error(err);
      if (err.status == 401) {
        this.invalidForm = false;
        this.invalidCreds = true;
      }
      else {
        // TODO: Only say that its invalid if it actually is, the API could also simply be down.
      }
    })
  }

}
