import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  myName="Jeff";
  getName()
  {
    alert(this.myName)
  }

  gotToAddPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

}

