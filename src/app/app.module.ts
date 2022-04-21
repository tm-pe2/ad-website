import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilService } from './util.service';
import { HeaderComponent } from './header/header.component';
import { WorkerappComponent } from './workerapp/workerapp.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CientListComponent } from './cient-list/cient-list.component';
import { CientPageComponent } from './cient-page/cient-page.component';
import { ListElementComponent } from './list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkerappComponent,
    LoginPageComponent,
    CientListComponent,
    CientPageComponent,
    ListElementComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
