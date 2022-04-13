import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationData } from '../interfaces/registrationData';

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
  onSubmit(regForm: NgForm) 
  {
    // use registerdata 
    const regData: RegistrationData =
    {
      name: regForm.value.regName,
      mail: regForm.value.regMail,
      password: regForm.value.regPassword,
      confirmPassword: regForm.value.regConfPassword,
      phone: regForm.value.regPhone,
      type: regForm.value.regType,
      city: regForm.value.regCity,
      zipcode: regForm.value.regPostalcode,
      street: regForm.value.regStreet,
      house: regForm.value.regNumber

    }

    // Check if all the fields are filled in
    // Set invalidForm to true so the error message displays
    // Set matchingPasswords to false so the error message doesn't display
    if (!regForm.valid)
    {
      this.invalidForm = true;
      this.matchingPasswords = false;
      return;
    
    }

    // Check if the passwords match
    // Set matchingPasswords to true so the error message displays
    // Set invalidForm to false so the error message doesn't display
    if (!(regData.password == regData.confirmPassword))
    {
      this.invalidForm = false;
      this.matchingPasswords = true;
      return;

    }

    // Print out the data to the console for demo
    // Delete this later when you can send it to the API
    console.log(regData);

  }

  // Private

}
