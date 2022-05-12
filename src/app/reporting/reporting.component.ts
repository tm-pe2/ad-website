import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice, InvoiceStatus } from '../interfaces/invoice';

@Component({
    selector: 'app-reporting',
    templateUrl: './reporting.component.html',
    styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
    invoices: Invoice[] = [];
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        //either update the status from here or update the status every day to update status, then get status
        this.http.get<{ invoice: Invoice[] }>(environment.apiUrl + "/invoices/overdue").subscribe({
            next: (data) => {this.invoices = data.invoice;},
            complete: () => console.log(this.invoices.forEach(e => e.DueDate = new Date(e.DueDate)))

        })
    }



    invoiceStatusToString(status: InvoiceStatus): string {
        switch (status) {
            case InvoiceStatus.sent:
                return "sent"
            case InvoiceStatus.paid:
                return "paid"
            case InvoiceStatus.overdue:
                return "overdue"
            default:
                return `invoice status (${status}) not defined in converter`
        }

    }
}
