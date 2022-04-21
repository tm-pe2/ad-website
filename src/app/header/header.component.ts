import { Component, Input, OnInit } from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() parent ?: WorkerappComponent; 

  constructor() { }

  ngOnInit(): void {
    this.parent!.displayPage = 1;
  }

  goPage1(): void{
    this.parent!.displayPage = 1;
  }

  goPage2(): void{
    this.parent!.displayPage = 2;
  }
}
