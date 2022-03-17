import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableRow, TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { DropmenuComponent } from './dropmenu/dropmenu.component';
import { Box4Component } from './box4/box4.component';
import { TestpageComponent } from './testpage/testpage.component';
import { Box5Component } from './box5/box5.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    TableRow,
    MenubarComponent,
    HeaderComponent,
    FooterComponent,
    Box1Component,
    Box2Component,
    Box3Component,
    DropmenuComponent,
    Box4Component,
    TestpageComponent,
    Box5Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
