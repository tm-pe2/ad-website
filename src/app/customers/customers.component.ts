import { Component, OnInit } from '@angular/core';
//import { Customer } from './customer';
import axios,{ AxiosResponse } from 'axios';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { Customer } from './customer';


interface CustomerContract
{
  UserID: number,
   RoleID: number,
   FirstName: string,
   LastName: string,
   ContractID: number
}
interface CustomerExtend
{
  UserID: number,
  RoleID: number,
  FirstName: string,
  LastName: string,
  BirthDate: Date,
  AddressID: number,
  Email: string,
  PhoneNumber: string,
  Password: string,
   ContractID: number
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']

})
export class CustomerComponent implements OnInit {
 
  clientsArray!:CustomerContract[];

  constructor(public dialog : MatDialog){}
  
  ngOnInit(): void {
    this.getCustomers();
  }

  selectedCustomer? : CustomerContract;

  async getCustomers()
  {
    let result = await axios.get("http://172.20.10.12:6060/api/customerss/contracts");
    this.clientsArray = result.data.customers;
    
  }
  // async getAllCustomers()
  // {
  //   let result = await axios.get("http://192.168.0.209:6060/api/customers");
  //   this.selectedCustomer = result.data.customers;
    
  // }

  // individ()
  // {
  //   this.clientsArray.forEach(client =>
  //     {
  //       if(client.RoleID==1)
  //       {
          
  //       }
  //     });
  // }

   onSelectEdit(customer:CustomerContract)
  {  
    this.selectedCustomer=customer;
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data={
      id:this.selectedCustomer.UserID,
      name: this.selectedCustomer.FirstName, 
      lastname: this.selectedCustomer.LastName, 
      type: this.selectedCustomer.RoleID, 
      contractNr: this.selectedCustomer.ContractID,
      // birthdate:this.selectedCustomer.BirthDate,
      // address:this.selectedCustomer.AddressID,
      // email:this.selectedCustomer.Email,
      // phone:this.selectedCustomer.PhoneNumber,
      // pass:this.selectedCustomer.Password
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(CustomerDetailComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe(result =>{
      console.log(`Action was: ${result}`);
    });

  } 
 
  onSelectRemove(customer:CustomerContract):void {
    this.selectedCustomer = customer;  
    
    const dialConfig = new MatDialogConfig();
    
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data = {
      name: this.selectedCustomer.FirstName,
      id: this.selectedCustomer.UserID
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
    let dialRef=this.dialog.open(AddCustomerDialogComponent)
  }
  
  
}




