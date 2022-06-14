import { Component, Input, OnInit } from '@angular/core';

import { SuppliersComponent } from '../suppliers.component';
import { SupplierService } from '../../services/supplier.service'
import { SuppliersForm } from 'src/app/interfaces/form';





@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {


  @Input() parent?: SuppliersComponent;
  constructor(public supplierService : SupplierService) { } 
  
  onAddFormSubmit(form : SuppliersForm) {
    // TODO: Add Supplier 
  }

  onCancelAddSupplier() {
    /* this.parent?.changeStatusOnCancelAddSupplier(); */
  }

  ngOnInit(): void {
  }




  
}
