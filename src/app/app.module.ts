import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    TableRow,
    HeaderComponent,
    Page1Component,
    NavigatorComponent,
    Page2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
