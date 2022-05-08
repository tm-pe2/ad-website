import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';
import { UtilService } from '../util.service';
import { Cust } from '../Cust';
import { WorkerAppService } from '../services/worker-app.service';
import { Planning, Customer, Address, Invoice } from '../interfaces/worker-interfaces';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  custArr : Array<Cust> = [];
  planningList: Planning[] = [];
  invoicesList: Invoice[] = [];
  today: Date = new Date();
  tempCustomer: Customer;
  tempAddress: Address;
  address: string;
  name: string;
  employeeID: number;
  tempCust: Cust;

  constructor(private cData: UtilService, private service: WorkerAppService) 
  {
    this.tempCustomer = 
    {
      CustomerID: 0,
      FirstName: '',
      LastName: '',
      BirthDate: this.today,
      AdressID: 0,
      Email: '',
      PhoneNumber: '',
      Password: '',
      GasType: 0,
      Electricitytype: 0

    };

    this.tempAddress = 
    {
      AdressID: 0,
      City: '',
      Street: '',
      HouseNumber: '',
      PostalCode: '',
      Country: '',
      StartDate: this.today,
      EndDate: this.today  

    };

    this.address = '';
    this.name = '';
    this.employeeID = service.eid;
    this.tempCust = new Cust(this.employeeID);
  }

  ngOnInit(): void
  {

    // Get planning
    this.service.getPlanning()
    .subscribe(plannings => 
      { this.planningList = plannings as Planning[]; })
    
    // Add each customer to the list
    this.planningList.forEach(planning => 
      {
        if (planning.Date == this.today)
        this.service.getCustomer(planning.CustomerID).subscribe(customer => 
          { this.tempCustomer = customer as Customer; })

        this.service.getAddress(this.tempCustomer.AdressID).subscribe(address =>
          { this.tempAddress = address as Address; })

        this.service.getInvoices().subscribe(invoices =>
          { this.invoicesList = invoices as Invoice[]; })

        this.invoicesList.reverse();

        // Add all necesary data to a temporary cust variable
        tempCust: new Cust(this.employeeID);

        this.name = this.tempCustomer.LastName + ', ' + this.tempCustomer.FirstName;
        this.address = this.tempAddress.Street + ' ' + this.tempAddress.HouseNumber + ', ' + this.tempAddress.City + ' ' + this.tempAddress.PostalCode + ', ' + this.tempAddress.Country; 

        // Assign other variables to tempCust
        this.tempCust.setCid(planning.CustomerID);
        this.tempCust.setName(this.name);
        this.tempCust.setAddress(this.address);
        this.tempCust.setCurrentDate(planning.Date);

        // Status
        if (planning.Status == 0) { this.tempCust.setStatus('Not completed'); }
        else { this.tempCust.setStatus('Completed'); }

        // Meter type & last values
        if (this.tempCustomer.GasType == 1 && this.tempCustomer.Electricitytype == 1)
        {
          this.tempCust.setType(2);
          this.tempCust.setLastG(this.invoicesList[0].GasAmount);
          this.tempCust.setLastE(this.invoicesList[0].ElectricityType);

        } else if (this.tempCustomer.GasType == 1 && this.tempCustomer.Electricitytype == 0)
        {
          this.tempCust.setType(0);
          this.tempCust.setLastG(this.invoicesList[0].GasAmount);

        } else
        {
          this.tempCust.setType(1);
          this.tempCust.setLastE(this.invoicesList[0].ElectricityType);

        }

        this.custArr.push(this.tempCust);


      });

    this.service.clientList = this.custArr;

  }
}
