import { ConfigurableFocusTrap } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/customer';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  form!: FormGroup;
  customers!: Customer[];
  
  
  constructor(
    private httpClient:HttpClient,
    private formB: FormBuilder,
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {
      this.form=this.formB.group({
        RoleID:data.role_id,
        FirstName:data.first_name,
        LastName:data.last_name,
        BirthDate:data.birth_date,
        Street:data.street,
        HouseNr:data.house_number,
        PostCode:data.postal_code,
        City:data.city,
        NationalRegNumber:data.national_registry_number,
        Email:data.email,
        PhoneNumber:data.phone_number,
        Password:data.password
      })
     }

  ngOnInit() {
  this.getCustomers();
}

  getCustomers()
  {
    this.httpClient.get<any>(environment.apiUrl+'/customers').subscribe(
      ( response: Customer[])=>{
      console.log(response);
      this.customers=response;
    }
    );
  }

  Submit()
  {
    let user: Customer = {
      role_id: 1,
      customer_type:(this.form.get('Type'))?.value,
      first_name: this.form.get('FirstName')?.value,
      last_name: this.form.get('LastName')?.value,
      birth_date: this.form.get('BirthDate')?.value,
      email: this.form.get('Email')?.value,
      phone_number: this.form.get('PhoneNumber')?.value,
      password: this.form.get('Password')?.value,
      customer_id: -1,
      user_id: -1,
      national_registry_number: this.form.get('NationalRegNumber')?.value,
      city: this.form.get('City')?.value,
      street: this.form.get('Street')?.value,
      house_number: this.form.get('HouseNr')?.value,
      postal_code: this.form.get('PostCode')?.value,
      country: 'Belgium',
    }
    
    this.httpClient.put(environment.apiUrl+'/customers',user)
    .subscribe({
      next:(response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });

  }
  cancel() {
    this.dialRef.close();
}

}


