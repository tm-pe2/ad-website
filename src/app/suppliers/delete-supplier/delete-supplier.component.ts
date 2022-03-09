import { Component, OnInit } from '@angular/core';
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

 
  gotToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  
/*   once you pressed the button there will be an alert
     telling you the supplier has been deleted and automaticly 
     redirect you back to the main hub
*/
  supplierPage = "suppliers"
  deleteSupplier(supName:string):void{
    alert(supName + " has been Deleted")
    this.router.navigate([`${this.supplierPage}`]);
  }

}
