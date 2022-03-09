import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnicianTodoComponent } from './technician-todo/technician-todo.component';
import { TechdTableRowComponent } from './technician-todo/techd-table-row/techd-table-row.component';
import { TechFilterButtonsComponent } from './tech-filter-buttons/tech-filter-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnicianTodoComponent,
    TechdTableRowComponent,
    TechFilterButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
