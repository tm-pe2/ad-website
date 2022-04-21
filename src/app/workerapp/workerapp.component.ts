import { Component, OnInit } from '@angular/core';
import { CientListComponent } from '../cient-list/cient-list.component';
import {} from '@angular/core';

@Component({
  selector: 'app-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.css']
})



export class WorkerappComponent implements OnInit {
  public displayPage : number = 1;
  public eid : number = 5;
  public nCust : number = 70;
  public custData: Array<Cust> = [];
  public selectedCust : number = 0;

  constructor() { }
  
  ngOnInit(): void{
    this.go();
  }

  createCust(): void{
    var cl = document.getElementById('list');
    //let newcomp = new CientListComponent()
    for (let i = 0; i < this.nCust; i++) {
      this.custData.push(new Cust(i, this.eid));
    }
    this.custData.forEach(cust => {
      var html : string = `<div #element class="m-4 p-2 pl-4 pr-4 rounded-2xl bg-slate-200 text-slate-300 drop-shadow-md flex items-center justify-between"><div class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 mr-2"><p>${cust.name}</p></div><div class="bg-slate-500 drop-shadow-md rounded-2xl mr-2 p-2 pr-4 pl-4"><p>${cust.addr}</p></div><div><div class="flex w-80 justify-end"><div class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 mr-2"><p>${cust.status}</p></div><button class="bg-slate-500 drop-shadow-md rounded-2xl p-2 pr-4 pl-4 ml-2">Go ></button></div></div>` // :)
      if(cust.empID == this.eid){
        cl!.insertAdjacentHTML("beforeend", html);
      }
    });
  }

  go() : void{
    this.displayPage = 2;
    console.log("euh");
  }

}

class Cust {
  name?: string;
  custID?: number;
  empID?: number;
  addr?: string;
  currentDate?: Date;
  nextDate?: Date;
  status?: string;
  constructor(cid : number, eid : number){
    this.custID = cid;
    this.empID = eid;
    this.name = "Name Customer " + cid;
    this.addr = "Addr of customer " + cid;
    this.currentDate = new Date("2404/04/04");
    this.nextDate = new Date("2303/03/03");
    this.status = "not done"
  }
}