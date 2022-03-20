import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageTickets, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { DeleteModalComponent } from './ticketing/delete-modal/delete-modal.component';
import { EditModalComponent } from './ticketing/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    ManageTickets,
    DeleteModalComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
