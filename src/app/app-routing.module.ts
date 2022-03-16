import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { TicketingComponent } from './ticketing/ticketing.component';

const routes: Routes = [
  {path: 'dashboard/:userType', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'graphs', component: GraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
