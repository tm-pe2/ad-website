import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/address';
import { CustomerType } from '../interfaces/customer';
import { Role } from '../interfaces/employee';
import { EmployeeForm } from '../interfaces/form';
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
  @Output() canceled = new EventEmitter<any>();
  @Input() meters?: Meter[];
  @Input() cancel?: Boolean;
  @Input() editEmployee?: EmployeeForm;
  @Input() customer?: RegisterForm;

  mindate?: Date;
  maxEmployeeDate?: Date;
  maxCustomerDate?: Date;

  roles?: Role[];
  cities?: City[];


  registerFields: string[] = ["first_name", "last_name", "email", "phone_number", "password", "confirmPassword", "city", "national_registry_number", "birth_date"]
  supplierFields: string[] = ["company_name", "vat_number", "address", "service_type"]
  meterAppFields: string[] = [];
  employeeFields: string[] = ["first_name", "last_name", "email", "phone_number", "password", "confirmPassword", "city", "national_registry_number", "birth_date", "salary", "roles", "active"]

  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('', [Validators.required,
    Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.validateConfirmPassword()]),
    city: new FormControl('', [Validators.required]),
    national_registry_number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
    birth_date: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    house_number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,5}[A-Z]?$/)]),
    customer_type: new FormControl('', [Validators.required]),

    company_name: new FormControl('', [Validators.required]),
    service_type: new FormControl('', [Validators.required]),
    vat_number: new FormControl('', [Validators.required, Validators.pattern(/^BE[0-9]{10}$/)]),

    hire_date: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<City[]>(environment.apiUrl + "/cities").subscribe(data => {
      this.cities = data.sort((a, b) => a.city_name.localeCompare(b.city_name));
    });
    this.http.get<Role[]>(environment.apiUrl + "/roles").subscribe(data => {
      this.roles = data;
    });
    let curDate = new Date();
    curDate.setHours(24, 0, 0, 0)
    this.mindate = new Date(curDate.getUTCFullYear() - 120, curDate.getUTCMonth(), curDate.getUTCDate())
    this.maxEmployeeDate = new Date(curDate.getUTCFullYear() - 16, curDate.getUTCMonth(), curDate.getUTCDate())
    this.maxCustomerDate = new Date(curDate.getUTCFullYear() - 18, curDate.getUTCMonth(), curDate.getUTCDate())
    if (this.meters) {
      this.meters?.forEach(meter => {
        this.meterAppFields.push(`meter_${meter.id.toString()}`);
        this.form.addControl(`meter_${meter.id.toString()}`, new FormControl('', [Validators.required]))
        this.form.get(`meter_${meter.id.toString()}`)?.setValue(meter.value);
      });
    }
    if(this.editEmployee){
      this.form.patchValue(this.editEmployee);
    }
    if(this.customer){
      this.form.patchValue(this.customer);
    } 
  }


  submit(): boolean {

    if (this.type == "register") {
      let filled: RegisterForm = {
        first_name: this.form.get('first_name')?.value,
        last_name: this.form.get('last_name')?.value,
        birth_date: this.form.get('birth_date')?.value,
        email: this.form.get('email')?.value,
        phone_number: this.form.get('phone_number')?.value,
        national_registry_number: this.form.get('national_registry_number')?.value,
        addresses: [{
          street: this.form.get('street')?.value,
          house_number: this.form.get('house_number')?.value,
          city_id: this.form.get('city')?.value as number
        }],
        customer_type: this.form.get('type')?.value as CustomerType,
        password: this.form.get('password')?.value,
      };
      for (let field of this.registerFields) {
        if (this.form.get(field)?.errors) {
          return false;
        }
      }
      this.submitted.emit(filled as RegisterForm);

    }
    if (this.type == "suppliers") {
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

    }
    if (this.type == "meter-app") {
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
      for (let field of this.meterAppFields) {
        if (this.form.get(field)?.errors) {
          return false;
        }
      }
      this.submitted.emit(filled as MeterAppForm);

    }

    if (this.type == "employees") {
      console.log("hey")
      let filled: EmployeeForm = {
        first_name: this.form.get('first_name')?.value,
        last_name: this.form.get('last_name')?.value,
        email: this.form.get('email')?.value,
        phone_number: this.form.get('phone_number')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        national_registry_number: this.form.get('national_registry_number')?.value,
        birth_date: this.form.get('birth_date')?.value,
        hire_date: this.form.get('hire_date')?.value,
        salary: this.form.get('salary')?.value,
        roles: [this.form.get('role')?.value as number],
        addresses: [{
          street: this.form.get('street')?.value,
          house_number: this.form.get('house_number')?.value,
          city_id: this.form.get('city')?.value as number
        }],
      }
      for (let field of this.employeeFields) {
        if (this.form.get(field)?.errors) {
          return false;
        }
      }
      this.submitted.emit(filled as EmployeeForm);
    }
    return true;
  }

  onCancel() {
    this.canceled.emit();
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

  public get CustomerType() {
    return CustomerType
  }

  public get CurrentDate() {
    return new Date()
  }

}
