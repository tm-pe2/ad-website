import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cust } from '../Cust';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Interfaces
interface Planning 
{
  PlanningID: number,
  EmployeeID: number,
  CustomerID: number,
  Date: Date,
  Status: number

}

interface Customer
{
  CustomerID: number,
  FirstName: string,
  LastName: string,
  BirthDate: Date,
  AdressID: number,
  Email: string,
  PhoneNumber: string,
  Password: string,
  GasType: number,
  Electricitytype: number

}

interface Address 
{
  AdressID: number,
  City: string,
  Street: string,
  HouseNumber: string,
  PostalCode: string,
  Country: string,
  StartDate: Date,
  EndDate: Date  
}

// Class
export class WorkerAppService {
  // Variables
  nCust : number = 10;
  custData : Array<Cust> = [];
  eid : number = 5;
  selectedCust : number = 3;

  // Constructor
  constructor(private http: HttpClient)
  {

  }

  // Functions
  // Get planning
  // |-> get employee ids, status & date
  getPlanning(): Observable<Planning[]> 
  { return this.http.get<Planning[]>(environment.apiUrl + '/plannings'); }

  // Get customer data
  // |-> name, addressID, gasType, electricityType
  // I have no idea if that's how the routes work tho, gotsta ask it to someone who does
  getCustomer(customerID: Number): Observable<Customer> 
  { return this.http.get<Customer>(environment.apiUrl + '/customer/:' + customerID); }

  // Get address
  // |-> get the address with an addressID
  // |-> use the address values to make it a string
  // I have no idea if that's how the routes work tho, gotsta ask it to someone who does
  getAdres(adresID: Number): Observable<Address>
  { return this.http.get<Address>(environment.apiUrl + '/addresses/:' + adresID); }
}
