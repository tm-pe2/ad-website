import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddSuplierComponent } from './add-suplier/add-suplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    SuppliersComponent,
    AddSuplierComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
