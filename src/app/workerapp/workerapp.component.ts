import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})
export class WorkerappComponent implements OnInit {
  public displayPage : number = 1
  constructor() { }
  

  ngOnInit(): void {

  }

}
