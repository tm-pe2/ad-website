import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})
export class WorkerappComponent implements OnInit {
  displayedpage = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
