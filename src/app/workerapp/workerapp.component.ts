import { Component, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import {} from '@angular/core';
import { UtilService } from '../util.service';
import { Cust } from '../Cust';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})

export class WorkerappComponent implements OnInit {
  displayPage : number = 1;
  eid : number = 5;
  nCust : number = 10;
  custData: Array<Cust> = [];
  selectedCust : number;

  constructor(private cData: UtilService) {
    this.selectedCust = cData.selectedCust;
  }
  
  ngOnInit(): void{
    for (let i = 0; i < this.nCust; i++) {
      this.custData.push(new Cust(i, this.eid));
    }
  }

  createCust(): void{
    var cl = document.getElementById('list');
    this.custData.forEach(cust => {
      //TIJDELIJK
      var html : string = `<div #element class="m-4 p-2 pl-4 pr-4 rounded-2xl bg-slate-200 text-slate-300 drop-shadow-md flex items-center justify-between"><div class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 mr-2"><p>${cust.name}</p></div><div class="bg-slate-500 drop-shadow-md rounded-2xl mr-2 p-2 pr-4 pl-4"><p>${cust.addr}</p></div><div><div class="flex w-80 justify-end"><div class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 mr-2"><p>${cust.status}</p></div><button class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 ml-2">Go ></button></div></div>` // :)
      if(cust.empID == this.eid){
        cl?.insertAdjacentHTML("beforeend", html);
      }
    });
  }
}

