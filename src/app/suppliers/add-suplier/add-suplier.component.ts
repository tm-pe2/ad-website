import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SupplierData } from 'src/app/interfaces/suppliersData';
import { Supplier } from '../supplier';
import { Address } from '../../interfaces/address';
import { FormsComponent } from 'src/app/forms/forms.component';
import { SuppliersComponent } from '../suppliers.component';
import { SupplierService } from '../services/supplier.service';
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
