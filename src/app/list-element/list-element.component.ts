import { Component, Input, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import { WorkerAppService } from '../services/worker-app.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() parent ?: CientListComponent;

  constructor(private cData: WorkerAppService	) { 

  }

  ngOnInit(): void {
    
  }

  selectCustomer(): void{
    this.cData.selectedCust = 4;
  }

}
