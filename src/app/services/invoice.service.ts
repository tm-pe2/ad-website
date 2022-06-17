import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../interfaces/address';
import { Customer } from '../interfaces/customer';
import { Invoice, InvoicesStatuses, INVOICE_STATUS } from '../interfaces/invoice';

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
  
  downloadInvoiceFile(invoiceId: number) {
    return this.http.get(
        environment.apiUrl  + '/invoices/' + invoiceId + '/download',
        {observe: 'response' , responseType: 'blob'}
        );
  }

  UpdateInvoice(invoice: Invoice) : Observable<any>
  {
    return this.http.patch(environment.apiUrl + '/invoices/' + invoice.id , {status: INVOICE_STATUS.PAID},{responseType: "text"} );
  }
}
