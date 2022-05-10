import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        // BirthDate:data.BirthDate,
        // AddressID:data.AddressID,
        // Email:data.Email,
        // PhoneNumber:data.PhoneNumber,
        // Password:data.Password
      })
     }

  ngOnInit() {
  this.getCustomers();
}

  getCustomers()
  {
    this.httpClient.get<any>(environment.baseUrl+'customers').subscribe(
      (    response: Customer[])=>{
      console.log(response);
      this.customers=response;
    }
    );
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
    console.log(user);
    
    this.httpClient.put(environment.baseUrl+'customers',user)
    .subscribe({
      next:(response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });

  }

  // updateCustomer(idToUpd:number) {
  //   this.dialRef.close(this.form.value);
  //   console.log(this.form.value);
  //   console.log(idToUpd);
    
  //   this.customers.forEach((value,index)=>{
  //     if(value.UserID==idToUpd) 
  //     {
  //       this.customers[index].FirstName=this.form.value.name;
  //       this.customers[index].LastName=this.form.value.lastname;
  //       this.customers[index].RoleID=this.form.value.type;
  //     }
  // });
   
  // }

  cancel() {
    this.dialRef.close();
}

}



