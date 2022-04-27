import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../util.service';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() parent ?: WorkerappComponent; 

  constructor(private cData : UtilService) {}

  ngOnInit(): void {

  }
}
