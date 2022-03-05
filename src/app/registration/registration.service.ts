import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  // Variables
  private _types = ["Private", "Company"];

  // Constructor
  constructor() {}

  // Getters
  get types() { return this._types; }

  // Setters

}
