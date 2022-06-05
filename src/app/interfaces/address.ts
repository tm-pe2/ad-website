export interface Address{
    id?: number,
    city_id: number,
    street: string,
    postal_code?: number,
    house_number: number,
    country?: string
}

export interface City{
    id: number,
    postal_code: string,
    city_name: string,
}