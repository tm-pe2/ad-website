import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { UtilService } from 'src/app/util.service';
import { Cust } from 'src/app/Cust';

import { WorkerAppService } from 'src/app/services/worker-app.service';
import { WorkerlistItem } from 'src/app/interfaces/worker-interfaces';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  custArr: Array<WorkerlistItem> = [];

  /*
  constructor(private cData: UtilService) {
    this.custArr = cData.custData;
  }
  */
 /*
  planningList: Planning[] = [];
  invoicesList: Invoice[] = [];
  today: Date = new Date();
  tempCustomer: Customer;
  tempAddress: Address;
  address: string;
  name: string;
  employeeID: number;
  tempCust: Cust;
  */


  constructor(private cData: UtilService, private service: WorkerAppService) 
  {
    /*
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
    */

  }
  ngOnInit(): void
  {
    this.custArr = this.service.customerList;

  }
}
