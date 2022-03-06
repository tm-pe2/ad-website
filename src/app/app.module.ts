import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ManageinvoicesComponent } from './manageinvoices/manageinvoices.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    ManageinvoicesComponent,
    TicketingComponent,
    TableRow

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
