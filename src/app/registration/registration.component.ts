import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { registrationData } from './registrationData';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // Variables
  invalidForm = false;
  matchingPasswords = false;
  types;

  // Constructor
  constructor(service: RegistrationService) { this.types = service.types; }

  // On init
  ngOnInit(): void { }

  // Functions
  // Public
  onSubmit(regForm: NgForm) 
  {
    // hash passwords
    Md5.hashStr(regForm.value.regPassword);
    Md5.hashStr(regForm.value.regConfPassword);

    if (!regForm.valid)
    {
      this.invalidForm = true;
      this.matchingPasswords = false;
      return;
    
    }

    if (!(regForm.value.regPassword == regForm.value.regConfPassword))
    {
      this.invalidForm = false;
      this.matchingPasswords = true;
      return;

    }

    console.log(regForm.value);

  }

  // Private

}
