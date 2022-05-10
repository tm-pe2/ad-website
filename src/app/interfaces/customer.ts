export interface User extends Address {
  user_id: number,
  role_id: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
  address_id: number,
  email: string,
  phone_number: string,
  password: string,
  national_registry_number: string
}
export interface Customer extends User {
  customer_id: number,
  gas_type: number,
  electricity_type: number,
  gas_meter_id: number,
  electricity_meter_id: number
}
export interface Address {
  address_id: number,
  city: string,
  street: string,
  house_number: string,
  postal_code: string,
  country: string,
}

export interface CustomerContract
{
  UserID: number,
   RoleID: number,
   first_name: string,
   last_name: string,
   ContractID: number
}
export interface CustomerExtend
{
  UserID: number,
  RoleID: number,
  first_name: string,
  last_name: string,
  BirthDate: Date,
  AddressID: number,
  Email: string,
  PhoneNumber: string,
  Password: string,
  ContractID: number
}