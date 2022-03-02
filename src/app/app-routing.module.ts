import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianTodoComponent } from './technician-todo/technician-todo.component';

const routes: Routes = [
  {path: 'techniciantodo', component: TechnicianTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
