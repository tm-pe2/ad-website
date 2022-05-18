import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-supplier',
  templateUrl: './contact-supplier.component.html',
  styleUrls: ['./contact-supplier.component.css']
})
export class ContactSupplierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
