

export interface Address {
  address_id?: number,
  city: string,
  street: string,
  house_number: string,
  postal_code: string,
  country: string,
}
export interface User extends Address {
  user_id?: number,
  role_id?: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
  address_id?: number,
  email: string,
  phone_number: string,
  password: string,
  national_registry_number: string
}
export interface Customer extends User {
  customer_id: number,
  customer_type:string,
}
export interface CustomerContract extends Customer
{
  UserID?: number,
   customer_type: string,
   first_name: string,
   last_name: string,
   ContractID?: number
}
export interface CustomerExtend
{
  UserID?: number,
  RoleID?: number,
  first_name: string,
  last_name: string,
  BirthDate: Date,
  AddressID: number,
  Email: string,
  PhoneNumber: string,
  Password: string,
  ContractID: number
}
export interface Estimation {
  estimation_id?: number,
  service_type: number,
  address_id?: number,
  building_type: number,
  family_size: number,
  equipments: string,
  past_consumption: number,
  estimated_consumption:number,
}

export interface Meter{
  meter_id?:number,
  physical_id?:string,
  index_id?:number;
  contract_id?:number,
  meter_type:string,
  index_value: number,
  date?:Date,
}

export interface EstimatedContract extends Estimation
{
  start_date:Date,
  end_date:Date,
  customer_type:string,
  tariff_id?:number,
  estimation_id?:number,
  address_id:number,
  service_type:number,
  status:string
}
export enum CustomerType{
  PRIVATE = 1, 
  COMPANY = 2,
}