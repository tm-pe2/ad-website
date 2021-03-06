import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './manage-customers/customer-detail/customer-detail.component';
import { CustomerComponent } from './manage-customers/customers/customers.component';
import { ConfirmDialogComponent } from './manage-customers/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import { TicketingComponent } from './ticketing/ticketing.component';
import { AddCustomerDialogComponent } from './manage-customers/add-customer-dialog/add-customer-dialog.component';
import { ConsumptionEstimationComponent } from './consumption-estimation/consumption-estimation.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { SmallGraphComponent } from './graphs/small-graph/small-graph.component';
import { MediumGraphComponent } from './graphs/medium-graph/medium-graph.component';
import { BigGraphComponent } from './graphs/big-graph/big-graph.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { MonthlyUsageChartComponent } from './graphs/monthly-usage-chart/monthly-usage-chart.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'
import { UtilService } from './util.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';
import { ClientTicketsComponent } from './ticketing/client-tickets/client-tickets.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';
import { ManageinvoicesComponent } from './manageinvoices/manageinvoices.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddSuplierComponent } from './suppliers/add-suplier/add-suplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsSupplierComponent } from './suppliers/details-supplier/details-supplier.component';
import { ContactSupplierComponent } from './suppliers/contact-supplier/contact-supplier.component';
import { ContractOverveiwComponent } from './suppliers/contract-overveiw/contract-overveiw.component';
import { ManageContractComponent } from './suppliers/manage-contract/manage-contract.component';
import { FormsModule }   from '@angular/forms';
import { ManageTickets } from './ticketing/manage-tickets/manage-tickets.component';
import { FormsComponent } from './forms/forms.component';
import { RolesToStringPipe } from './manage-employees/roles-to-string.pipe';
import { WorkerappComponent } from './workerapp/workerapp.component';
import { CientListComponent } from './workerapp/cient-list/cient-list.component';
import { CientPageComponent } from './workerapp/cient-page/cient-page.component';
import { ListElementComponent } from './workerapp/cient-list/list-element/list-element.component';
import { HeaderComponent } from './workerapp/header/header.component';
import { WorkerAppService } from './services/worker-app.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallCardComponent,
    BigCardComponent,
    ProfileCardComponent,
    SmallGraphComponent,
    MediumGraphComponent,
    BigGraphComponent,
    ButtonComponent,
    TicketingComponent,
    CustomerComponent,
    CustomerDetailComponent,
    ConfirmDialogComponent,
    AddCustomerDialogComponent,
    ConsumptionEstimationComponent,
    GraphsComponent,
    MonthlyUsageChartComponent,
    LoginComponent,
    RegistrationComponent,
    GraphsComponent,
    ManageTickets,
    ClientTicketsComponent, 
    TicketingComponent,
    ManageEmployeesComponent,
    EmployeeCardComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent,
    NavigationComponent, 
    ClientTicketsComponent,
    LogoutComponent,
    StatuscodepageComponent, 
    SupportComponent,
    ManageinvoicesComponent,
    TicketingComponent,
    SuppliersComponent,
    AddSuplierComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
    DetailsSupplierComponent,
    ContactSupplierComponent,
    ContractOverveiwComponent,
    ManageContractComponent,
    FormsComponent,
    RolesToStringPipe,
    WorkerappComponent,
    CientListComponent,
    CientPageComponent,
    ListElementComponent,
    HeaderComponent
  ],
  entryComponents:[CustomerDetailComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return AuthService.getAccessToken();
        },
      }
    }),
    
  ],
  exports:[
    CustomerComponent,
    CustomerDetailComponent,
    ConfirmDialogComponent,
    HttpClientModule,
    MatIconModule,
    
  ],
  providers: [
    UtilService,
    UserdataService,
    WorkerAppService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    JwtHelperService,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
