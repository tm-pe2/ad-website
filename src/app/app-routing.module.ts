import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuplierComponent } from './suppliers/add-suplier/add-suplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { CustomerComponent } from './manage-customers/customers/customers.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ConsumptionEstimationComponent } from './consumption-estimation/consumption-estimation.component';
import { GraphsComponent } from './graphs/graphs.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';
import { ManageinvoicesComponent } from './manageinvoices/manageinvoices.component';
import { UserRole } from './interfaces/User';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';
import { DetailsSupplierComponent } from './suppliers/details-supplier/details-supplier.component';
import { ContactSupplierComponent } from './suppliers/contact-supplier/contact-supplier.component';
import { ContractOverveiwComponent } from './suppliers/contract-overveiw/contract-overveiw.component';
import { ManageContractComponent } from './suppliers/manage-contract/manage-contract.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { WorkerappComponent } from './workerapp/workerapp.component';

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

    
  {
    path: 'manageinvoices', 
    component: ManageinvoicesComponent, 
    canActivate: [RoleGuardService], 
    data: {roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE, UserRole.CUSTOMER]}
  },

  {path: 'support', component: SupportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'ticketing/:userType', component: TicketingComponent},
  {path: 'graphs', component: GraphsComponent, canActivate: [RoleGuardService], data: { roles: [UserRole.CUSTOMER] }},
  {path: 'statuscode/:statusCode', component: StatuscodepageComponent},


  //TEMP
  {path: 'workerapp', component: WorkerappComponent, canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
  
  {path: 'manage-employees',component:ManageEmployeesComponent,canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.HR_MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
  {path: 'manage-employees/addEmployee',component:AddEmployeeFormComponent,canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.HR_MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
  {path: 'manage-employees/editEmployees/:id',component:EditEmployeeFormComponent,canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.HR_MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
  {path: 'manage-employees/details/:id',component:EmployeeCardComponent,canActivate: [RoleGuardService], data:{roles:[UserRole.MANAGER,UserRole.HR_MANAGER,UserRole.ADMIN,UserRole.EMPLOYEE]}},
  
  {path: 'manageinvoices', component: ManageinvoicesComponent, canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]}},
  {path:'consumption-estimation',component:ConsumptionEstimationComponent},
  {path: 'add-suplier', component: AddSuplierComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]}},
  {path: 'edit-supplier/:id', component: EditSupplierComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'delete-supplier', component: DeleteSupplierComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'details-supplier/:id', component: DetailsSupplierComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'contact-supplier', component: ContactSupplierComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'contract-overview', component: ContractOverveiwComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'manage-contract', component: ManageContractComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'suppliers', component: SuppliersComponent,  canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER]} },
  {path: 'manage-customers',component:CustomerComponent, canActivate: [RoleGuardService], data: {roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE]}},
  {path: 'consumption-estimation',component:ConsumptionEstimationComponent, canActivate: [RoleGuardService], data: {roles: [UserRole.CUSTOMER]}},
];




@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
