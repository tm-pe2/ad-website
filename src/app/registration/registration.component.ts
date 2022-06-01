import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  // Variables
  invalidForm = false;
  matchingPasswords = false;
  types = ["Private", "Company"];
  meters: Meter[] = [
    {
      id: 1,
      meter_type: "Private",
      physical_id: 1,
      value: 0
    },
    {
      id: 2,
      meter_type: "Private",
      physical_id: 2,
      value: 0
    },
    {
      id: 3,
      meter_type: "Private",
      physical_id: 3,
      value: 0
    },
  ]
  // Constructor
  constructor(private http: HttpClient, private userService: UserdataService) { }

  // On init
  ngOnInit(): void { }

  // Functions
  // Public
  onSubmit(form: RegisterForm) 
  {
    this.userService.registerUser(form)
  }

  // Private

}
