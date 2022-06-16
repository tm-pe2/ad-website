import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { formatDate } from '@angular/common';
import { Invoice, INVOICE_STATUS } from '../interfaces/invoice';
import { CustomerType } from '../interfaces/customer';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../interfaces/User';

@Component({
  selector: 'app-manageinvoices',
  templateUrl: './manageinvoices.component.html',
  styleUrls: ['./manageinvoices.component.css']
})
export class ManageinvoicesComponent implements OnInit {


  //don't do this you psycho
  // public invoices = 
  // [{id:1,CustomerName:"Chrisse Sulter",SupplierID:1,Date:"3/23/2021",DueDate:"3/23/2022",GasAmount:820,ElectricityAmount:0,Price:577,Tax:13.03, ClientType: "Business", StatusID: 3, Status: "Paid"},
  // {"id":2,"CustomerName":"Boone Bodle","SupplierID":2,"Date":"3/18/2021",DueDate:"3/18/2022","GasAmount":0,ElectricityAmount:685,"Price":444,"Tax":13.04, ClientType: "Private", StatusID: 2, Status: "Pending"},
  // {"id":3,"CustomerName":"Willie Renison","SupplierID":2,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":0,ElectricityAmount:763,"Price":167,"Tax":5.75, ClientType: "Private", StatusID: 2, Status: "Pending"},
  // {"id":4,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 3, Status: "Betaald"},
  // {"id":5,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 0, Status: "Not Generated"},
  // {"id":6,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 1, Status: "Generated"}];

  invoices! : Invoice[];
  DetailsClicked : boolean = false;
  DetailsID : number = 0;
  LogonError : boolean = false;

  constructor(private invoiceService : InvoiceService, public auth: AuthService) {}
  AllViewer: UserRole[] = [UserRole.ACCOUNTANT,UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.HR_MANAGER, UserRole.MANAGER, UserRole.SUPPORT, UserRole.TECHNICIAN];

  ngOnInit(): void {
    let MyRole = this.auth.getUserRoleId();
    if(this.AllViewer.includes(MyRole!))
    {
      this.invoiceService.GetAllInvoices().subscribe(invoices => {this.invoices = invoices; console.log(this.invoices);});
    }
    else if (MyRole == UserRole.CUSTOMER)
    {
      this.invoiceService.GetUserInvoices().subscribe(invoices => {this.invoices = invoices; console.log(this.invoices);});
    }    
    else
    {
      this.LogonError = true;
    }
  }
 
  dateFormat(date : Date) : string
  {
    return formatDate(date, 'MM/dd/yyyy', 'en');
  }

  GetCustomerType(customer : string) : string
  {
    return CustomerType[Number(customer)];
  }

  GetInvoiceType(customer : INVOICE_STATUS) : string
  {
    return INVOICE_STATUS[Number(customer)];
  }

  OnClickDetails(i : number)
  {
    this.DetailsID = i;
    this.DetailsClicked = true;
  }
}