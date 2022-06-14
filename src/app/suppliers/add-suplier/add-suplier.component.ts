import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
//import { SupplierData } from 'src/app/interfaces/suppliersData';
import { Address } from '../../interfaces/address';
import { HttpClient } from '@angular/common/http';
import { SuppliersForm } from '../../interfaces/form';
import { City } from '../../interfaces/address';




@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {


  @Input() submitText?: string;
  @Input() title?: string;
  @Input() type!: string;
  @Output() submitted = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();
  @Input() cancel?: Boolean;

  cities?: City[];

  supplierFields: string[] = ["supplierName", "goods", "city", "street"]


  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,
    Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.validateConfirmPassword()]),
    city: new FormControl('', [Validators.required]),
    registryId: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    birthDate: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    house_number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,5}[A-Z]?$/)]),
    type: new FormControl('', [Validators.required]),

    company_name: new FormControl('', [Validators.required]),
    service_type: new FormControl('', [Validators.required]),
    vat_number:   new FormControl('', [Validators.required, Validators.pattern(/^BE[0-9]{10}$/)]),

    hireDate: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  })

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }
 

  submit(): boolean {

    let filled: SuppliersForm = {
      company_name: this.form.get('company_name')?.value,
      vat_number: this.form.get('vat_number')?.value,
      address: {
        street: this.form.get('street')?.value,
        house_number: this.form.get('house_number')?.value,
        city_id: this.form.get('city')?.value as number
      },
      service_type: this.form.get('service_type')?.value,
    };
    for (let field of this.supplierFields) {
      if (this.form.get(field)?.errors) {
        return false;
      }
    }
    this.submitted.emit(filled as SuppliersForm);
    return true;
  }


  validateConfirmPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.root.get('password');
      const confirmPassword = control.root.get('confirmPassword');
      if (password && confirmPassword) {
        return password.value === confirmPassword.value ? null : { passwordMismatch: true };
      }
      return null;
    }
  }

}
