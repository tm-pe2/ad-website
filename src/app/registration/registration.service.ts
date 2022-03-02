import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  private _types = ["Private", "Company"];

  constructor() {}
  getTypes() { return this._types; }

}
