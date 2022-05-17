import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent
  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    this.parent!.displayPage = 1
    console.log("sheesh")
  }
}
