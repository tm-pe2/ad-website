export interface User {
  UserID: number,
  RoleID: number,
  FirstName: string,
  LastName: string,
  BirthDate: Date,
  AddressID: number,
  Email: string,
  PhoneNumber: string,
  Password: string,
}
export interface Customer extends User {
  CustomerID: number,
  GasType: number,
  Electricitytype: number
}