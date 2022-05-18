import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customers/customers.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ConsumptionEstimationComponent } from './consumption-estimation/consumption-estimation.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { GraphsComponent } from './graphs/graphs.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService], // Only authenticated users can access this route
  },
  {
    path: 'ticketing',
    component: TicketingComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['client', 'admin'] }, // Only users with the role 'client' or 'admin' can access this route
  },
  {path: 'support', component: SupportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'ticketing/:userType', component: TicketingComponent},
  {path: 'graphs', component: GraphsComponent},
  {path: 'statuscode/:statusCode', component: StatuscodepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path:'manage-customers',component:CustomerComponent},
  {path:'consumption-estimation',component:ConsumptionEstimationComponent},
  {path:'register-customer',component:RegisterCustomerComponent},
]

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
