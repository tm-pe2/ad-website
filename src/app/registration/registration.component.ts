import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  onSubmit(regForm: NgForm) 
  {
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
    if (!(regForm.value.regPassword == regForm.value.regConfPassword))
    {
      this.invalidForm = false;
      this.matchingPasswords = true;
      return;

    }

    // User stuff
    const regData: RegistrationData =
    {
      user_id: -1,
      role_id: 1,
      first_name: regForm.value.regFname,
      last_name: regForm.value.regLname,
      birth_date: regForm.value.regBdate,
      email: regForm.value.regMain,
      phone_number: regForm.value.regPhone,
      password: regForm.value.regPassword,
      national_registry_number: regForm.value.regNatianalNr
      
    }

    // Print out the data to the console for demo
    // Delete this later when you can send it to the API
    // this.service.addCustomer(regData);

  }

  // Private

}
