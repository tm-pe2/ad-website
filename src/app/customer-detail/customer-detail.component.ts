import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customers/customer';
//import { CUSTOMERS } from '../mock-customers';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  form!: FormGroup;
  customers!: Customer[];
  baseUrl: String = "http://192.168.0.209:6060/api/";
  
  constructor(
    private httpClient:HttpClient,
    private formB: FormBuilder,
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.form=this.formB.group({
        RoleID:data.type,
        FirstName:data.name,
        LastName:data.lastname,
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
    this.httpClient.get<any>(this.baseUrl+'customers').subscribe(
    response=>{
      console.log(response);
      this.customers=response;
    }
    );
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
    console.log(user);
    
    this.httpClient.put(this.baseUrl+'customers',user)
    .subscribe({
      next:(response) => console.log(response),
      error: (error) => console.log(error),
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



