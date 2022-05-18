import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SupplierData } from 'src/app/interfaces/suppliersData';
import { Supplier } from '../supplier';
import { Address } from '../../interfaces/address';






@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {

  // Vars Form validation
  formNotValid = false;
  credentialsNotValid = false;


  constructor(private router: Router) { }   
 
  // Error msg

  allfilled = false;
  invalidF = false;

  tester = 1;

  //Testing hardcoded for sending data to database
  idT = 2; 
  nameT = "TestSupplier";
  addresT = "TestStraat 12";
  cityT = "Schelle";
  zipT = 2627;
  typeT = "GAS"
  VATT = 123123123

  ngOnInit(): void {
   
  }

  onSubmit(addSupplierForm: NgForm){
    if(!addSupplierForm.valid){
      this.invalidF = true;
      this.allfilled = true;
      return;
    }
    this.control(addSupplierForm);
    console.log("u good");

    let tempId = 2;
    
    var supAddress: Address = {adressID:2,city:addSupplierForm.value.addCitySup,street:addSupplierForm.value.addStreetSup,housNumber:addSupplierForm.value.addHouseNumberSup,postalcode:addSupplierForm.value.addZipSup,country:addSupplierForm.value.addCountrySup};
    var addedSupplier = new Supplier(tempId,addSupplierForm.value.addNameSup,supAddress,addSupplierForm.value.addTypeSup);

    

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


  
  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


  
}
