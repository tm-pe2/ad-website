import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { SmallGraphComponent } from './graphs/small-graph/small-graph.component';
import { MediumGraphComponent } from './graphs/medium-graph/medium-graph.component';
import { BigGraphComponent } from './graphs/big-graph/big-graph.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'
import { UtilService } from './util.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';
import { ClientTicketsComponent } from './ticketing/client-tickets/client-tickets.component';
import { ManageTickets } from './ticketing/manage-tickets/manage-tickets.component';

import { NavigationComponent } from './navigation/navigation.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return AuthService.getAccessToken();
        },
      }
    }),
  ],
  providers: [
    UtilService,
    UserdataService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, 
    FormsModule,
    ReactiveFormsModule,
    JwtHelperService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
