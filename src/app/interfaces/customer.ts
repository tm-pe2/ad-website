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

  APARTMENT = 0,
  CLOSED_BUILDING = 1,
  SEMI_DETACHED = 2,
  OPEN_BUILDING = 3,

}

export enum ServiceType
{
  Electricity= 1,
  Gas= 2,
}

export enum EquipmentType
{ 
   OVEN = 1 ,
   DISHWASHER = 2 ,
   WASHING_MACHINE = 3 ,
   DRYING_MACHINE = 4 ,
   HAIR_DRYER = 5 

}

export enum MeterType {
  MANUAL = "Manual",
  SMART = "Smart",
}
export enum CustomerType{
  PRIVATE = 1, 
  COMPANY = 2,
}