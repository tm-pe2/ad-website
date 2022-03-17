import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import{CUSTOMERS} from '../mock-customers'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddClientDialogComponent } from '../add-client-dialog/add-customer-dialog.component';


@Component({
  selector: 'app-clients',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']

})
export class CustomerComponent implements OnInit {
 
  constructor(public dialog : MatDialog){}
  
  clientsArray=CUSTOMERS;
  selectedCustomer? : Customer;
  
   onSelectEdit(customer:Customer)
  {  
    this.selectedCustomer=customer;
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data={
      id:this.selectedCustomer.id,
      name: this.selectedCustomer.name, 
      lastname: this.selectedCustomer.lastname, 
      type: this.selectedCustomer.type, 
      contractNr: this.selectedCustomer.contractNr
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(CustomerDetailComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe(result =>{
      console.log(`Action was: ${result}`);
    });

  } 
 
  onSelectRemove(customer:Customer):void {
    this.selectedCustomer = customer;  
    
    const dialConfig = new MatDialogConfig();
    
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data = {
      name: this.selectedCustomer.name,
      id: this.selectedCustomer.id
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(ConfirmDialogComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe(result => {
      console.log(`Action was: ${result}`);
    });


  }
  
  onSelectAdd():void{
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;
    let dialRef=this.dialog.open(AddClientDialogComponent)
  }
  //constructor() { }
  ngOnInit(): void {
  }

}




