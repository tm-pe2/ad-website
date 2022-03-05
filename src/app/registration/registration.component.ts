import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  types;

  constructor(service: RegistrationService)
  {
    this.types = service.types;

  }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) { console.log(signUpForm.value) }

}
