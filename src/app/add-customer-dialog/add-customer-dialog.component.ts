import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  
  form!: FormGroup;
  customers!:Customer[];
  baseUrl: String = "http://192.168.0.209:6060/api/";
  
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
    this.httpClient.get<any>(this.baseUrl+'customers').subscribe(
    response=>{
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
      RoleID: Number(this.form.get('RoleID')),
      FirstName: this.form.get('FirstName')?.value,
      LastName: this.form.get('LastName')?.value,
      BirthDate: this.form.get('BirthDate')?.value,
      AddressID: Number(this.form.get('AddressID')?.value),
      Email: this.form.get('Email')?.value,
      PhoneNumber: this.form.get('PhoneNumber')?.value,
      Password: this.form.get('Password')?.value,
      CustomerID: 0,
      GasType: 0,
      Electricitytype: 0,
      UserID: 0,
     
    }

    this.httpClient.post(this.baseUrl+'customers',user)
    .subscribe({
      next:(response) => console.log(response),
      error: (error) => console.log(error),
    });

  }

}
