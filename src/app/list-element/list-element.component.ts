import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;
  constructor() { }

  ngOnInit(): void {
  }

  selectCustomer(): void{
    this.parent!.parent.displayPage = 2;
  }

}
