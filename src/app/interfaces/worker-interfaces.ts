// Interfaces
export interface Planning 
{
  PlanningID: number,
  EmployeeID: number,
  CustomerID: number,
  Date: Date,
  Status: number

}

export interface Customer
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

export interface Address 
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

export interface Invoice {
  InvoiceID: number,
  CustomerID: number,
  SupplierID: number,
  Date: Date,
  DueDate: Date,
  Status: number,
  GasAmount: number,
  ElectricityType: number,
  Price: number,
  Tax: number,
  StartDate: Date,
  EndDate: Date
}