import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuplierComponent } from './add-suplier/add-suplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteSupplierComponent } from './suppliers/delete-supplier/delete-supplier.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { TicketingComponent } from './ticketing/ticketing.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'add-suplier', component: AddSuplierComponent},
  {path: 'edit-supplier', component: EditSupplierComponent},
  {path: 'delete-supplier', component: DeleteSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
