import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, GraphCanvasComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallCardComponent,
    BigCardComponent,
    ProfileCardComponent,
    ButtonComponent,
    TicketingComponent,
    GraphsComponent,
    GraphCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
