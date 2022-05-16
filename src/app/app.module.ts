import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddSuplierComponent } from './suppliers/add-suplier/add-suplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsSupplierComponent } from './suppliers/details-supplier/details-supplier.component';
import { ContactSupplierComponent } from './suppliers/contact-supplier/contact-supplier.component';
import { ContractOverveiwComponent } from './suppliers/contract-overveiw/contract-overveiw.component';
import { ManageContractComponent } from './suppliers/manage-contract/manage-contract.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    SuppliersComponent,
    AddSuplierComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
    DetailsSupplierComponent,
    ContactSupplierComponent,
    ContractOverveiwComponent,
    ManageContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
