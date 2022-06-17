import { HttpClient } from '@angular/common/http';
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
    let buf : InvoicesStatuses = {invoice_id: invoice.id, status_id: INVOICE_STATUS.PAID};
    //const headers = { 'content-type': 'application/json'};
    //return this.http.post<InvoicesStatuses>(environment.apiUrl + '/invoices/' + invoice.id , buf, {'headers':headers});
    return this.http.post<InvoicesStatuses>(environment.apiUrl + '/invoices/' + invoice.id , buf);
  }
}
