import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MonthlyUsageChartComponent } from './graphs/monthly-usage-chart/monthly-usage-chart.component';
import { YearlyUsageChartComponent } from './graphs/yearly-usage-chart/yearly-usage-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    GraphsComponent,
    MonthlyUsageChartComponent,
    YearlyUsageChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
