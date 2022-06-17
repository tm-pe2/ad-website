import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SuppliersForm } from 'src/app/interfaces/form';
import { Address, City } from 'src/app/interfaces/address';
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

  supAddress!: Address;
  cityLink?: number;
  cityInterface?: City;

  supStreet?: string;
  supHousenumber?: number;
  supPostal?: number;
  supCountry?: string;
  supCity?: string;

  supService?: string;


  ngOnInit(): void {
    this.parameterSub = this.router.params.subscribe(params => {
      this.tempId = +params['id'];
    });
    this.supplierService.getSupplierById(this.tempId).subscribe((result: any) =>{
        this.supName = result['company_name'];
        this.supVAT = result['vat_number'];
        this.supAddress = result['address'];
        this.supService = result['service_type'];
      
       

        this.supHousenumber = this.supAddress.house_number;
        this.supStreet = this.supAddress.street;
        this.supPostal = this.supAddress.postal_code;
        this.supCountry = this.supAddress.country;
        this.supCity = this.supAddress.city_name;

    

        console.log(this.supAddress);
        console.log(this.cityLink);
    });
    
  }
  

  gotToPage(pageName:string):void{
    this.route.navigate([`${pageName}`]);
  }

}
