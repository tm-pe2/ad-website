import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manage-employees', component: ManageEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
