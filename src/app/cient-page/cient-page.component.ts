import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})
export class CientPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
