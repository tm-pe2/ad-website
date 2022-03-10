import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  editSup():void{
    alert("Supplier Has been edited");
    this.router.navigate([`${this.homePage}`]);

  }

}
