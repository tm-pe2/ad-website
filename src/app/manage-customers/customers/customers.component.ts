import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { Customer } from '../../interfaces/customer';
import { environment } from 'src/environments/environment';
import { PostConfigService } from '../../services/post-config.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']

})
export class CustomerComponent implements OnInit {
 
  customers: Customer[] = [];
  
  constructor(public dialog : MatDialog,
              private postService :PostConfigService){}
  
  ngOnInit(): void {
    this.getCustomers();
  }

  selectedCustomer: Customer=
  {
    first_name: '',
    last_name: '',
    birth_date: new Date,
    email: '',
    phone_number: '',
    national_registry_number: '',
    customer_type: 0
  };

  getCustomers()
  {
    this.postService.getAllCustomers().subscribe(
      (response) =>{
        this.customers=response;
      },
      (error)=>console.log('error: ',error),
      ()=> console.log('ready!')
    );      
  }

  
  
   onSelectEdit(customer:Customer)
  {  
    this.selectedCustomer=customer;
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data={
      customer_id:this.selectedCustomer.id,
      first_name: this.selectedCustomer.first_name, 
      last_name: this.selectedCustomer.last_name, 
      customer_type: this.selectedCustomer.customer_type, 
      active: this.selectedCustomer.active,
      email:this.selectedCustomer.email,
      birth_date: this.selectedCustomer.birth_date,
      password:this.selectedCustomer.password,
      national_registry_number:this.selectedCustomer.national_registry_number,
      addresses:this.selectedCustomer.addresses,
  
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(CustomerDetailComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe((result: any) =>{
      console.log(`Action was: ${result}`);
    });

  } 
 
  openDialog()
  {
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    let dialRef=this.dialog.open(AddCustomerDialogComponent,dialConfig);

    dialRef.afterClosed().subscribe((result: any) => {
      this.postService.getAllCustomers().subscribe(resp=>
        {
          this.customers=resp;
          console.log(resp);
        })
    });
  }

  onSelectRemove(customer:Customer):void {
    this.selectedCustomer = customer;  
    
    const dialConfig = new MatDialogConfig();
    
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data = {
      name: this.selectedCustomer.first_name,
      id: this.selectedCustomer.id
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(ConfirmDialogComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe((result: any) => {
      this.postService.getAllCustomers().subscribe(resp=>
        {
          this.customers=resp;
          console.log(resp);
        })
    });


  }
  
}




