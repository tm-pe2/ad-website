import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GraphCanvasComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { ManageTickets } from './ticketing/ticketing.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
>>>>>>> 61f4573eaa39767de18bdea51d4a0e271fc76be0
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
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
<<<<<<< HEAD
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
=======
>>>>>>> 61f4573eaa39767de18bdea51d4a0e271fc76be0
    ManageEmployeesComponent,
    EmployeeCardComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent,
<<<<<<< HEAD
=======

>>>>>>> 61f4573eaa39767de18bdea51d4a0e271fc76be0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
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
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> 61f4573eaa39767de18bdea51d4a0e271fc76be0
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
