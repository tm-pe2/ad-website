import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../interfaces/invoice';

@Component({
    selector: 'app-reporting',
    templateUrl: './reporting.component.html',
    styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
    invoices: Invoice[] = [];
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<{ invoice: Invoice[] }>(environment.apiUrl + "/reporting/tariffs").subscribe({
            next: (data) => this.invoices = data.invoice,
            //complete: () => console.log(this.invoices)

        })
    }

}
