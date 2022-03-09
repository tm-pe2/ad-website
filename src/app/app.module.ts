import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientsComponent } from './clients/clients.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    ClientsComponent,
    ClientDetailComponent,
    ConfirmDialogComponent,
    TableRow,
    AddClientDialogComponent,
   

  ],
  entryComponents:[ClientDetailComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    ClientsComponent,
    ClientDetailComponent,
    ConfirmDialogComponent,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
