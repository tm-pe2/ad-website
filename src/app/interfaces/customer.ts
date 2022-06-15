import { UserRole } from "./User"

//TODO refactor to match the db/Api
export interface Address {
  id?: number,
  city_name: string,
  street: string,
  house_number: string,
  postal_code: string,
  country: string,
}
export interface User {
  id?: number,
  first_name: string,
  last_name: string,
  birth_date: Date,
  email: string,
  phone_number: string,
  national_registry_number: string,
  roles?: UserRole[],
  addresses?: Address[],
  password?: string,
  active?: boolean,
}

export interface Customer extends User {
  [x: string]: any
  customer_type: CustomerType
}


export interface Meter{
  meter_type:MeterType,
  index_value: number,
}

export interface EstimationRegistration {
  service_type: ServiceType,
  address_id?: number,
  building_type: BuildingType,
  family_size: number,
  equipment: EquipmentType [],
  past_consumption: number,
  meters : Meter[],
}

export enum BuildingType{

  'Apartment'= 0,
  'Closed Building'= 1,
  'Semi Detached' = 2,
  'Open Building'= 3,

}

export enum ServiceType
{
  Electricity= 0,
  Gas= 1,
}

export enum EquipmentType
{ 
   'Oven/Stove' = 1 ,
   'Dishwasher' = 2 ,
   'Washing Machine' = 3 ,
   'Drying Machine' = 4 ,
   'Hair Dryer' = 5 

}

export enum MeterType {
  MANUAL = "Manual",
  SMART = "Smart",
}
export enum CustomerType{
  PRIVATE = 1, 
  COMPANY = 2,
}