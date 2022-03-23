import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ad-frontend';

  // For login test
  // Adds user service so you can access the authenticated variable
  constructor (public service: UserdataService) {}

}
