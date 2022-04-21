import { Component, OnInit, Input } from '@angular/core';
import { ListElementComponent } from '../list-element/list-element.component';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent ?: WorkerappComponent;
  constructor() { }

  ngOnInit(): void {
    this.parent?.createCust();
  }
}
