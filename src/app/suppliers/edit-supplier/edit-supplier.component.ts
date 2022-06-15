import { Component, Input, OnInit } from '@angular/core';

import { SuppliersComponent } from '../suppliers.component';
import { SupplierService } from '../../services/supplier.service'
import { SuppliersForm } from 'src/app/interfaces/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {
  
  @Input() parent?: SuppliersComponent;
  constructor(public supplierService : SupplierService, public router : Router) { } 
  
  onEditFormSubmit(form : SuppliersForm) {
    this.supplierService.editSupplier(form);
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
