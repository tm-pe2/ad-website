import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';
import { UserRole } from './interfaces/User';

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService], // Only authenticated users can access this route
  },
  {
    path: 'ticketing',
    component: TicketingComponent,
    canActivate: [RoleGuardService],
    data: { roles: [UserRole.ADMIN, UserRole.TECHNICIAN] }, // E.g. how to user roleguard service
  },

  {path: 'support', component: SupportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'ticketing/:userType', component: TicketingComponent},
  {path: 'graphs', component: GraphsComponent},
  {path: 'statuscode/:statusCode', component: StatuscodepageComponent},
  {path: 'manage-employees',component:ManageEmployeesComponent, canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.HR_MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
