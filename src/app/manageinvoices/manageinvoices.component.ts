import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageinvoices',
  templateUrl: './manageinvoices.component.html',
  styleUrls: ['./manageinvoices.component.css']
})
export class ManageinvoicesComponent implements OnInit {

  invoicedetails: Invoice = new Invoice();

  searchCustomer: string = "";
  filterStatus: string = "";
  statusIDFilter: number = -1;

  public invoices = 
  [{id:1,CustomerName:"Chrisse Sulter",SupplierID:1,Date:"3/23/2021",DueDate:"3/23/2022",GasAmount:820,ElectricityAmount:0,Price:577,Tax:13.03, ClientType: "Business", StatusID: 3, Status: "Paid"},
  {"id":2,"CustomerName":"Boone Bodle","SupplierID":2,"Date":"3/18/2021",DueDate:"3/18/2022","GasAmount":0,ElectricityAmount:685,"Price":444,"Tax":13.04, ClientType: "Private", StatusID: 2, Status: "Pending"},
  {"id":3,"CustomerName":"Willie Renison","SupplierID":2,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":0,ElectricityAmount:763,"Price":167,"Tax":5.75, ClientType: "Private", StatusID: 2, Status: "Pending"},
  {"id":4,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 3, Status: "Betaald"},
  {"id":5,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 0, Status: "Not Generated"},
  {"id":6,"CustomerName":"John Doe","SupplierID":3,"Date":"12/6/2021",DueDate:"12/6/2022","GasAmount":763,ElectricityAmount:0,"Price":167,"Tax":5.70, ClientType: "Business", StatusID: 1, Status: "Generated"}];

  constructor() {}

  ngOnInit(): void {
  }

  public open(id: number): void {
    let invoice = new Invoice();
    this.invoices.forEach(function (inv) {
      if (inv.id == id) {
        invoice = new Invoice(inv.id, inv.CustomerName, inv.SupplierID.toString(), inv.Date, inv.DueDate, inv.GasAmount, inv.ElectricityAmount, inv.Price, inv.Tax, "", inv.StatusID, inv.Status);
      }
    });
    this.invoicedetails = invoice;
    return;
  }
}

export class Invoice {
  public id: number;
  public customerName: string;
  public supplierName: string;
  public date: string;
  public dueDate: string;
  public gasAmount: number;
  public electricityAmount: number;
  public price: number;
  public tax: number;
  public contractType: string;
  public statusID: number;
  public status: string;

  constructor (iId: number = 0, iCName: string = "", iSName = "", iDate = "", iDueDate = "", iGasAmount = 0, iElectricityAmount = 0, iPrice = 0, iTax = 0, iContractType = "", iStatusID = 0, iStatus = "") {
    this.id = iId;
    this.customerName = iCName;
    this.supplierName = iSName;
    this.date = iDate;
    this.dueDate = iDueDate;
    this.gasAmount = iGasAmount;
    this.electricityAmount = iElectricityAmount;
    this.price = iPrice;
    this.tax = iTax;
    this.contractType = iContractType;
    this.statusID = iStatusID;
    this.status = iStatus;
  }
}