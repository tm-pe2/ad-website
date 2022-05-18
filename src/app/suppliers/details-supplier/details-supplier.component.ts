import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-details-supplier',
  templateUrl: './details-supplier.component.html',
  styleUrls: ['./details-supplier.component.css']
})
export class DetailsSupplierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
