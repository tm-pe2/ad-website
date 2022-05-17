import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, GraphCanvasComponent } from './dashboard/dashboard.component';
import { SmallCardComponent } from './dashboard/small-card/small-card.component';
import { BigCardComponent } from './dashboard/big-card/big-card.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { SmallGraphComponent } from './graphs/small-graph/small-graph.component';
import { MediumGraphComponent } from './graphs/medium-graph/medium-graph.component';
import { BigGraphComponent } from './graphs/big-graph/big-graph.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { ManageTickets, TicketingComponent } from './ticketing/ticketing.component';
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
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { StatuscodepageComponent } from './statuscodepage/statuscodepage.component';
import { SupportComponent } from './support/support.component';
import { WorkerappComponent } from './workerapp/workerapp.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ListElementComponent } from './workerapp/cient-list/list-element/list-element.component';
import { CientListComponent } from './workerapp/cient-list/cient-list.component';
<<<<<<< HEAD
import { CientPageComponent } from './workerapp/cient-page/cient-page.component';
import { HeaderComponent } from './workerapp/header/header.component';
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d48b3d8 (no errors?)

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
    ClientTicketsComponent,
    LogoutComponent,
    StatuscodepageComponent, 
    SupportComponent,
    ManageTickets,
    WorkerappComponent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ListElementComponent,
    CientListComponent,
<<<<<<< HEAD
    HeaderComponent,
    CientPageComponent,
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d0a21fc (nog altij kpot)
=======
>>>>>>> parent of d48b3d8 (no errors?)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
