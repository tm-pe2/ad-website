import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { GraphsComponent } from './graphs/graphs.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manage-employees', component: ManageEmployeesComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard/:userType', component: DashboardComponent},
  {path: 'ticketing/:userType', component: TicketingComponent},
  {path: 'graphs', component: GraphsComponent},
=======
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manage-employees', component: ManageEmployeesComponent}
>>>>>>> 61f4573eaa39767de18bdea51d4a0e271fc76be0
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
