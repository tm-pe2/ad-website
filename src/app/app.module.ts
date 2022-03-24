import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { EmployeeCardComponent } from './manage-employees/employee-card/employee-card.component';
import { AddEmployeeFormComponent } from './manage-employees/add-employee-form/add-employee-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeFormComponent } from './manage-employees/edit-employee-form/edit-employee-form.component';
import { EmployeeListItemComponent } from './manage-employees/employee-list-item/employee-list-item.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { UtilService } from './util.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketingComponent,
    ManageEmployeesComponent,
    EmployeeCardComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent,
    EmployeeListItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
