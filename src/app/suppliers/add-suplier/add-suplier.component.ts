import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SupplierData } from 'src/app/interfaces/suppliersData';




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

  ngOnInit(): void {
   
  }

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
    addres: addSupplierForm.value.addNameSup.addAddressSup, 
    city: addSupplierForm.value.addCitySup, 
    zip: addSupplierForm.value.addZipSup, 
    type: addSupplierForm.value.addTypeSup
    };
  }


  
  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


  
}
