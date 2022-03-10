import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormControlName, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {

 // myForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }   
 
  ngOnInit(): void {
   
  }

  homePage="suppliers"
  addSupplier(suplierName:string):void{
      alert("Supplier has been added");
      this.router.navigate([`${this.homePage}`]);
  }

  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


  
}
