export interface RegistrationData
{
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

export interface Address 
{
  address_id?: number,
  city: string,
  street: string,
  house_number: string,
  postal_code: string,
  country: string,

}