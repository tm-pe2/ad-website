import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SupplierData } from 'src/app/interfaces/suppliersData';



@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  homePage = "suppliers"
  allfilled = false;
  invalidF = false;

  onSubmit(addSupplierForm: NgForm){
    if(!addSupplierForm.valid){
      this.invalidF = true;
      this.allfilled = true;
      return;
    }
    this.control(addSupplierForm);

  }

  private control(addSupplierForm: NgForm){
   const suppliersData: SupplierData =  { 
    name: addSupplierForm.value.addNameSup,
    street: addSupplierForm.value.addStreetSup, 
    housenumber: addSupplierForm.value.addHouseNumberSup,
    city: addSupplierForm.value.addCitySup, 
    zip: addSupplierForm.value.addZipSup, 
    country: addSupplierForm.value.addCountrySup,
    type: addSupplierForm.value.addTypeSup
    };
  }




}
