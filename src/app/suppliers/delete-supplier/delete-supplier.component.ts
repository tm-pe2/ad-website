import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 
  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  presDeleted = false;
  
/*   once you pressed the button there will be an alert
     telling you the supplier has been deleted and automaticly 
     redirect you back to the main hub
*/
  onSubmit(deleteSupplier: NgForm){
    this.presDeleted = true;
  }

}
