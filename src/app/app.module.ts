import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { SmallGraphComponent } from './graphs/small-graph/small-graph.component';
import { MediumGraphComponent } from './graphs/medium-graph/medium-graph.component';
import { BigGraphComponent } from './graphs/big-graph/big-graph.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MonthlyUsageChartComponent } from './graphs/monthly-usage-chart/monthly-usage-chart.component';
import { YearlyUsageChartComponent } from './graphs/yearly-usage-chart/yearly-usage-chart.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallCardComponent,
    BigCardComponent,
    ProfileCardComponent,
    SmallGraphComponent,
    MediumGraphComponent,
    BigGraphComponent,
    ButtonComponent,
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
