import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../interfaces/address';
import { Customer } from '../interfaces/customer';
import { Invoice } from '../interfaces/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  GetAllInvoices() :  Observable<Invoice[]>
  {    
    return this.http.get<Invoice[]>(environment.apiUrl + '/invoices/');
  }

  GetUserInvoices() :  Observable<Invoice[]>
  {    
    return this.http.get<Invoice[]>(environment.apiUrl + '/invoices/self');
  }
}
