import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../../interfaces/customer';
//TODO fix the dialog
@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent implements OnInit {
  
  form!: FormGroup;
  customers!:Customer[];
  confirmPassw!:string;
    
  constructor(private formB: FormBuilder,
    private httpClient:HttpClient,
    private dialRef: MatDialogRef<CustomerDetailComponent> ){
      this.form=this.formB.group({
        Type: ['',Validators.required],
        FirstName: ['',Validators.required],
        LastName: ['',Validators.required],
        NationalRegNumber: ['',Validators.required],
        BirthDate:['',Validators.required] ,
        Street:['',Validators.required] ,
        HouseNr: ['',Validators.required],
        City: ['',Validators.required],
        PostCode:['',Validators.required] ,
        Email: ['',Validators.required],
        PhoneNumber:['',Validators.required],
        Password:['',Validators.required],
        ConfirmPassword:['',Validators.required], 
      })
    }

  ngOnInit(): void {
    this.getCustomers();
  }  
  get formControls() {return this.form.controls;}

  getCustomers()
  {
     this.httpClient.get<any>(environment.apiUrl+'/customers').subscribe(
      (    response: Customer[]) =>{
      console.log(response);
      this.customers=response;
    }
    );
  }

  cancel() {
    this.dialRef.close();
  }
  
  Submit()
  {
    this.confirmPassw=this.form.get('ConfirmPassword')?.value;
    if ( this.confirmPassw == this.form.get('Password')?.value)
    {
      this.confirmPassw=this.form.get('Password')?.value;
      let user: Customer = {
        role_id:1,
        customer_type: (this.form.get('Type'))?.value,
        first_name: this.form.get('FirstName')?.value,
        last_name: this.form.get('LastName')?.value,
        birth_date: this.form.get('BirthDate')?.value,
        email: this.form.get('Email')?.value,
        phone_number: this.form.get('PhoneNumber')?.value,
        password: this.form.get('Password')?.value,
        national_registry_number:this.form.get('NationalRegNumber')?.value,
        city_name:this.form.get('City')?.value,
        street: this.form.get('Street')?.value,
        house_number: this.form.get('HouseNr')?.value,
        postal_code: this.form.get('PostCode')?.value,
        country: 'Belgium',
      }
  
      this.httpClient.post(environment.apiUrl+'/customers',user)
      .subscribe({
             
        next:(response: any) => console.log(response),
        error: (error: any) => console.log(error),
      });
  
    }
    else
    {
      alert("Passwords don't match!");
    }
    
  }

}
