import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



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
  showSuccesMsg:boolean=false;
  showErrorMsg:boolean=false;
  errorMsg:string = "";

  tester = 1;

  ngOnInit(): void {
   
  }


  clickButton(logForm: NgForm){
    if(!logForm.valid){
      this.formNotValid = true
      this.credentialsNotValid = false;
      return
    }
  }



  
  addSupplier()
  {/*
    // form not valid? --> error msg
    if(this.tester != 0){
      this.errorMsg = "Name Field Empty"
      this.showErrorMsg=!this.showErrorMsg
    }
    else{
      this.showSuccesMsg=!this.showSuccesMsg
    }*/
  }
  
  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


  
}
