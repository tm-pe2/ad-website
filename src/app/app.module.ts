import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphCanvasComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { ManageTickets } from './ticketing/ticketing.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'
import { UtilService } from './util.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ClientTicketsComponent } from './ticketing/client-tickets/client-tickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallCardComponent,
    BigCardComponent,
    ProfileCardComponent,
    ButtonComponent,
    TicketingComponent,
    LoginComponent,
    RegistrationComponent,
    GraphsComponent,
    GraphCanvasComponent,
    ManageTickets,
    ClientTicketsComponent, 
    TicketingComponent,
    ManageEmployeesComponent,
    EmployeeCardComponent,
    AddEmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
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
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
