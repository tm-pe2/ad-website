import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp/workerapp.component';
import { Cust } from '../Cust';
import { WorkerAppService } from '../services/worker-app.service';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  custArr : Array<Cust> = [];
  constructor(private cData: WorkerAppService) {
    this.custArr = cData.custData;
  }

  ngOnInit(): void {
    //this.parent!.createCust();
  }
}
