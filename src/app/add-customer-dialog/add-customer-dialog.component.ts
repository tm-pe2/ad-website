import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  
  form!: FormGroup;
  customers!:Customer[];
    
  constructor(private formB: FormBuilder,
    private httpClient:HttpClient,
    private dialRef: MatDialogRef<CustomerDetailComponent> ){
      this.form=this.formB.group({
        RoleID:[],
        FirstName:[],
        LastName:[],
        BirthDate:[],
        AddressID:[],
        Email:[],
        PhoneNumber:[],
        Password:[]
      })
    }

  ngOnInit(): void {
    this.getCustomers();
  }  

  getCustomers()
  {
    this.httpClient.get<any>(environment.baseUrl+'customers').subscribe(
      (    response: Customer[]) =>{
      console.log(response);
      this.customers=response;
    }
    );5
  }

  cancel() {
    this.dialRef.close();
  }
  
  Submit()
  {
    let user: Customer = {
      role_id: Number(this.form.get('RoleID')),
      first_name: this.form.get('FirstName')?.value,
      last_name: this.form.get('LastName')?.value,
      birth_date: this.form.get('BirthDate')?.value,
      address_id: Number(this.form.get('AddressID')?.value),
      email: this.form.get('Email')?.value,
      phone_number: this.form.get('PhoneNumber')?.value,
      password: this.form.get('Password')?.value,
      customer_id: 0,
      gas_type: 0,
      electricity_type: 0,
      user_id: 0,
      gas_meter_id: 0,
      electricity_meter_id: 0,
      national_registry_number: '',
      city: '',
      street: '',
      house_number: '',
      postal_code: '',
      country: ''
    }

    this.httpClient.post(environment.baseUrl+'customers',user)
    .subscribe({
      next:(response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });

  }

}
