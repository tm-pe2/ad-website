import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { Box4Component } from './box4/box4.component';
import { Box5Component } from './box5/box5.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropmenuComponent } from './dropmenu/dropmenu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TestpageComponent } from './testpage/testpage.component';
import { TicketingComponent } from './ticketing/ticketing.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ticketing', component: TicketingComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'menubar', component: MenubarComponent},
  {path: 'dropmenu', component: DropmenuComponent},
  {path: 'box1', component: Box1Component},
  {path: 'box2', component: Box2Component},
  {path: 'box3', component: Box3Component},
  {path: 'box4', component: Box4Component},
  {path: 'box5', component:Box5Component},
  {path: 'testpage', component: TestpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
