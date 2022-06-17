import { Component, OnInit } from '@angular/core';
import {} from '@angular/core';
import { WorkerAppService } from '../services/worker-app.service';


@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})

export class WorkerappComponent implements OnInit {
  displayPage : number = 1;
  constructor(service: WorkerAppService) 
  {}
  
  ngOnInit(): void{

  }
  goPage1(): void{
    this.displayPage = 1;
  }
  goPage2(): void{
    this.displayPage = 2;
  }
}

