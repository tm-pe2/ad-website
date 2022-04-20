import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-overveiw',
  templateUrl: './contract-overveiw.component.html',
  styleUrls: ['./contract-overveiw.component.css']
})
export class ContractOverveiwComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


}
