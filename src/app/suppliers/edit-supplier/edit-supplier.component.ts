import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SuppliersComponent } from '../suppliers.component';
import { SupplierService } from '../../services/supplier.service'
import { SuppliersForm } from 'src/app/interfaces/form';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {
  
  @Input() parent?: SuppliersComponent;
  constructor(public supplierService : SupplierService, public router : Router, private actRouter : ActivatedRoute) { } 
  
  supplier?: SuppliersForm;

  parameterSub: Subscription | undefined;
  supId = 0;


  onEditFormSubmit(form : SuppliersForm) {
    let sup:SuppliersForm = form;
    sup.id = this.supId;
    console.log(sup.id);
    this.supplierService.editSupplier(form);
  }
  
  ngOnInit(): void {
    this.parameterSub = this.actRouter.params.subscribe(params => {
      this.supId = +params['id'];
    });
    console.log(this.supId);
    this.supplierService.getSupplierById(this.actRouter.snapshot.params['id'] as number). subscribe({
      next:(res: SuppliersForm) => {
        this.supplier = res;
        console.log(this.supplier)

      }
    });
  }

  backToHome(){
    this.router.navigate([`suppliers`]);
  }



}
