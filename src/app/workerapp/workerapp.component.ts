import { Component, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import { UtilService } from '../util.service';
import {} from '@angular/core';
import { Cust } from '../Cust';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { WorkerAppService } from '../services/worker-app.service';

@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})

export class WorkerappComponent implements OnInit {
  displayPage : number = 1;
  constructor(private cData: UtilService) {
  }
  
  ngOnInit(): void{

  }
  goPage1(): void{
    this.displayPage = 1;
  }
  goPage2(): void{
    this.displayPage = 2;
  }
}

