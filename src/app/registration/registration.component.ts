import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../interfaces/form';
import { RegistrationData } from '../interfaces/registrationData';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // Variables
  invalidForm = false;
  matchingPasswords = false;
  types = ["Private", "Company"];

  // Constructor
  constructor() { }

  // On init
  ngOnInit(): void { }

  // Functions
  // Public
  onSubmit(form: Form) 
  {
    console.log("Registration: " , form)

  }

  // Private

}
