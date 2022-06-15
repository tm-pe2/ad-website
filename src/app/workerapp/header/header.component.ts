import { Component, Input, OnInit } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() parent ?: WorkerappComponent; 

  constructor() {}

  ngOnInit(): void {

  }
}
