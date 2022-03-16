import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MonthlyUsageChartComponent } from './graphs/monthly-usage-chart/monthly-usage-chart.component';
import { YearlyUsageChartComponent } from './graphs/yearly-usage-chart/yearly-usage-chart.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    GraphsComponent,
    MonthlyUsageChartComponent,
    YearlyUsageChartComponent,
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
