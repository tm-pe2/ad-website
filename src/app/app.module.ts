import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { SmallGraphComponent } from './graphs/small-graph/small-graph.component';
import { MediumGraphComponent } from './graphs/medium-graph/medium-graph.component';
import { BigGraphComponent } from './graphs/big-graph/big-graph.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { ManageTickets } from './ticketing/ticketing.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MatIconModule } from '@angular/material/icon'
import { UtilService } from './util.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { UserdataService } from './services/userdata.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ClientTicketsComponent } from './ticketing/client-tickets/client-tickets.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';
import { TicketingComponent } from './ticketing/ticketing.component';
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
import { ReactiveFormsModule } from '@angular/forms';


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
    NavigationComponent, 
    ClientTicketsComponent,
    LogoutComponent,
    StatuscodepageComponent, 
    SupportComponent,
    TicketingComponent,
    SuppliersComponent,
    AddSuplierComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
    DetailsSupplierComponent,
    ContactSupplierComponent,
    ContractOverveiwComponent,
    ManageContractComponent,
    ManageTickets
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
    JwtHelperService,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
