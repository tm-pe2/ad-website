import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { Customer, CustomerContract } from '../interfaces/customer';
import { environment } from 'src/environments/environment';
import { PostConfigService } from '../services/post-config.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']

})
export class CustomerComponent implements OnInit {
 
  customerData: CustomerContract[]=[];
  
  constructor(public dialog : MatDialog,
              private postService :PostConfigService){}
  
  ngOnInit(): void {
    this.getCustomers();
  }

  selectedCustomer? : CustomerContract;

  getCustomers()
  {
    this.postService.getAllCustomers().subscribe(
      (response) =>{
        this.customerData=response.customers;
      },
      (error)=>console.log('error: ',error),
      ()=> console.log('ready!')
    );      
  }

   onSelectEdit(customer:CustomerContract)
  {  
    this.selectedCustomer=customer;
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data={
      id:this.selectedCustomer.UserID,
      name: this.selectedCustomer.first_name, 
      last_name: this.selectedCustomer.last_name, 
      type: this.selectedCustomer.customer_type, 
      contractNr: this.selectedCustomer.ContractID,
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(CustomerDetailComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe((result: any) =>{
      console.log(`Action was: ${result}`);
    });

  } 
 
  onSelectRemove(customer:CustomerContract):void {
    this.selectedCustomer = customer;  
    
    const dialConfig = new MatDialogConfig();
    
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data = {
      name: this.selectedCustomer.first_name,
      id: this.selectedCustomer.UserID
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(ConfirmDialogComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe((result: any) => {
      console.log(`Action was: ${result}`);
    });


  }
  

  
  
}



