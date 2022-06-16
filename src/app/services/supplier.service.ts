import { Injectable, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SuppliersForm } from "../interfaces/form";
import { SupplierData } from "../interfaces/suppliersData";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {


    constructor(private http:HttpClient) {}

    suppliers: SupplierData[] = [];
    currentSupplier?: SupplierData;

    addSupplier(suppliers: SuppliersForm): Promise<void>{
        const promise = new Promise<void>((resolve, reject) => 
        this.http.post(environment.apiUrl + '/suppliers', suppliers).subscribe(
            {
                next:(res: any) => {
                   resolve();
                },
                error:(err) => {
                    reject(err);                
                }
            }
        ));
        return promise;
    }

    editSupplier(suppliers : SuppliersForm){
        // Add code to edit supplier
    }


}