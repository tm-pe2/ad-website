import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { UtilService } from 'src/app/util.service';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  /*
  constructor(private cData: UtilService) {
    this.custArr = cData.custData;
  }
  */
  constructor(private cData: UtilService, private service: WorkerAppService) 
  { }
  ngOnInit(): void
  {
    
  }
}
