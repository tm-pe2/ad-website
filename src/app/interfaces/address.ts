export interface Address{
    id?: number,
    city_id: number,
    city_name?: string,
    street: string,
    postal_code?: number,
    house_number: number,
    country?: string,
    city_name?: string 
}

export interface City{
    id: number,
    postal_code: string,
    city_name: string,
}