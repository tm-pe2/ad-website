import { Injectable } from '@angular/core';
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // Mockusers

  // Variables
  private _name: string;
  private _mail: string;
  private _phone: string;
  private _type: string;
  private _city: string;
  private _zipcode: number;
  private _street: string;
  private _house: string;
  private _password: string;

  // Constructor
  constructor ( name: string, mail: string, phone: string, type: string, city: string, zipcode: number, street: string, house: string, password: string )
  {
    this._name = name;
    this._mail = mail;
    this._phone = phone;
    this._type = type;
    this._city = city;
    this._zipcode	= zipcode;
    this._street = street;
    this._house = house;
    this._password = password;

  }

  // Getters
  get name() { return this._name; }
  get mail() { return this._mail; }
  get phone() { return this._phone; }
  get type() { return this._type; }
  get city() { return this._city; }
  get zipcode() { return this._zipcode; }
  get street() { return this._street; }
  get house() { return this._house; }
  get password() { return this._password; }

  // Setters
  set setName(name: string) { this._name = name; }
  set setMail(mail: string) { this._mail = mail; }
  set setPhone(phone: string) { this._phone = phone; }
  set setType(type: string) { this._type = type; }
  set setCity(city: string) { this._city = city; }
  set setZipcode(zipcode: number) { this._zipcode = zipcode; }
  set setStreet(street: string) { this._street = street; }
  set setHouse(house: string) { this._house = house; }
  set setPassword(password: string) { this._password = password; }

  // Functions
  // Kinda dunno what functions we need atm


}