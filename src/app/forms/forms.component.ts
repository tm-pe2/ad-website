import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/address';
import { Form } from '../interfaces/form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input() submitText?: string;
  @Input() title?: string;
  @Input() type?: string;
  @Output() submitted = new EventEmitter<Form>();

  cities?: City[];
  password?:string;
  confirmPassword?:string;
  form = new FormGroup({
    firstName:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, 
      Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.validateConfirmPassword()]),
    city: new FormControl('', [Validators.required]),
    
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<City[]>(environment.apiUrl + "/cities").subscribe(data => {
      this.cities = data;
    });
  }


  submit():void{
    let filled: Form = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      password: this.form.get('password')?.value,
      confirmPassword: this.form.get('confirmPassword')?.value,
      city: this.form.get('city')?.value,
    };
    this.submitted.emit(filled);
    

  }

  validateConfirmPassword(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.root.get('password');
      const confirmPassword = control.root.get('confirmPassword');
      if(password && confirmPassword){
        return password.value === confirmPassword.value ? null : { passwordMismatch : true};
      }
      return null;
    }
  }

}
