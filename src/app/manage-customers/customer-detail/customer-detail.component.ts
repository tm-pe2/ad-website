import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterForm } from 'src/app/interfaces/form';
import { PostConfigService } from 'src/app/services/post-config.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  c_id? : number = 0;
  customer? : RegisterForm;

  constructor(
    private postService:PostConfigService,
    private dialRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {
    this.c_id=data.id;
    }

  ngOnInit() {
    
    if(this.c_id)
    {
      this.postService.getCustomers(this.c_id).subscribe(
      {  
        next:(response: RegisterForm) =>
        {
             this.customer=response;
        }
      }
      );
    }
  }

  onSubmit(c:Customer)
  {    
    let cust:Customer = c;
    cust.id = this.customer?.id;
    console.log(cust);
    this.postService.editCustomer(cust);
    alert("Customer edited successfully!");
    this.cancel();
    
  }
  cancel() {
    this.dialRef.close();
}

}



