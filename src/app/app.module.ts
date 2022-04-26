import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customers/customers.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { ContractComponent } from './contract/contract.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    CustomerComponent,
    CustomerDetailComponent,
    ConfirmDialogComponent,
    TableRow,
    AddCustomerDialogComponent,
    ContractComponent
  ],
  entryComponents:[CustomerDetailComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  exports:[
    CustomerComponent,
    CustomerDetailComponent,
    ConfirmDialogComponent,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
