import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    TableRow,
    MenubarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
