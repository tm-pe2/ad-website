import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TicketingComponent } from './ticketing/ticketing.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'menubar', component: MenubarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
