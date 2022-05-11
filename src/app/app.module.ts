import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilService } from './util.service';
/*
import { HeaderComponent } from './header/header.component';
import { WorkerappComponent } from './workerapp/workerapp.component';
import { CientListComponent } from './cient-list/cient-list.component';
import { CientPageComponent } from './cient-page/cient-page.component';
import { ListElementComponent } from './list-element/list-element.component';
import { WorkerAppService } from './services/worker-app.service';
*/
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './workerapp/header/header.component';
import { WorkerappComponent } from './workerapp/workerapp.component';
import { CientListComponent } from './workerapp/cient-list/cient-list.component';
import { ListElementComponent } from './workerapp/cient-list/list-element/list-element.component';
import { CientPageComponent } from './workerapp/cient-page/cient-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkerappComponent,
    CientListComponent,
    ListElementComponent,
    CientPageComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
