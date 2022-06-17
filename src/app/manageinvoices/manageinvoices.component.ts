import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { formatDate } from '@angular/common';
import { Invoice, INVOICE_STATUS, INVOICE_TYPE } from '../interfaces/invoice';
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
  UserMan : boolean = false;

  constructor(private invoiceService : InvoiceService, public auth: AuthService) {}
  AllViewer: UserRole[] = [UserRole.ACCOUNTANT,UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.HR_MANAGER, UserRole.MANAGER, UserRole.SUPPORT, UserRole.TECHNICIAN];

  ngOnInit(): void {
    this.LoadData();
  }

  GetCustomerType(customer : CustomerType | undefined) : string
  {
    return CustomerType[Number(customer)];
  }

  GetInvoiceType(customer : INVOICE_TYPE) : string
  {
    return INVOICE_TYPE[Number(customer)];
  }
  
  GetInvoiceStatus(customer : INVOICE_STATUS) : string
  {
    return INVOICE_STATUS[Number(customer)];
  }

  CheckInvoiceStatus(customer : INVOICE_STATUS) : boolean
  {
    if(customer == INVOICE_STATUS.PAID)
    {
      return false;
    }
    return true;
  }

  OnClickDetails(i : number)
  {
    this.DetailsID = i;
    this.DetailsClicked = true;
    this.DownloadPDF()
  }

  CheckUserMan(i : number | undefined) : boolean //if employee, check if it's their invoice (since they can work there AND have a contract there). I think?
  {
    console.log(i);
    if(i != this.auth.getUserId())
    {
      return false;
    }
    return true;
  }

  DownloadPDF()
  {
    this.invoiceService.downloadInvoiceFile(this.invoices[this.DetailsID].id).subscribe(response => {
      let blob: Blob = response.body as Blob;
      window.open(window.URL.createObjectURL(blob));
    });
  }

  UpdatePayment(i : number)
  {
    this.invoiceService.UpdateInvoice(this.invoices[i]).subscribe(() =>
    {
      this.LoadData();
    },
    (error) =>
    {
      console.log("an error has occured!");
    });
  }
  
  LoadData()
  {
    let MyRole = this.auth.getUserRoleId();
    if(MyRole?.some(r => this.AllViewer.includes(r))!)
    {
      this.invoiceService.GetAllInvoices().subscribe(invoices => {this.invoices = invoices; console.log(this.invoices);});
    }
    else if (MyRole?.includes(UserRole.CUSTOMER))
    {
      this.invoiceService.GetUserInvoices().subscribe(invoices => {this.invoices = invoices; console.log(this.invoices);});
      this.UserMan = true;
    }    
    else
    {
      this.LogonError = true;
    }
  }
}