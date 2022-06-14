import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SuppliersForm } from 'src/app/interfaces/form';



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
  

  }




}
