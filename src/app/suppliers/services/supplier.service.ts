import { Injectable, Output } from '@angular/core';
import { Supplier } from '../supplier';
import { Address } from '../../interfaces/address';

@Injectable({
    providedIn: 'root'
})

export class SupplierService {
    constructor() { }

    sId = 2;
    sName = "testSupNaam";
    sAddres:Address = {adressID:2,city:"Schelle",postalcode:2627,street:"momoStraat",housNumber:12,country:"Belgium"}
    sType = "GAS";


    supplier1 = new Supplier(3,this.sName,this.sAddres,this.sType);
    supplier2 = new Supplier(4,this.sName,this.sAddres,this.sType);


    supplierMain : Supplier = this.supplier2;

    suppliersGroup: Supplier[] = [this.supplier1, this.supplier2];

}
