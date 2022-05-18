import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSuplierComponent } from './suppliers/add-suplier/add-suplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { GraphsComponent } from './graphs/graphs.component';
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
=======
import { ContactSupplierComponent } from './suppliers/contact-supplier/contact-supplier.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';
import { DetailsSupplierComponent } from './suppliers/details-supplier/details-supplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ContractOverveiwComponent } from './suppliers/contract-overveiw/contract-overveiw.component';
import { ManageContractComponent } from './suppliers/manage-contract/manage-contract.component';

import { TicketingComponent } from './ticketing/ticketing.component';
import { Component } from 'ag-grid-community';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'add-suplier', component: AddSuplierComponent},
  {path: 'edit-supplier', component: EditSupplierComponent},
  {path: 'delete-supplier', component: DeleteSupplierComponent},
  {path: 'details-supplier', component: DetailsSupplierComponent},
  {path: 'contact-supplier', component: ContactSupplierComponent},
  {path: 'contract-overview', component: ContractOverveiwComponent},
  {path: 'manage-contract', component: ManageContractComponent}
>>>>>>> SupliersTodoStyle
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
