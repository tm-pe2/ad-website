import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customers/customers.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ConsumptionEstimationComponent } from './consumption-estimation/consumption-estimation.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path:'manage-customers',component:CustomerComponent},
  {path:'consumption-estimation',component:ConsumptionEstimationComponent},
  {path:'register-customer',component:RegisterCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
