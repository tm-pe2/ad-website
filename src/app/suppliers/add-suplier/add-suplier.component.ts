import { Component, Input, OnInit } from '@angular/core';

import { SuppliersComponent } from '../suppliers.component';
import { SupplierService } from '../../services/supplier.service'
import { SuppliersForm } from 'src/app/interfaces/form';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {


  @Input() parent?: SuppliersComponent;
  constructor(public supplierService : SupplierService, public router : Router) { } 
  
  onAddFormSubmit(form : SuppliersForm) {
    // TODO: Add Supplier
    this.supplierService.addSupplier(form);
  }

  onCancelAddSupplier() {
    /* this.parent?.changeStatusOnCancelAddSupplier(); */
  }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigate([`suppliers`]);
  }


  
}
