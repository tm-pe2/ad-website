import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
  providers: [SupplierService], 

})
export class SuppliersComponent implements OnInit {

  constructor(private router: Router, public supplierService : SupplierService) { }

  ngOnInit(): void {
    this.supplierService.loadSupplier();
  }
  myName="Jeff";
  
  getName()
  {
    alert(this.myName)
  }

  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

}

