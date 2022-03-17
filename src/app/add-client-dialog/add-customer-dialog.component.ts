import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CUSTOMERS } from '../mock-customers';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddClientDialogComponent implements OnInit {
  
  form!: Form;
  
  
  constructor(private formB: FormBuilder,
    private dialRef: MatDialogRef<CustomerDetailComponent> ){}

  ngOnInit(): void {
 
  }  


  cancel() {
    this.dialRef.close();
  }

  addCustomer(n:string,ln:string,t:string)
  {
    this.dialRef.close(this.form);
    console.log(this.form);
    console.log(CUSTOMERS.length);
    var newId= (CUSTOMERS.length)+1;
    let c: Customer = {
      id: newId,
      name: n,
      lastname: ln,
      type: t,
      contractNr: "A10"
    }
    CUSTOMERS.push(c);
  }
}
