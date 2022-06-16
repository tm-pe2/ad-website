import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SuppliersForm } from 'src/app/interfaces/form';
import { Address } from 'src/app/interfaces/address';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-details-supplier',
  templateUrl: './details-supplier.component.html',
  styleUrls: ['./details-supplier.component.css']
})
export class DetailsSupplierComponent implements OnInit {

  constructor(private router: ActivatedRoute, private supplierService: SupplierService, private route: Router) { }

  parameterSub: Subscription | undefined;
  suppliersF: SuppliersForm[] = [];

  tempId = 0;

  supName?: string;
  supVAT?: string;
  supHouse_number?: string;
  supAddress!: Address;



  supService?: string;


  ngOnInit(): void {
    this.parameterSub = this.router.params.subscribe(params => {
      this.tempId = +params['id'];
    });
    this.supplierService.getSupplierById(this.tempId).subscribe((result: any) =>{
        this.supName = result['company_name'];
        this.supVAT = result['vat_number'];
        this.supHouse_number = result['house_number'];
        this.supAddress = result['address'];
        this.supService = result['service_type'];
    });
    console.log(" Ello");
    console.log(this.supAddress);
  }
  

  gotToPage(pageName:string):void{
    this.route.navigate([`${pageName}`]);
  }

}
