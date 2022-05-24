import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/address';
import { Form } from '../interfaces/form';

@Component({
  selector: 'app-forms[type]',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input() submitText?: string;
  @Input() title?: string;
  @Input() type!: string;
  @Output() submitted = new EventEmitter<Form>();

  mindate?: Date;
  maxDate?: Date;
  cities?: City[];
  password?:string;
  confirmPassword?:string;

  registerFields: string[] = ["firstName", "lastName", "email", "phone", "password", "confirmPassword", "city", "registryId", "birthDate"]

  form = new FormGroup({
    firstName:  new FormControl('', [Validators.required]),
    lastName:  new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, 
      Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.validateConfirmPassword()]),
    city: new FormControl('', [Validators.required]),
    registryId: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    birthDate: new FormControl('', [Validators.required])
    
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<City[]>(environment.apiUrl + "/cities").subscribe(data => {
      this.cities = data;
    });
    let curDate = new Date();
    curDate.setHours(24,0,0,0)
    this.mindate = new Date(curDate.getUTCFullYear() - 120, curDate.getUTCMonth() , curDate.getUTCDate() )
    if(this.type == "register"){
      this.maxDate = new Date(curDate.getUTCFullYear() - 16, curDate.getUTCMonth(), curDate.getUTCDate())  
    }
  }


  submit(): boolean{
    let filled: Form = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      password: this.form.get('password')?.value,
      confirmPassword: this.form.get('confirmPassword')?.value,
      city: this.form.get('city')?.value,
      registryId: this.form.get('registryId')?.value,
      birthDate: this.form.get('birthDate')?.value
    };
    if(this.type== "register"){
      for(let field of this.registerFields){
        if(this.form.get(field)?.errors){
          return false;
        }
      }
      
    }
    this.submitted.emit(filled);
    return true;
    

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
  onCitySelected(city : string){
    this.form.get('zip')?.setValue(this.cities?.find(c => c.name === city)?.zipcode);
  }

}
