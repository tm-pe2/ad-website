import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { TicketingComponent } from './ticketing/ticketing.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'manage-employees', component: ManageEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
