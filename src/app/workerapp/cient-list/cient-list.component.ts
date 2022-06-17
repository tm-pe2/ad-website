import { Component, OnInit, Input } from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { WorkerAppService } from 'src/app/services/worker-app.service';

@Component({
  selector: 'app-cient-list',
  templateUrl: './cient-list.component.html',
  styleUrls: ['./cient-list.component.css']
})
export class CientListComponent implements OnInit{
  @Input() parent?: WorkerappComponent;
  constructor(public service: WorkerAppService) 
  { 
    this.service.submitted = false;
    this.service.posted = false;
    this.service.error = false;

  }

  ngOnInit(): void
  {
    
  }
}
