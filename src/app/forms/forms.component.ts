import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/address';
import {  CustomerType } from '../interfaces/customer';
import { MeterAppForm, RegisterForm, SuppliersForm } from '../interfaces/form';
import { Meter } from '../interfaces/meter';

@Component({
  selector: 'app-forms[type]',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Input() submitText?: string;
  @Input() title?: string;
  @Input() type!: string;
  @Output() submitted = new EventEmitter<any>();
  @Input() meters?: Meter[];

  mindate?: Date;
  maxEmployeeDate?: Date;
  maxCustomerDate?: Date;
  cities?: City[];
  password?:string;
  confirmPassword?:string;

  registerFields: string[] = ["firstName", "lastName", "email", "phone", "password", "confirmPassword", "city", "registryId", "birthDate"]
  supplierFields: string[] = ["supplierName", "goods", "city", "street"]
  meterAppFields: string[] = [];

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
    birthDate: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    house_number: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),

    supplierName: new FormControl('', [Validators.required]),
    goods: new FormControl('', [Validators.required]),
    
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<City[]>(environment.apiUrl + "/cities").subscribe(data => {
      this.cities = data;
    });

    let curDate = new Date();
    curDate.setHours(24,0,0,0)
    this.mindate = new Date(curDate.getUTCFullYear() - 120, curDate.getUTCMonth() , curDate.getUTCDate() )
    this.maxEmployeeDate = new Date(curDate.getUTCFullYear() - 16, curDate.getUTCMonth(), curDate.getUTCDate())  
    this.maxCustomerDate = new Date(curDate.getUTCFullYear() - 18, curDate.getUTCMonth(), curDate.getUTCDate())

    this.meters?.forEach(meter => {
      this.meterAppFields.push(`meter_${meter.id.toString()}`);
      this.form.addControl(`meter_${meter.id.toString()}`, new FormControl('', [Validators.required]))
      this.form.get(`meter_${meter.id.toString()}`)?.setValue(meter.value);
    });
  }


  submit(): boolean{

    if(this.type == "register"){
      let filled: RegisterForm = {
        first_name: this.form.get('firstName')?.value,
        last_name: this.form.get('lastName')?.value,
        email: this.form.get('email')?.value,
        phone_number: this.form.get('phone')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        city: this.form.get('city')?.value as number,
        national_registry_number: this.form.get('registryId')?.value,
        birth_date: this.form.get('birthDate')?.value,
        street: this.form.get('street')?.value,
        house_number: this.form.get('house_number')?.value,
        type: this.form.get('type')?.value as CustomerType
      };
      for(let field of this.registerFields){
        if(this.form.get(field)?.errors){
          return false;
        }
      }
      this.submitted.emit(filled as RegisterForm);
      
    }
    if(this.type == "suppliers"){
      let filled: SuppliersForm = {
        name: this.form.get('supplierName')?.value,
        goods: this.form.get('goods')?.value,
        city: this.form.get('city')?.value as number,
        street: this.form.get('street')?.value,
      };
      for(let field of this.supplierFields){
        if(this.form.get(field)?.errors){
          return false;
        }
      }
      this.submitted.emit(filled as SuppliersForm);
      
    }
    if(this.type == "meter-app"){
      let filled: MeterAppForm = {
        meters: []
      }
      this.meters?.forEach(meter => {
        filled.meters.push({
          id: meter.id,
          value: this.form.get(`meter_${meter.id.toString()}`)?.value,
          meter_type: meter.meter_type,
          physical_id: meter.physical_id
        })
      });
      for(let field of this.meterAppFields){
        if(this.form.get(field)?.errors){
          return false;
        }
      }
      this.submitted.emit(filled as MeterAppForm);
      
    }

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

  public get CustomerType(){
    return CustomerType
  }

}
