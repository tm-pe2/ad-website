import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/form';
import { Meter } from '../interfaces/meter';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // Constructor
  constructor(private http: HttpClient, private userService: UserdataService, private router:Router ) { }

  // On init
  ngOnInit(): void { }

  // Functions
  // Public
  onSubmit(form: RegisterForm) 
  {
    this.userService.registerUser(form).then(() => {
      //redirect to root route
      this.router.navigate(['/']);

    })
    .catch(error => {
      console.log(error);
    })
  }

  // Private

}
